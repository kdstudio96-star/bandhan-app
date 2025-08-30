import type { UserProfile, BadgeType } from './types';
import { BadgeType as BadgeTypeEnum } from './types';


export const DISTRICTS = ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Mirpur Khas', 'Nawabshah', 'Tharparkar', 'Umerkot'];
export const CITIES: { [key: string]: string[] } = {
  'Karachi': ['Clifton', 'Gulshan-e-Iqbal', 'Saddar', 'Malir', 'Korangi'],
  'Hyderabad': ['Latifabad', 'Qasimabad', 'Hirabad', 'Saddar'],
  'Sukkur': ['Rohri', 'Pano Aqil', 'Salehpat'],
  'Larkana': ['Ratodero', 'Dokri', 'Bakrani'],
  'Mirpur Khas': ['Digri', 'Kot Ghulam Muhammad', 'Jhuddo'],
  'Nawabshah': ['Sakrand', 'Daur', 'Qazi Ahmed'],
  'Tharparkar': ['Mithi', 'Diplo', 'Islamkot', 'Chachro', 'Nagarparkar'],
  'Umerkot': ['Umerkot', 'Kunri', 'Pithoro', 'Samaro'],
};

export const LANGUAGES = ['Sindhi', 'Urdu', 'English', 'Dhatki', 'Marwari'];
export const CASTES = ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra', 'Other'];
export const NAKSHATRAS = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];
export const GOTRAS = ['Agastya', 'Angiras', 'Atri', 'Bhrigu', 'Kashyapa', 'Vasistha', 'Vishvamitra', 'Other'];


export const BADGE_COLORS: { [key in BadgeType]: { bg: string; text: string; border: string; icon: any; } } = {
  [BadgeTypeEnum.BLUE]: { bg: 'bg-blue-100', text: 'text-trust-blue', border: 'border-trust-blue', icon: 'ShieldCheck' },
  [BadgeTypeEnum.GREEN]: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-800', icon: 'UserCheck' },
  [BadgeTypeEnum.GOLD]: { bg: 'bg-yellow-100', text: 'text-tradition-gold', border: 'border-tradition-gold', icon: 'Award' },
};

export const MOCK_PROFILES: UserProfile[] = [
  {
    id: 1,
    name: 'Priya Patel',
    age: 26,
    city: 'Clifton',
    district: 'Karachi',
    profilePictureUrl: 'https://picsum.photos/seed/priya/400/400',
    photos: ['https://picsum.photos/seed/priya1/400/600', 'https://picsum.photos/seed/priya2/400/600', 'https://picsum.photos/seed/priya3/400/600'],
    bio: 'Software engineer with a love for traditional music and spicy food. Looking for a partner who is kind, ambitious, and values family.',
    caste: 'Vaishya',
    nakshatra: 'Rohini',
    gotra: 'Kashyapa',
    completion: 95,
    badges: [BadgeTypeEnum.BLUE, BadgeTypeEnum.GREEN],
    isInterestSent: false,
    isInterestMutual: false,
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    age: 29,
    city: 'Mithi',
    district: 'Tharparkar',
    profilePictureUrl: 'https://picsum.photos/seed/rohan/400/400',
    photos: ['https://picsum.photos/seed/rohan1/400/600', 'https://picsum.photos/seed/rohan2/400/600'],
    bio: 'Doctor passionate about community service and cricket. Seeking someone who is intelligent, compassionate, and enjoys a good laugh.',
    caste: 'Brahmin',
    nakshatra: 'Ashwini',
    gotra: 'Vasistha',
    completion: 100,
    badges: [BadgeTypeEnum.BLUE, BadgeTypeEnum.GREEN, BadgeTypeEnum.GOLD],
    isInterestSent: true,
    isInterestMutual: false,
  },
  {
    id: 3,
    name: 'Anjali Verma',
    age: 24,
    city: 'Umerkot',
    district: 'Umerkot',
    profilePictureUrl: 'https://picsum.photos/seed/anjali/400/400',
    photos: [],
    bio: 'Teacher and artist. I find joy in the simple things in life. Hoping to meet a genuine soul to share my journey with.',
    caste: 'Kshatriya',
    nakshatra: 'Hasta',
    gotra: 'Atri',
    completion: 75,
    badges: [BadgeTypeEnum.BLUE],
    isInterestSent: false,
    isInterestMutual: true,
  },
  {
    id: 4,
    name: 'Vikram Singh',
    age: 31,
    city: 'Qasimabad',
    district: 'Hyderabad',
    profilePictureUrl: 'https://picsum.photos/seed/vikram/400/400',
    photos: ['https://picsum.photos/seed/vikram1/400/600', 'https://picsum.photos/seed/vikram2/400/600', 'https://picsum.photos/seed/vikram3/400/600', 'https://picsum.photos/seed/vikram4/400/600'],
    bio: 'Entrepreneur in the textile industry. Family oriented and traditional, but with a modern outlook. Let\'s connect if you share similar values.',
    caste: 'Kshatriya',
    nakshatra: 'Chitra',
    gotra: 'Bhrigu',
    completion: 88,
    badges: [BadgeTypeEnum.GREEN],
    isInterestSent: false,
    isInterestMutual: false,
  },
];