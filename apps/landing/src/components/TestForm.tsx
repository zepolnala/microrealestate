// apps/landing/src/components/TestForm.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TestForm() {
  return (
    <div className="bg-red-100 p-8 m-4 rounded-lg border-2 border-red-500">
      <h2 className="text-2xl font-bold text-red-800 mb-4">
        🚀 TEST COMPONENT - Si ves esto, funciona!
      </h2>
      <div className="space-y-4">
        <Input placeholder="Test input" />
        <Button>Test Button</Button>
      </div>
    </div>
  );
}