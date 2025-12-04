import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { DashboardShell } from '@/src/components/layout/dashboardShell';

const stats = [
  { label: 'Active Campaigns', value: 12, change: '+3 this week' },
  { label: 'Avg. CTR', value: '4.2%', change: '+0.4% vs last week' },
  { label: 'Spend (30d)', value: '$82.4k', change: '-5% vs forecast' },
];

export default function CampaignsPage() {
  return (
    <DashboardShell
      title="Campaigns"
      subtitle="Monitor delivery, spend, and engagement for every channel."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/70 bg-card/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}

