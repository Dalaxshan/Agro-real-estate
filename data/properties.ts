export interface Property {
  id: number;
  title: string;
  location: string;
  lat: number;
  lng: number;
  embedUrl: string;
  virtualTourUrl?: string;
  bedrooms?: number;
  blueprint?: {
    title: string;
    fileUrl: string;
    fileName: string;
    fileType?: "pdf" | "image";
  };
  price: string;
  priceValue: number;
  city:
    | "Colombo"
    | "Galle"
    | "Kurunegala"
    | "Nugegoda"
    | "Rajagiriya"
    | "Wattala";
  type: "FOR SALE" | "FOR RENT";
  landType: "Sale" | "Rent";
  category:
    | "Agricultural"
    | "Residential"
    | "Commercial"
    | "Houses"
    | "Apartment"
    | "Villas";
  area: string;
  description: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    image: string;
    phone: string;
    email: string;
  };
  statistics: {
    views: { month: string; value: number }[];
    priceHistory: { year: number; price: number }[];
  };
  reviews: {
    id: string;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  postedDate: string;
  coordinates?: { lat: number; lng: number };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Prime Residential Land in Colombo 07",
    location: "Colombo 07, Sri Lanka",
    lat: 6.916621288085356,
    lng: 79.97293566373716,
    city: "Colombo",
    bedrooms: 4,
    virtualTourUrl:
      "https://www.google.com/maps/embed?pb=!4v1771240449012!6m8!1m7!1scTTQBVee74T2KpsRULOMpA!2m2!1d6.9062950018613!2d79.92752460354632!3f27.37124281642751!4f-14.134596299137641!5f0.7820865974627469",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.1234567890123!2d79.86123456789012!3d6.927123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591234567890%3A0xabcdef1234567890!2sColombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 85,000,000",
    priceValue: 85000000,
    blueprint: {
      title: "Land Blueprint",
      fileUrl:
        "https://res.cloudinary.com/dyvixdh7n/image/upload/v1771304975/blue-print_vbndsq.jpg",
      fileName: "colombo-07-land-blueprint",
      fileType: "image",
    },
    type: "FOR SALE",
    landType: "Sale",
    category: "Residential",
    area: "15 Perches",
    description:
      "Exclusive residential land block located in the heart of Colombo 07. Perfect for building a luxury villa or apartment complex. Walking distance to leading schools and hospitals. Wide road access and peaceful neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
    features: [
      "20ft Road Access",
      "3 Phase Electricity",
      "Pipe Borne Water",
      "Clear Deeds",
      "Quiet Neighborhood",
    ],
    agent: {
      name: "Kamal Perera",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      phone: "+94 77 123 4567",
      email: "kamal@agroproperty.lk",
    },
    postedDate: "2 days ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
  {
    id: 2,
    title: "Commercial Land Facing High Level Road",
    location: "Rajagiriya, Sri Lanka",
    lat: 6.872845614038111,
    lng: 79.88306730333007,
    city: "Rajagiriya",
    bedrooms: 4,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.567890123456!2d79.87654321098765!3d6.894567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258b1234567890%3A0xabcdef1234567890!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 250,000",
    priceValue: 250000,
    type: "FOR RENT",
    landType: "Rent",
    category: "Commercial",
    area: "20 Perches",
    description:
      "High visibility commercial land available for long term lease in Rajagiriya. Ideal for a showroom, office building, or car sale. 40ft road frontage. Close to parliament and administrative capital.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    ],
    features: [
      "Main Road Facing",
      "Commercial Zoning",
      "3 Phase Electricity",
      "Water Supply",
      "Secure Boundaries",
    ],
    agent: {
      name: "Nisha Fernando",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      phone: "+94 71 234 5678",
      email: "nisha@agroproperty.lk",
    },
    postedDate: "5 days ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
  {
    id: 3,
    title: "Scenic Land with Paddy Field View",
    location: "Nugegoda, Sri Lanka",
    lat: 6.835218143833975,
    lng: 80.47719514070442,
    city: "Nugegoda",
    bedrooms: 4,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.567890123456!2d79.87654321098765!3d6.894567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258b1234567890%3A0xabcdef1234567890!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 45,000,000",
    priceValue: 45000000,
    type: "FOR SALE",
    landType: "Sale",
    category: "Villas",
    area: "12 Perches",
    description:
      "Beautiful block of land overlooking a lush green paddy field in Nugegoda. Peaceful environment yet close to all urban amenities. Ideal for a nature lover's home. 15ft wide access road.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    features: [
      "Paddy Field View",
      "Residential Area",
      "Water & Electricity",
      "Clear Title",
      "Close to Supermarkets",
    ],
    agent: {
      name: "Ruwan Silva",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      phone: "+94 76 345 6789",
      email: "ruwan@agroproperty.lk",
    },
    postedDate: "1 week ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
  {
    id: 4,
    title: "Coconut & Cinnamon Estate for Sale",
    location: "Kurunegala, Sri Lanka",
    lat: 8.971754757943856,
    lng: 80.52150209811157,
    city: "Kurunegala",
    bedrooms: 4,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.567890123456!2d79.87654321098765!3d6.894567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258b1234567890%3A0xabcdef1234567890!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 120,000,000",
    priceValue: 120000000,
    type: "FOR SALE",
    landType: "Sale",
    category: "Agricultural",
    area: "5 Acres",
    description:
      "Productive coconut and cinnamon estate located in Kurunegala. Generating monthly income. Includes a watcher's cottage and store room. Fertile soil and well-maintained crops.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80",
    ],
    features: [
      "Income Generating",
      "Watcher's Cottage",
      "Well Water",
      "Electricity",
      "Motorable Roads",
    ],
    agent: {
      name: "Dinesh Jayawardena",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      phone: "+94 77 987 6543",
      email: "dinesh@agroproperty.lk",
    },
    postedDate: "2 weeks ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
  {
    id: 5,
    title: "Beachfront Land for Tourism Project",
    location: "Galle, Sri Lanka",
    lat: 6.4727055359142796,
    lng: 81.50011837853287,
    city: "Galle",
    bedrooms: 4,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.567890123456!2d79.87654321098765!3d6.894567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258b1234567890%3A0xabcdef1234567890!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 250,000,000",
    priceValue: 250000000,
    type: "FOR SALE",
    landType: "Sale",
    category: "Apartment",
    area: "40 Perches",
    description:
      "Prime beachfront land in Galle, ideal for a boutique hotel or luxury villa project. Direct beach access and stunning sunset views. Located in a high tourism zone.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    ],
    features: [
      "Beachfront",
      "Tourism Zone",
      "Wide Road Access",
      "Approved for Construction",
      "Stunning Views",
    ],
    agent: {
      name: "Amanda De Silva",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      phone: "+94 71 876 5432",
      email: "amanda@agroproperty.lk",
    },
    postedDate: "3 days ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
  {
    id: 6,
    title: "Bare Land for Warehouse",
    location: "Wattala, Sri Lanka",
    lat: 6.907800255539025,
    lng: 79.9307889684019,
    city: "Wattala",
    bedrooms: 4,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.567890123456!2d79.87654321098765!3d6.894567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258b1234567890%3A0xabcdef1234567890!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1690000000000",
    price: "LKR 180,000",
    priceValue: 180000,
    type: "FOR RENT",
    landType: "Rent",
    category: "Commercial",
    area: "30 Perches",
    description:
      "Flat bare land available for rent in Wattala. Suitable for storage or warehouse purposes. Container access available. Secure perimeter wall and gate.",
    images: [
      "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef230?w=800&q=80",
    ],
    features: [
      "Container Access",
      "Perimeter Wall",
      "Industrial Area",
      "Water & Electricity",
      "Long Term Lease",
    ],
    agent: {
      name: "Suresh Perera",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
      phone: "+94 77 555 1234",
      email: "suresh@agroproperty.lk",
    },
    postedDate: "1 day ago",
    statistics: {
      views: [
        { month: "Sep", value: 420 },
        { month: "Oct", value: 510 },
        { month: "Nov", value: 460 },
        { month: "Dec", value: 680 },
        { month: "Jan", value: 740 },
        { month: "Feb", value: 920 },
      ],
      priceHistory: [
        { year: 2021, price: 65000000 },
        { year: 2022, price: 70000000 },
        { year: 2023, price: 76000000 },
        { year: 2024, price: 80000000 },
        { year: 2025, price: 83000000 },
        { year: 2026, price: 85000000 },
      ],
    },
    reviews: [
      {
        id: "rev_1",
        user: "Nimal S.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
        rating: 5,
        date: "Feb 15, 2026",
        comment:
          "Everything was clear and the details matched the site visit. Agent was responsive and professional.",
      },
      {
        id: "rev_2",
        user: "Shenali P.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
        rating: 4,
        date: "Feb 14, 2026",
        comment:
          "Excellent location and good access road. Pricing is premium but expected for Colombo 07.",
      },
      {
        id: "rev_3",
        user: "Ruwan K.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
        rating: 5,
        date: "Feb 12, 2026",
        comment:
          "Deed information was shared early and the process was straightforward. Highly recommended.",
      },
    ],
  },
];

// Extract unique cities from properties for filtering
// export const cities = ["All", ...Array.from(new Set(properties.map(p => {
//   const parts = p.location.split(",");
//   return parts.length > 1 ? parts[parts.length - 2].trim() : "Other";
// })))];

// Cities for filtering
export const cities = [
  "All",
  "Colombo",
  "Galle",
  "Kurunegala",
  "Nugegoda",
  "Rajagiriya",
  "Wattala",
];

// Land types for filtering (Sale/Rent)
export const landTypes = ["All", "Sale", "Rent"];

// Property types (same as landTypes for this data structure)
export const propertyTypes = ["All", "FOR SALE", "FOR RENT"];

// Categories for filtering
export const categories = [
  "All",
  "Agricultural",
  "Residential",
  "Commercial",
  "Houses",
  "Apartment",
  "Villas",
];
