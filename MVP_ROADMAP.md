# MedScribe MVP - 10-Week Implementation Roadmap

## Quick Start: What You Need TODAY

### 1. Get These Accounts (Free Tiers Available)
```bash
# Development Tools
✓ GitHub account
✓ Vercel account (deploy Next.js)
✓ Supabase account (database + auth)
✓ Stripe account (TEST mode)

# AI Services
✓ OpenAI API key (Whisper + GPT-4)
✓ Anthropic API key (Claude 3.5 Sonnet)

# Optional (can add later)
○ AWS account (S3 storage)
○ Sentry (error tracking)
```

### 2. Clone & Setup Local Environment
```bash
# Create Next.js app with TypeScript
npx create-next-app@latest medscribe-app --typescript --tailwind --app
cd medscribe-app

# Install core dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install openai anthropic
npm install stripe
npm install zod
npm install @tanstack/react-query
npm install zustand
npm install date-fns

# Dev dependencies
npm install -D @types/node prisma
```

### 3. Environment Setup
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres
```

---

## WEEK 1-2: DATABASE & AUTHENTICATION

### Day 1-2: Supabase Setup
```sql
-- Run in Supabase SQL Editor

-- 1. Organizations table
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    plan VARCHAR(50) DEFAULT 'starter',
    stripe_customer_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 2. Users table (extends Supabase auth.users)
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'therapist',
    license_number VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Sessions table
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    therapist_id UUID REFERENCES auth.users(id),
    patient_identifier VARCHAR(255),
    session_date TIMESTAMP NOT NULL,
    duration_seconds INTEGER,
    audio_url TEXT,
    transcription TEXT,
    clinical_note TEXT,
    note_format VARCHAR(50) DEFAULT 'SOAP',
    status VARCHAR(50) DEFAULT 'recording',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 4. Subscriptions table
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    stripe_subscription_id VARCHAR(255) UNIQUE,
    plan VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    current_period_end TIMESTAMP,
    monthly_session_limit INTEGER,
    sessions_used_this_month INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_sessions_org ON sessions(organization_id);
CREATE INDEX idx_sessions_date ON sessions(session_date DESC);
CREATE INDEX idx_user_profiles_org ON user_profiles(organization_id);

-- Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own profile"
    ON user_profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can view sessions in their organization"
    ON sessions FOR SELECT
    USING (
        organization_id IN (
            SELECT organization_id FROM user_profiles WHERE id = auth.uid()
        )
    );

CREATE POLICY "Users can create sessions in their organization"
    ON sessions FOR INSERT
    WITH CHECK (
        organization_id IN (
            SELECT organization_id FROM user_profiles WHERE id = auth.uid()
        )
    );
```

### Day 3-5: Authentication Implementation
```typescript
// lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createClient = () => createClientComponentClient();

export const createServerClient = () =>
  createServerComponentClient({ cookies });

// lib/supabase/server.ts
import { createServerClient } from './client';

export async function getSession() {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function getUserProfile(userId: string) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('user_profiles')
    .select('*, organizations(*)')
    .eq('id', userId)
    .single();
  return data;
}
```

```typescript
// app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-50">
      <div className="bg-white p-8 rounded-2xl shadow-premium w-full max-w-md">
        <h1 className="text-3xl font-bold text-navy-900 mb-6">
          Sign in to MedScribe
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-premium w-full px-4 py-3 rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-premium w-full px-4 py-3 rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 rounded-xl font-semibold text-white"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

---

## WEEK 3-5: RECORDING & TRANSCRIPTION

### Day 1: Audio Recording Hook
```typescript
// hooks/useAudioRecorder.ts
import { useState, useRef, useCallback } from 'react';

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout>();

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Start duration timer
      timerRef.current = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  }, []);

  const stopRecording = useCallback((): Promise<Blob> => {
    return new Promise((resolve) => {
      if (!mediaRecorderRef.current) return;

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        resolve(blob);

        // Cleanup
        mediaRecorderRef.current?.stream
          .getTracks()
          .forEach((track) => track.stop());
        setIsRecording(false);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      mediaRecorderRef.current.stop();
    });
  }, []);

  return {
    isRecording,
    duration,
    startRecording,
    stopRecording,
  };
}
```

### Day 2-3: Upload & Transcription API
```typescript
// app/api/sessions/[id]/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await createServerClient().auth.getSession();
  if (!session.data.session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const audioFile = formData.get('audio') as File;

  if (!audioFile) {
    return NextResponse.json({ error: 'No audio file' }, { status: 400 });
  }

  // Upload to S3
  const buffer = Buffer.from(await audioFile.arrayBuffer());
  const key = `sessions/${params.id}/audio.webm`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      Body: buffer,
      ContentType: 'audio/webm',
    })
  );

  const audioUrl = `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

  // Update session with audio URL
  const supabase = createServerClient();
  await supabase
    .from('sessions')
    .update({ audio_url: audioUrl, status: 'uploaded' })
    .eq('id', params.id);

  return NextResponse.json({ success: true, audioUrl });
}
```

```typescript
// app/api/sessions/[id]/transcribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await createServerClient().auth.getSession();
  if (!session.data.session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServerClient();

  // Get session
  const { data: sessionData } = await supabase
    .from('sessions')
    .select('audio_url')
    .eq('id', params.id)
    .single();

  if (!sessionData?.audio_url) {
    return NextResponse.json({ error: 'No audio file' }, { status: 400 });
  }

  // Download audio
  const audioResponse = await fetch(sessionData.audio_url);
  const audioBlob = await audioResponse.blob();

  // Convert to File object for OpenAI
  const audioFile = new File([audioBlob], 'audio.webm', {
    type: 'audio/webm',
  });

  // Transcribe with Whisper
  const transcription = await openai.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
    language: 'el', // Greek
  });

  // Update session
  await supabase
    .from('sessions')
    .update({
      transcription: transcription.text,
      status: 'transcribed',
    })
    .eq('id', params.id);

  // Delete audio file (HIPAA compliance)
  // TODO: Schedule S3 deletion after 60 seconds

  return NextResponse.json({
    transcription: transcription.text,
    status: 'completed',
  });
}
```

---

## WEEK 6-7: CLINICAL NOTE GENERATION

```typescript
// app/api/sessions/[id]/generate-note/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await createServerClient().auth.getSession();
  if (!session.data.session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServerClient();

  // Get session
  const { data: sessionData } = await supabase
    .from('sessions')
    .select('transcription, note_format')
    .eq('id', params.id)
    .single();

  if (!sessionData?.transcription) {
    return NextResponse.json({ error: 'No transcription' }, { status: 400 });
  }

  // Generate clinical note with Claude
  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 2000,
    temperature: 0.3,
    system: `You are a specialized medical documentation AI for Greek mental health professionals.

Task: Generate a ${sessionData.note_format} format clinical note.

Requirements:
1. Use proper Greek medical terminology
2. Follow ${sessionData.note_format} structure exactly
3. Extract only clinically relevant information
4. Professional tone
5. Preserve patient privacy

Output in Greek language.`,
    messages: [
      {
        role: 'user',
        content: `Session Transcription:\n${sessionData.transcription}\n\nGenerate a ${sessionData.note_format} note with proper sections.`,
      },
    ],
  });

  const clinicalNote = message.content[0].text;

  // Update session
  await supabase
    .from('sessions')
    .update({
      clinical_note: clinicalNote,
      status: 'completed',
    })
    .eq('id', params.id);

  return NextResponse.json({
    clinicalNote,
    status: 'completed',
  });
}
```

---

## WEEK 8: STRIPE BILLING

```typescript
// app/api/billing/create-checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  const session = await createServerClient().auth.getSession();
  if (!session.data.session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { priceId } = await request.json();

  const supabase = createServerClient();
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('organization_id, organizations(*)')
    .eq('id', session.data.session.user.id)
    .single();

  // Create Stripe checkout session
  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: session.data.session.user.email,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing?canceled=true`,
    subscription_data: {
      trial_period_days: 90, // 3 months free
      metadata: {
        organization_id: profile?.organization_id,
      },
    },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
```

```typescript
// app/api/billing/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = createServerClient();

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription;

      await supabase.from('subscriptions').upsert({
        organization_id: subscription.metadata.organization_id,
        stripe_subscription_id: subscription.id,
        plan: getPlanFromPrice(subscription.items.data[0].price.id),
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000),
        monthly_session_limit: getSessionLimit(
          subscription.items.data[0].price.id
        ),
      });
      break;
  }

  return NextResponse.json({ received: true });
}

function getPlanFromPrice(priceId: string): string {
  const plans: Record<string, string> = {
    price_starter: 'starter',
    price_professional: 'professional',
    price_clinic: 'clinic',
  };
  return plans[priceId] || 'starter';
}

function getSessionLimit(priceId: string): number {
  const limits: Record<string, number> = {
    price_starter: 50,
    price_professional: 150,
    price_clinic: 999999,
  };
  return limits[priceId] || 50;
}
```

---

## WEEK 9-10: DASHBOARD & POLISH

### Simple Dashboard
```typescript
// app/dashboard/page.tsx
import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerClient();
  const session = await supabase.auth.getSession();

  if (!session.data.session) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('full_name, organizations(*)')
    .eq('id', session.data.session.user.id)
    .single();

  const { data: sessions, count } = await supabase
    .from('sessions')
    .select('*', { count: 'exact' })
    .eq('organization_id', profile?.organization_id)
    .order('created_at', { ascending: false })
    .limit(10);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">
        Welcome back, {profile?.full_name}
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="stat-card p-6 rounded-2xl">
          <div className="text-4xl font-bold text-navy-900">{count}</div>
          <div className="text-sm text-navy-600">Total Sessions</div>
        </div>
        {/* Add more stats */}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Sessions</h2>
        {sessions?.map((session) => (
          <div
            key={session.id}
            className="card-hover p-6 rounded-2xl bg-white border"
          >
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">
                  Session #{session.id.slice(0, 8)}
                </div>
                <div className="text-sm text-navy-600">
                  {new Date(session.session_date).toLocaleDateString()}
                </div>
              </div>
              <div className="badge-premium px-3 py-1 rounded-full text-xs">
                {session.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## DEPLOYMENT CHECKLIST

### Pre-Launch
- [ ] Create Vercel project
- [ ] Add environment variables to Vercel
- [ ] Set up Supabase production database
- [ ] Configure Stripe webhook endpoint
- [ ] Set up custom domain (medscribe.gr)
- [ ] SSL certificate (auto via Vercel)
- [ ] Test full user flow end-to-end

### Launch Day
- [ ] Deploy to production
- [ ] Test authentication
- [ ] Test recording → transcription → note generation
- [ ] Test Stripe checkout
- [ ] Verify webhook processing
- [ ] Set up monitoring (Sentry)
- [ ] Send launch announcement

---

## ESTIMATED COSTS (Monthly)

### MVP Phase
- Vercel Hobby: €0 (free)
- Supabase Free: €0 (up to 500MB database)
- OpenAI API: ~€200 (100 sessions @ €2/session)
- Anthropic API: ~€50 (100 notes)
- AWS S3: ~€5
- **Total: ~€255/month**

### At 100 Customers (€6,000 MRR)
- Vercel Pro: €20
- Supabase Pro: €25
- OpenAI API: ~€2,000 (1000 sessions)
- Anthropic API: ~€500
- AWS S3: ~€50
- **Total: ~€2,600/month**
- **Net Profit: €3,400/month**

---

## SUCCESS METRICS

### Week 4 Goals
- [ ] 5 beta users signed up
- [ ] 10+ successful transcriptions
- [ ] Zero security issues

### Week 8 Goals
- [ ] 20 paying beta customers
- [ ] €1,200 MRR
- [ ] <5% churn rate

### Week 12 Goals
- [ ] 50 paying customers
- [ ] €3,000 MRR
- [ ] 3+ clinic-tier customers

---

**🚀 START HERE: Week 1, Day 1 - Set up Supabase account**
**💡 Questions? Check ARCHITECTURE.md for detailed technical specs**
