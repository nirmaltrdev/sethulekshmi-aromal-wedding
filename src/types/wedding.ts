export interface PersonDetails {
  firstName: string;
  fullName: string;
  parents: string;
  residence: string;
  grandParents: string;
  photo: string;
}

export interface CoupleDetails {
  bride: PersonDetails;
  groom: PersonDetails;
  monogram: string;
  tagline: string;
}

export interface InvocationDetails {
  sanskrit: string;
  shloka: string;
  meaning: string;
  invitationNote: string;
}

export interface WeddingDateDetails {
  dateString: string;
  displayDate: string;
  day: string;
  dateNumber: string;
  monthName: string;
  year: string;
  auspiciousMuhurtham: string;
  traditionalDate: string;
  nakshatram: string;
  guestArrival: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venueName: string;
  location: string;
  dressCode: string;
  colors: string[];
  icon: string;
  mapQuery: string;
  highlights?: string[];
  details?: string;
}

export interface DistanceInfo {
  label: string;
  value: string;
}

export interface PrimaryVenue {
  name: string;
  subHeading: string;
  address: string;
  mapsUrl: string;
  directionsNote: string;
  distanceInfo: DistanceInfo[];
  image: string;
  cardImage: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface PhotoManifestItem {
  id: number;
  original: string;
  webFile: string;
  thumbFile: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'landscape' | 'portrait';
  color: string;
  origSizeMB: number;
  webSizeKB: number;
  thumbSizeKB: number;
  category?: 'portraits' | 'ceremony' | 'traditions' | 'candids' | 'details';
  caption?: string;
}

export interface GuestBlessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  reaction: string;
}

export interface HostContact {
  name: string;
  role: string;
  phone: string;
}

export interface RSVPConfig {
  whatsappNumber: string;
  deadline: string;
  hostContacts: HostContact[];
}

export interface RSVPSubmission {
  id: string;
  guestName: string;
  attendance: 'attending' | 'declining';
  guestCount: number;
  attendingEvents: string[];
  phone: string;
  email?: string;
  dietaryOrNotes?: string;
  submittedAt: string;
}

export type GalleryPhoto = PhotoManifestItem;
export type Blessing = GuestBlessing;
