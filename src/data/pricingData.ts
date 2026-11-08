interface BookingOption {
  id: string;
  name: string;
  price: number;
}

interface WeddingPackage extends BookingOption {
  label: string;
  features: string[];
  featured?: boolean;
}

const twoDayCoverage = [
  'Haldi, Mehendi and wedding coverage over two days',
  'Photography and video',
  'Cinematic wedding film',
  'Pre- or post-wedding shoot',
  'Same town or city',
];

export const royalWedding: WeddingPackage = {
  id: 'royal',
  name: 'The Royal Wedding',
  price: 160000,
  label: 'Bride and groom · 2 days',
  features: twoDayCoverage,
  featured: true,
};

export const packages: WeddingPackage[] = [
  royalWedding,
  {
    id: 'groom',
    name: 'The Groom’s Story',
    price: 110000,
    label: 'Groom side · 2 days',
    features: twoDayCoverage,
  },
  {
    id: 'bride',
    name: 'The Bride’s Story',
    price: 95000,
    label: 'Bride side · 2 days',
    features: twoDayCoverage,
  },
  {
    id: 'one-day',
    name: 'One Perfect Day',
    price: 65000,
    label: 'Bride or groom · 1 day',
    features: ['Photography and video', 'Bride or groom side', 'Same town or city'],
  },
];

interface ServiceRate extends BookingOption {
  coverage: string;
}

interface ServiceRateGroup {
  titles: string[];
  note?: string;
  rates: ServiceRate[];
}

export const additionalRates: ServiceRateGroup[] = [
  {
    titles: ['Cinematic video'],
    note: 'Up to 12 minutes',
    rates: [
      { id: 'cinema', name: 'Cinematic video · up to 12 min', coverage: 'Standard', price: 35000 },
      { id: 'cinema-single', name: 'Cinematic video · single shooter', coverage: 'Single shooter', price: 25000 },
    ],
  },
  {
    titles: ['Pre- or post-wedding photoshoot'],
    rates: [
      { id: 'pre', name: 'Pre- or post-wedding photoshoot', coverage: 'Standard', price: 25000 },
      { id: 'pre-single', name: 'Pre- or post-wedding photoshoot · single shooter', coverage: 'Single shooter', price: 15000 },
    ],
  },
  {
    titles: ['Pasni', 'Birthday'],
    rates: [
      { id: 'celebrations', name: 'Pasni or birthday · photo and video', coverage: 'Photography and video', price: 15000 },
      { id: 'celebrations-photo', name: 'Pasni or birthday · photo only', coverage: 'Photography only', price: 10000 },
    ],
  },
];

export const bookingOptions: BookingOption[] = [
  ...packages,
  ...additionalRates.flatMap(group => group.rates),
];

export const money = (amount: number) => new Intl.NumberFormat('en-IN').format(amount);
