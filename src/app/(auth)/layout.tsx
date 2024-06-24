import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className="grid min-h-screen place-items-center p-4">{children}</div>
);

export default AuthLayout;
