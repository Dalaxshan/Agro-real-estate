// lib/branch-data.ts

export interface Branch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  manager: string;
  timings: string;
  mapLink: string;
  image: string;
  isHeadOffice?: boolean;
}

export const branches: Branch[] = [
  {
    id: "1",
    city: "Colombo",
    name: "Colombo Head Office",
    address:
      "No. 45, Galle Road, Colombo 03, Western Province, Sri Lanka",
    phone: "+94 11 234 5678",
    email: "colombo@tranquillerealestate.lk",
    manager: "Nuwan Perera",
    timings: "Mon - Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Colombo+03+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&h=600&fit=crop",
    isHeadOffice: true,
  },
  {
    id: "2",
    city: "Kandy",
    name: "Kandy Branch",
    address:
      "No. 128, Peradeniya Road, Kandy 20000, Central Province, Sri Lanka",
    phone: "+94 81 234 5678",
    email: "kandy@tranquillerealestate.lk",
    manager: "Chaminda Silva",
    timings: "Mon - Fri: 9:00 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Kandy+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&h=600&fit=crop",
  },

  {
    id: "4",
    city: "Negombo",
    name: "Negombo Branch",
    address:
      "No. 89, Lewis Place, Negombo 11500, Western Province, Sri Lanka",
    phone: "+94 31 234 5678",
    email: "negombo@tranquillerealestate.lk",
    manager: "Sanduni Jayawardena",
    timings: "Mon - Fri: 9:00 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Negombo+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    city: "Jaffna",
    name: "Jaffna Branch",
    address:
      "No. 23, Hospital Road, Jaffna 40000, Northern Province, Sri Lanka",
    phone: "+94 21 234 5678",
    email: "jaffna@tranquillerealestate.lk",
    manager: "Kumaran Rajasingam",
    timings: "Mon - Fri: 9:00 AM - 5:00 PM | Sat: 9:00 AM - 12:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Jaffna+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    city: "Batticaloa",
    name: "Batticaloa Branch",
    address:
      "No. 67, Bar Road, Batticaloa 30000, Eastern Province, Sri Lanka",
    phone: "+94 65 234 5678",
    email: "batticaloa@tranquillerealestate.lk",
    manager: "Roshan Wickramasinghe",
    timings: "Mon - Fri: 9:00 AM - 5:00 PM | Sat: 9:00 AM - 12:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Batticaloa+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    city: "Matara",
    name: "Matara Branch",
    address:
      "No. 34, Anagarika Dharmapala Mawatha, Matara 81000, Southern Province, Sri Lanka",
    phone: "+94 41 234 5678",
    email: "matara@tranquillerealestate.lk",
    manager: "Dilshan Bandara",
    timings: "Mon - Fri: 9:00 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM | Sun: Closed",
    mapLink: "https://maps.google.com/?q=Matara+Sri+Lanka",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
  },
  
];

export function getAllBranches(): Branch[] {
  return branches;
}

export function getBranchesByCity(city: string): Branch[] {
  return branches.filter((branch) => branch.city === city);
}

export function getHeadOffice(): Branch | undefined {
  return branches.find((branch) => branch.isHeadOffice);
}