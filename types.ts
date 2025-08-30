export enum UserRole {
  INDIVIDUAL = 'Individual',
  PARENT = 'Parent',
  MAHARAJ = 'Maharaj',
}

export enum BadgeType {
  BLUE = 'Platform Verified',
  GREEN = 'Maharaj Verified',
  GOLD = 'Elite Member',
}

export interface UserProfile {
  id: number;
  name: string;
  age: number;
  city: string;
  district: string;
  profilePictureUrl: string;
  photos: string[];
  bio: string;
  caste: string;
  nakshatra: string;
  gotra: string;
  completion: number;
  badges: BadgeType[];
  isInterestSent: boolean;
  isInterestMutual: boolean;
}
