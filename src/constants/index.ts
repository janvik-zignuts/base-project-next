import { LayoutDashboard, Megaphone, Users } from "lucide-react";

export const navItems = [
  { label: 'Overview', href: '/overview', icon: LayoutDashboard },
  { label: 'Campaigns', href: '/campaigns', icon: Megaphone },
  { label: 'Clients', href: '/clients', icon: Users },
];

export const Campaigns = [
  {
    id: '1',
    name: 'The Glowup Blend',
    client: 'Pruthvi Zignuts',
    progress: 68,
    postsLive: 19,
    comments: 491,
    likes: 3947,
    impressions: 9894,
    views: 4011,
    reach: 6959,
  },
  {
    id: '2',
    name: 'Winter Launch 2025',
    client: 'Lumos Beauty Co.',
    progress: 42,
    postsLive: 9,
    comments: 182,
    likes: 2180,
    impressions: 6123,
    views: 2980,
    reach: 4310,
  },
  {
    id: '3',
    name: 'Creator Collab Sprint',
    client: 'Northway Studios',
    progress: 83,
    postsLive: 24,
    comments: 732,
    likes: 5219,
    impressions: 14231,
    views: 9230,
    reach: 11102,
  },
];