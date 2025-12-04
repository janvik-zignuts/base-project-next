import { DashboardShell } from '@/src/components/layout/dashboardShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';

export default function OverviewPage() {
  return (
    <DashboardShell title="Overview" subtitle="High-level snapshot across teams and channels.">
      <Card className="border-border/70 bg-card/80">
        <CardHeader>
          <CardTitle>Getting started</CardTitle>
          <CardDescription>Connect channels and invite teammates to unlock insights.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Sync performance data from Meta, Google, and LinkedIn.</p>
          <p>• Assign owners to in-flight campaigns.</p>
          <p>• Review pacing alerts and share recaps.</p>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}

