"use client";

import { DashboardShell } from '@/src/components/layout/dashboardShell';
import { DataTable } from '@/src/components/table/dataTable';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';

import { useModal } from '@/src/components/modal/context/modalContext';
import { campaignColumns } from '../../features/campaign/components/columns';
import { Campaigns } from '@/src/constants';
import { NewCampaignModal } from '@/src/features/campaign/components/NewCampaignModal';

export default function CampaignsPage() {
  const { openModal } = useModal();

  return (
    <DashboardShell
      title="Campaigns"
      subtitle="Monitor delivery, spend, and engagement for every campaign."
    >
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold tracking-tight">Your campaigns</h2>
        <Button
          className="gap-2 rounded-full bg-[#B4E3B5] px-5 text-sm font-semibold text-[#1C3B1D] hover:bg-[#a3d6a4]"
          onClick={() => openModal('newCampaign')}
        >
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-end space-y-0 border-b border-[#F0DDFB]  py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-9 gap-2 rounded-full border-[#E3C6FA] bg-white px-4 text-xs font-medium text-[#3B2B4A] hover:bg-[#F7ECFF]"
            >
              Campaign filter
            </Button>
            <Button
              variant="outline"
              className="h-9 gap-2 rounded-full border-[#FFBFD3] bg-[#FFEFF5] px-4 text-xs font-medium text-[#6D102D] hover:bg-[#FFE1EB]"
            >
              Archive
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
            <DataTable columns={campaignColumns} data={Campaigns} />
        </CardContent>
      </Card>

      <NewCampaignModal />
    </DashboardShell>
  );
}

