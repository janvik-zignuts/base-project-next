'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Megaphone, Users, LogOut } from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/utils/utils';
import { useAuthContext } from '@/src/features/auth/context/authContext';

const navItems = [
  { label: 'Overview', href: '/overview', icon: LayoutDashboard },
  { label: 'Campaigns', href: '/campaigns', icon: Megaphone },
  { label: 'Clients', href: '/clients', icon: Users },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuthContext();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-border/60 bg-background/70 backdrop-blur md:flex md:flex-col">
      <div className="border-b border-border/60 p-6">
        <div className="text-xl font-semibold tracking-wide">Base Setup</div>
        <p className="text-sm text-muted-foreground">Workspace Control</p>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || pathname?.startsWith(`${href}/`);
          return (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted',
              isActive ? 'bg-muted text-foreground' : 'text-muted-foreground',
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
        })}
      </nav>
      <div className="border-t border-border/60 p-4">
        <Button
          variant="ghost"
          className="flex w-full items-center gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={logout}
        >
          <LogOut className="size-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

