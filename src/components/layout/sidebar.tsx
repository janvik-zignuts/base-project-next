'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/utils/utils';
import { useAuthContext } from '@/src/features/auth/context/authContext';
import { navItems } from '@/src/constants';
import { CommonAlert } from '../ui/commonAlert';


export const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuthContext();

    const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("Deleted!");
    setOpen(false);
    logout()
  };

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-border/60 bg-background/70 backdrop-blur md:flex md:flex-col">
      <div className="border-b border-border/60 p-4">
        <div className="text-xl font-semibold tracking-wide">Base Setup</div>
        <p className="text-sm text-muted-foreground">Workspace Control</p>
      </div>
      <nav className="flex-1 px-6 py-6 space-y-1">
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
          className="flex w-full justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={()=>setOpen(true)}
        >
          <LogOut className="size-4" />
          Logout
        </Button>
          <CommonAlert
        open={open}
        onOpenChange={setOpen}
        title="Are you sure want to logout ?"
        description="This action cannot be undone."
        confirmText="Logout"
        cancelText="Cancel"
        onConfirm={handleDelete}
      />
      </div>
    </aside>
  );
};

