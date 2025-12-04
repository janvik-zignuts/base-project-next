import { DashboardShell } from '@/src/components/layout/dashboardShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

const clients = [
  { name: 'Northwind Foods', status: 'On track', owner: 'Alex Morgan' },
  { name: 'Contoso Robotics', status: 'Needs approval', owner: 'Jamie Patel' },
  { name: 'Fabrikam Health', status: 'Paused', owner: 'Jordan Lee' },
];

export default function ClientsPage() {
  return (
    <DashboardShell title="Clients" subtitle="Account health and collaboration status.">
      <div className="space-y-3">
        {clients.map((client) => (
          <Card key={client.name} className="border-border/70 bg-card/80">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-semibold">{client.name}</CardTitle>
              <span className="text-sm text-muted-foreground">{client.status}</span>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Owner · {client.owner}
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}

