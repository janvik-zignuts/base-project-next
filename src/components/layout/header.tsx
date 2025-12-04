'use client';

import { Bell, Menu, UserCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export const Header = ({ title = 'Dashboard', subtitle }: HeaderProps) => (
  <header className="flex items-center justify-between border-b border-border/60 bg-background/70 px-6 py-4 backdrop-blur">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Workspace</p>
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="size-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Bell className="size-5" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full border-border/80">
        <UserCircle2 className="size-6" />
      </Button>
    </div>
  </header>
);

