'use client';

import { SessionProvider } from 'next-auth/react';

interface Authcontextprops {
  children: React.ReactNode;
}

export default function AuthContext({ children }: Authcontextprops) {
  return <SessionProvider>{children}</SessionProvider>;
}
