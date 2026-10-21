import type {
  CoupleDetails,
  InvocationDetails,
  WeddingDateDetails,
  WeddingEvent,
  PrimaryVenue,
  StoryMilestone,
  GuestBlessing,
  RSVPConfig,
  PhotoManifestItem,
} from '../types/wedding';


// Import processed 40-photo manifest
import rawManifest from '../../public/assets/images/photo_manifest.json';

// Curate captions and categories for photos
const categoryMap: Record<number, { category: 'portraits' | 'ceremony' | 'traditions' | 'candids' | 'details'; caption: string }> = {
  1: { category: 'portraits', caption: 'Sethulekshmi & Aromal — Traditional Kasavu Portrait' },
  2: { category: 'portraits', caption: 'Grace & Serenity — The Couple in Regal Temple Attire' },
  3: { category: 'portraits', caption: 'Timeless Elegance — Sethulekshmi in Gold Zari Silk' },
  4: { category: 'portraits', caption: 'Aromal in Traditional Kerala Mundu & Golden Angavastram' },
  5: { category: 'portraits', caption: 'Golden Hour Radiance — Together in Harmony' },
  6: { category: 'portraits', caption: 'Grand Silhouette — The Royal Kerala Couple' },
  7: { category: 'portraits', caption: 'Heartfelt Smiles & Gentle Gazes' },
  8: { category: 'traditions', caption: 'Sacred Ritual Beginnings & Family Blessings' },
  9: { category: 'traditions', caption: 'Revered Traditional Ceremonial Accents' },
  10: { category: 'traditions', caption: 'The Auspicious Garland Exchange Ritual' },
  11: { category: 'traditions', caption: 'Sacred Vows Under the Temple Canopy' },
  12: { category: 'ceremony', caption: 'Auspicious Muhurtham — The Golden Thalikettu Moment' },
  13: { category: 'ceremony', caption: 'Shower of Auspicious Flower Petals & Akshata' },
  14: { category: 'ceremony', caption: 'Saptapadi Steps — Walking Together into Forever' },
  15: { category: 'ceremony', caption: 'Sacred Temple Lamp (Nilavilakku) Illumination' },
  16: { category: 'details', caption: 'The Sacred Thali & Intricate Kerala Temple Jewellery' },
  17: { category: 'details', caption: 'Heirloom Gold Ornaments & Jasmine Florals' },
  18: { category: 'portraits', caption: 'Sethulekshmi & Aromal — Warm Embrace of Love' },
  19: { category: 'portraits', caption: 'Joyous Laughter & Unfiltered Happiness' },
  20: { category: 'portraits', caption: 'The Newlyweds in Regal Poise' },
  21: { category: 'traditions', caption: 'Auspicious Kanya Daanam & Sacred Blessings' },
  22: { category: 'ceremony', caption: 'Solemn Prayers for Prosperity, Peace & Dharma' },
  23: { category: 'traditions', caption: 'Elders Bestowing Sacred Mantras & Akshata' },
  24: { category: 'traditions', caption: 'Grand Sadhya Traditions & Feasting Delights' },
  25: { category: 'ceremony', caption: 'Hands Entwined in Sacred Eternal Vows' },
  26: { category: 'candids', caption: 'Spontaneous Warmth with Beloved Family' },
  27: { category: 'candids', caption: 'Shared Whispers & Tender Moments' },
  28: { category: 'candids', caption: 'Radiant Smiles Under the Mandap Lights' },
  29: { category: 'candids', caption: 'Cherished Family Celebrations & Hugs' },
  30: { category: 'candids', caption: 'Lively Festivities & Cultural Rhythms' },
  31: { category: 'candids', caption: 'Gleeful Welcome of the Newlywed Couple' },
  32: { category: 'candids', caption: 'Candid Glimpses of Pure Joy & Festivity' },
  33: { category: 'candids', caption: 'Celebratory Toasts & Joyful Greetings' },
  34: { category: 'portraits', caption: 'Twilight Evening Portrait' },
  35: { category: 'portraits', caption: 'Gentle Starlight Radiance & Warmth' },
  36: { category: 'portraits', caption: 'Graceful Poise of the Couple' },
  37: { category: 'portraits', caption: 'Together Forever — A Dream Realized' },
  38: { category: 'details', caption: 'Grand Banquet Elegance & Table Accents' },
  39: { category: 'portraits', caption: 'The Journey Ahead — Hand in Hand' },
  40: { category: 'portraits', caption: 'Unforgettable Finale — Sethulekshmi & Aromal' },
};

export const photoGallery: PhotoManifestItem[] = (rawManifest as PhotoManifestItem[]).map((item) => {
  const meta = categoryMap[item.id] || { category: 'portraits', caption: `Sethulekshmi & Aromal - Moment ${item.id}` };
  return {
    ...item,
    category: meta.category,
    caption: meta.caption,
  };
});

export const coupleData: CoupleDetails = {
  bride: {
    firstName: 'Sethulekshmi',
    fullName: 'Sethulekshmi S',
    parents: 'Mrs. Bindhu M G & Mr. Suresh Madhavan Nair',
    residence: 'Suresh Bhavan, Achencovil, Kollam, Kerala',
    grandParents: 'Late Smt. Ponnamma & Late Shri Madhavan Nair, Smt. Radhamani & Shri Gangadhara Kurup',
    photo: '/assets/images/gallery/photo_01_jis09141.jpg',
  },
  groom: {
    firstName: 'Aromal',
    fullName: 'Aromal Kurup',
    parents: 'Mrs. Jayasree & Mr. Santhosh Kurup',
    residence: 'Thempamkoottathil (H), Iravon, Konni, Pathanamthitta, Kerala',
    grandParents: 'Elders of the Kurup Family',
    photo: '/assets/images/gallery/photo_06_jis09198.jpg',
  },
  monogram: 'S & A',
  tagline: 'Kindly grace the occasion with your esteemed presence and prayers',
};

export const invocationData: InvocationDetails = {
  sanskrit: 'ॐ श्री गणेशाय नमः • WITH THE BLESSINGS OF GOD & ELDERS',
  shloka: 'Two souls united in sacred devotion, walking hand in hand into a lifetime of grace, harmony, and eternal togetherness.',
  meaning: 'May divine grace and eternal blessings shower upon this sacred marriage union.',
  invitationNote: 'Mr. Suresh Madhavan Nair & Mrs. Bindhu M G (Suresh Bhavan, Achencovil, Kollam) cordially invite your esteemed presence with family on the auspicious occasion of the marriage of our daughter Sethulekshmi S with Aromal Kurup (Son of Mrs. Jayasree & Mr. Santhosh Kurup, Konni).',
};

export const weddingDateData: WeddingDateDetails = {
  dateString: '2026-10-25T12:08:00',
  displayDate: 'Sunday, October 25, 2026',
  day: 'Sunday',
  dateNumber: '25',
  monthName: 'October',
  year: '2026',
  auspiciousMuhurtham: '12:08 PM – 12:30 PM',
  traditionalDate: '08, Thulam, 1201 (Malayalam Calendar)',
  nakshatram: 'Auspicious Thulam Muhurtham',
  guestArrival: '11:00 AM onwards',
};

export const eventsData: WeddingEvent[] = [
  {
    id: 'pre-wedding-gathering',
    title: 'Pre-Wedding Family Blessings',
    subtitle: 'An intimate evening of Vedic prayers, traditional music, and warm ancestral blessings',
    date: 'Saturday, October 24, 2026',
    time: '6:00 PM onwards',
    venueName: 'Suresh Bhavan',
    location: 'Achencovil, Kollam, Kerala',
    dressCode: 'Traditional Kerala Silks, Pastels & Kurtas',
    colors: ['#ECC875', '#F7E7B8', '#FAF6EE'],
    icon: 'sun',
    mapQuery: 'Achencovil Kollam Kerala',
    highlights: ['Vedic Prayer Offering', 'Heirloom Gold Blessing', 'Family Gathering & Dinner'],
  },
  {
    id: 'sacred-wedding',
    title: 'The Sacred Wedding & Muhurtham',
    subtitle: 'The divine Thalikettu vows, garland exchange, and solemn circumambulation of the sacred fire',
    date: 'Sunday, October 25, 2026',
    time: '11:00 AM – 1:30 PM (Auspicious Muhurtham: 12:08 PM – 12:30 PM)',
    venueName: 'Santhi Auditorium',
    location: 'Eliyarackal, Konni, Pathanamthitta, Kerala 689691',
    dressCode: 'Traditional Kasavu Saree, Kerala Mundu & Royal Gold Attire',
    colors: ['#A33A29', '#C5A059', '#2E653A', '#FAF8F5'],
    icon: 'heart',
    mapQuery: 'Santhi Auditorium Eliyarackal Konni',
    highlights: ['11:00 AM: Guest Arrival & Nadaswaram', '12:08 PM: Sacred Thalikettu Muhurtham', 'Garland Exchange & Blessings'],
  },
  {
    id: 'traditional-sadhya',
    title: 'Grand Traditional Kerala Sadhya',
    subtitle: 'A regal banquet feast served with authentic Kerala hospitality on fresh plantain leaves',
    date: 'Sunday, October 25, 2026',
    time: '12:30 PM – 3:30 PM',
    venueName: 'Santhi Auditorium Banquet Hall',
    location: 'Eliyarackal, Konni, Pathanamthitta, Kerala',
    dressCode: 'Festive Traditional Attire',
    colors: ['#2E653A', '#F59E0B', '#FDFBF7'],
    icon: 'sparkles',
    mapQuery: 'Santhi Auditorium Eliyarackal Konni',
    highlights: ['Authentic 24-dish Kerala Sadhya', 'Traditional Payasam Varieties', 'Live Classical Instrumental Music'],
  },
];

export const venueData: PrimaryVenue = {
  name: 'Santhi Auditorium',
  subHeading: 'Ceremony & Grand Sadhya Venue',
  address: 'Eliyarackal, Konni, Pathanamthitta, Kerala 689691',
  mapsUrl: 'https://maps.google.com/?q=Santhi+Auditorium+Eliyarackal+Konni',
  directionsNote: 'Centrally located on the main highway at Eliyarackal, Konni. Features extensive covered parking, grand banquet halls, and full air-conditioned guest facilities.',
  distanceInfo: [
    { label: 'Chengannur Railway Station (CNGR)', value: '32 km (~45 mins via Adoor - Konni Road)' },
    { label: 'Trivandrum International Airport (TRV)', value: '105 km (~2.5 hours via MC Road)' },
    { label: 'Cochin International Airport (COK)', value: '135 km (~3 hours via MC Road / NH 183)' },
  ],
  image: '/assets/images/mandap_venue.jpg',
  cardImage: '/assets/images/invitation_card.jpg',
};

export const storyData: StoryMilestone[] = [
  {
    year: '2022',
    title: 'When Families & Hearts Aligned',
    description: 'Rooted in timeless culture and mutual admiration, Sethulekshmi and Aromal found an unspoken bond of respect, understanding, and shared joy that felt like destiny from the very first conversation.',
    image: '/assets/images/gallery/photo_08_jis09282.jpg',
  },
  {
    year: '2024',
    title: 'The Auspicious Promise',
    description: 'With heartfelt prayers and blessings from both families, the auspicious alliance was formalized in Kerala traditions, paving the way for a lifetime of devotion and companionship.',
    image: '/assets/images/gallery/photo_17_jis09400.jpg',
  },
  {
    year: '2026',
    title: 'Our Sacred Wedding Day',
    description: 'Surrounded by our cherished parents, elders, relatives, and lifelong friends at Konni, we step forward together into a lifetime of harmony, guided by divine grace.',
    image: '/assets/images/gallery/photo_01_jis09141.jpg',
  },
];

export const initialBlessings: GuestBlessing[] = [
  {
    id: 'blessing-1',
    name: 'Radhika & Unnikrishnan',
    relation: 'Family Friends',
    message: 'Heartiest congratulations dear Sethulekshmi and Aromal! May your married life be blessed with boundless happiness, peace, good health, and eternal togetherness!',
    timestamp: 'Just now',
    reaction: '🙏✨',
  },
  {
    id: 'blessing-2',
    name: 'Gopan & Lekha',
    relation: 'Relatives (Kollam)',
    message: 'Wishing our dear Sethulekshmi and Aromal all the very best on your sacred Thalikettu. Looking forward to celebrating this glorious day at Santhi Auditorium!',
    timestamp: '2 hours ago',
    reaction: '💐❤️',
  },
  {
    id: 'blessing-3',
    name: 'Sujith & Meera',
    relation: 'Cousins',
    message: 'Sending all our love and prayers for an enchanting new chapter. Can’t wait to cheer for both of you and relish the grand Kerala Sadhya!',
    timestamp: '5 hours ago',
    reaction: '🎉🪔',
  },
  {
    id: 'blessing-4',
    name: 'Anoop & Anjana Kurup',
    relation: 'Relatives (Konni)',
    message: 'Hearty welcome to Sethulekshmi into the Kurup family! May your home always be filled with laughter, abundance, and auspicious beginnings.',
    timestamp: '1 day ago',
    reaction: '🌺✨',
  },
];

export const rsvpConfig: RSVPConfig = {
  whatsappNumber: '919447123456',
  deadline: 'October 15, 2026',
  hostContacts: [
    { name: 'Mr. Suresh Madhavan Nair', role: 'Bride’s Father (Achencovil)', phone: '+91 94470 73184' },
    { name: 'Mr. Santhosh Kurup', role: 'Groom’s Father (Konni)', phone: '+91 9447141979' },
  ],
};
