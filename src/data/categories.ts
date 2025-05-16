export interface TourCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const categories: TourCategory[] = [
  {
    id: 'adventure',
    title: 'Adventure',
    icon: 'Mountain',
    description: 'Thrilling experiences and outdoor activities'
  },
  {
    id: 'cultural',
    title: 'Cultural',
    icon: 'Landmark',
    description: 'Explore local traditions and heritage'
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon',
    icon: 'Heart',
    description: 'Romantic getaways for couples'
  },
  {
    id: 'beach',
    title: 'Beach',
    icon: 'Umbrella',
    description: 'Relax on beautiful beaches'
  },
  {
    id: 'mountain',
    title: 'Mountain',
    icon: 'Mountain',
    description: 'Scenic mountain experiences'
  },
  {
    id: 'budget',
    title: 'Budget',
    icon: 'Wallet',
    description: 'Affordable travel packages'
  }
];