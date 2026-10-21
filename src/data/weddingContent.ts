import type { WeddingEvent, GalleryPhoto, Blessing } from '../types/wedding';
import curatedPhotos from './curatedPhotos.json';

export const weddingContent = {
  couple: {
    bride: {
      firstName: "Sethulekshmi",
      fullName: "Sethulekshmi S",
      parents: "Mrs. Bindhu M G & Mr. Suresh Madhavan Nair",
      residence: "Suresh Bhavan, Achencovil, Kollam, Kerala",
      grandParents: "Late Smt. Ponnamma & Late Shri Madhavan Nair; Smt. Radhamani & Shri Gangadhara Kurup",
      photo: "/assets/images/gallery/photo_18_jis09407.jpg",
    },
    groom: {
      firstName: "Aromal",
      fullName: "Aromal Kurup",
      parents: "Mrs. Jayasree & Mr. Santhosh Kurup",
      residence: "Thempamkoottathil (H), Iravon, Konni, Pathanamthitta, Kerala",
      grandParents: "Elders of the Kurup Family",
      photo: "/assets/images/gallery/photo_08_jis09282.jpg",
    },
    monogram: "S & A",
    malayalamTitle: "ଲுତுଯକ்ଷ்ମି & ଅଲோମଶଲ",
    tagline: "Kindly grace the occasion with your esteemed presence and sacred prayers",
  },

  invocation: {
    header: "WITH THE BLESSINGS OF GOD",
    sanskritShloka: "ମଂଗ़ଂଠ भदभुनं ୵ୟୟ્ે୆: | ମଂଗ़ାଯ भनो ୹ୟ୆: ||",
    transliteration: "Mangalam Bhagavan Vishnuh Mangalam Garudadhwajah | Mangalam Pundareekaksho Mangalaya Tano Harih ||",
    meaning: "May divine grace, joy, and eternal protection shower upon this sacred matrimonial union.",
    invitationLetter:
      "Mr. Suresh Madhavan Nair & Mrs. Bindhu M G, Suresh Bhavan, Achencovil, Kollam cordially invite your esteemed presence with family on the auspicious occasion of the marriage of their daughter Sethulekshmi S with Aromal Kurup (Son of Mrs. Jayasree & Mr. Santhosh Kurup, Thempamkoottathil (H), Iravon, Konni).",
    cardArtwork: "/assets/images/invitation_card.jpg",
  },

  weddingDate: {
    targetDateISO: "2026-10-25T12:08:00+05:30",
    displayDate: "Sunday, October 25, 2026",
    day: "Sunday",
    dateNumber: "25",
    monthName: "October",
    year: "2026",
    muhurtham: "Between 12:08 PM and 12:30 PM IST",
    traditionalCalendar: "08, Thulam, 1201 (Malayalam Era)",
    auspiciousNote: "Auspicious Thulam Muhurtham",
    guestArrival: "11:00 AM onwards",
  },

  events: [
    {
      id: "pre-wedding",
      title: "Pre-Wedding Family Blessings",
      subtitle: "Traditional prayers, intimate family blessings & customary melodies",
      date: "Saturday, October 24, 2026",
      time: "6:00 PM onwards",
      venueName: "Suresh Bhavan",
      location: "Achencovil, Kollam, Kerala",
      dressCode: "Traditional Kerala Silks, Pastels & Kurthas",
      colors: ["#D4AF37", "#F7E7B8", "#FAF8F5"],
      icon: "Sparkles",
      mapQuery: "Achencovil Kollam Kerala",
      details: "An intimate evening with family elders, welcoming auspicious blessings in the ancestral bride's home.",
    },
    {
      id: "muhurtham-ceremony",
      title: "The Sacred Wedding & Muhurtham",
      subtitle: "Auspicious Thalikettu vows, garland exchange & sacred rituals",
      date: "Sunday, October 25, 2026",
      time: "11:00 AM – 1:30 PM (Muhurtham: 12:08 PM – 12:30 PM)",
      venueName: "Santhi Auditorium",
      location: "Eliyarackal, Konni, Pathanamthitta, Kerala 689691",
      dressCode: "Traditional Kerala Kasavu Saree, Kerala Mundu & Golden Attire",
      colors: ["#9E2A2B", "#D4AF37", "#1A382B", "#FAF8F5"],
      icon: "Heart",
      mapQuery: "Santhi Auditorium Eliyarackal Konni",
      details: "The sacred Thalikettu ceremony solemnizing eternal vows midst holy oil lamps, jasmine flowers, and family prayers.",
    },
    {
      id: "grand-sadhya",
      title: "Grand Traditional Kerala Sadhya",
      subtitle: "Sumptuous traditional banquet served upon plantain banana leaves",
      date: "Sunday, October 25, 2026",
      time: "12:30 PM – 3:30 PM",
      venueName: "Santhi Auditorium Banquet Hall",
      location: "Eliyarackal, Konni, Kerala",
      dressCode: "Festive Kerala Traditional Wear",
      colors: ["#1A382B", "#D4AF37", "#FDBFF7"],
      icon: "Utensils",
      mapQuery: "Santhi Auditorium Eliyarackal Konni",
      details: "A culinary celebration of over 24 traditional Kerala delicacies, payasam, and savories prepared in authentic festive tradition.",
    },
  ] as WeddingEvent[],

  venues: {
    primary: {
      name: "Santhi Auditorium",
      subHeading: "Ceremony & Grand Feast Venue",
      address: "Eliyarackal, Konni, Pathanamthitta, Kerala 689691",
      mapsUrl: "https://maps.google.com/?q=Santhi+Auditorium+Eliyarackal+Konni",
      transitNotes: [
        { label: "Chengannur Railway Station (CNGR)", value: "32 km (~-45 mins drive)" },
        { label: "Trivandrum International Airport (TRV)", value: "105 km (~-2.5 hrs drive)" },
        { label: "Cochin International Airport (COK)", value: "135 km (~-3 hrs drive)" },
      ],
      parking: "Dedicated valet and guest parking available within the auditorium premises.",
    },
    familyResidences: [
      {
        title: "Bride's Residence",
        name: "Suresh Bhavan",
        address: "Achencovil, Kollam District, Kerala",
        mapsUrl: "https://maps.google.com/?q=9.244347,76.833207",
      },
      {
        title: "Groom's Residence",
        name: "Thempamkoottathil (H)",
        address: "Iravon, Konni, Pathanamthitta District, Kerala",
        mapsUrl: "https://maps.google.com/?q=Iravon+Konni+Pathanamthitta",
      },
    ],
  },

  story: [
    {
      era: "Auspicious Beginnings",
      title: "When Two Traditions & Families Aligned",
      description: "Rooted in the timeless heritage of Kerala and nurtured by the love of our families, our journey began with mutual respect, shared cultural values, and an unspoken harmony of hearts.",
      image: "/assets/images/gallery/photo_08_jis09282.jpg",
    },
    {
      era: "The Sacred Promise",
      title: "Walking Hand in Hand into Tomorrow",
      description: "With heartfelt blessings and prayers from both our parents, we pledged our commitment to support, cherish, and inspire one another through all the seasons of life.",
      image: "/assets/images/gallery/photo_17_jis09400.jpg",
    },
    {
      era: "The Eternal Bond",
      title: "A Celebration of Sacred Togetherness",
      description: "Surrounded by our beloved family, elders, and dear friends, we step forward into our new life together, guided by divine grace and deep gratitude.",
      image: "/assets/images/gallery/photo_26_jis09604.jpg",
    },
  ],

  photos: (curatedPhotos as unknown) as GalleryPhoto[],

  initialBlessings: [
    {
      id: "blessing-1",
      name: "Radhika & Unnikrishnan",
      relation: "Family Friends",
      message: "Heartiest congratulations Sethulekshmi and Aromal! May your married life be filled with boundless happiness, peace, and divine togetherness!",
      timestamp: "Recently",
      reaction: "💨",
    },
    {
      id: "blessing-2",
      name: "Gopan & Lekha",
      relation: "Relatives",
      message: "Wishing our dear Sethulekshmi and Aromal all the very best on your sacred Thalikettu. Looking forward to celebrating with you at Santhi Auditorium!",
      titestamp: "Recently",
      reaction: "🚰",
    },
    {
      id: "blessing-3",
      name: "Sujith & Meera",
      relation: "Cousins",
      message: "Sending all our love and heartfelt prayers for a blissful journey ahead. Can't wait to taste the grand Sadhya together!",
      titestamp: "Recently",
      reaction: "☨",
    },
  ] as Blessing[],

  rsvp: {
    deadline: "October 15, 2026",
    hostContacts: [
      {
        name: "Mr. Suresh Madhavan Nair",
        role: "Bride's Father (Achencovil)",
        phone: "+91 94470 73184",
        whatsappClean: "919447123456",
      },
      {
        name: "Mr. Santhosh Kurup",
        role: "Groom's Father (Konni)",
        phone: "+91 9447141979",
        whatsappClean: "919447234567",
      },
    ],
  },
};
