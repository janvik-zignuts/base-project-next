'use client';

import { ReactNode } from 'react';

import { Sidebar } from '@/src/components/layout/sidebar';
import { Header } from '@/src/components/layout/header';

type DashboardShellProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export const DashboardShell = ({ title, subtitle, children }: DashboardShellProps) => (
  <div className="flex min-h-screen bg-muted/40">
    <Sidebar />
    <div className="flex flex-1 flex-col">
      <Header title={title} subtitle={subtitle} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

