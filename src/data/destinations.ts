export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  price: number;
  duration: number;
  rating: number;
  reviews: number;
  featured: boolean;
  popular: boolean;
  activities: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  categories: string[];
}

export const destinations: Destination[] = [
  {
    id: "taj-mahal-tour",
    name: "Taj Mahal & Golden Triangle",
    country: "India",
    continent: "Asia",
    description: "Explore the iconic Taj Mahal and the historic cities of Delhi, Agra, and Jaipur.",
    longDescription: "Experience the magic of India's Golden Triangle on this comprehensive tour. Begin in Delhi, exploring both the historic Old Delhi and the colonial splendor of New Delhi. Continue to Agra to witness the breathtaking Taj Mahal at sunrise and sunset. Complete your journey in the 'Pink City' of Jaipur, where you'll explore majestic forts and vibrant markets. This tour offers the perfect introduction to India's rich history, architecture, and culture.",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/767239/pexels-photo-767239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3581898/pexels-photo-3581898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/9707251/pexels-photo-9707251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 99999,
    duration: 7,
    rating: 4.8,
    reviews: 245,
    featured: true,
    popular: true,
    activities: ["Heritage Walks", "Food Tours", "Monument Visits", "Cultural Shows", "Market Explorations"],
    inclusions: ["6 nights accommodation", "Daily breakfast", "Private transportation", "English-speaking guide", "Monument entrance fees", "Welcome dinner"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Optional activities", "Camera fees at monuments"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Welcome to India! Upon arrival at Delhi International Airport, you'll be met by our representative and transferred to your hotel. Rest of the day at leisure to recover from jet lag."
      },
      {
        day: 2,
        title: "Delhi City Tour",
        description: "Full day exploring Delhi, including Jama Masjid, Red Fort, Chandni Chowk, Humayun's Tomb, Qutub Minar, and India Gate."
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Morning drive to Agra. Afternoon visit to Agra Fort and Mehtab Bagh for sunset views of the Taj Mahal across the river."
      },
      {
        day: 4,
        title: "Taj Mahal and Travel to Jaipur",
        description: "Early morning visit to the Taj Mahal at sunrise. After breakfast, drive to Jaipur, stopping at Fatehpur Sikri en route."
      },
      {
        day: 5,
        title: "Jaipur Exploration",
        description: "Full day in Jaipur visiting Amber Fort, City Palace, Jantar Mantar observatory, and Hawa Mahal (Palace of Winds)."
      },
      {
        day: 6,
        title: "Jaipur to Delhi",
        description: "Morning at leisure in Jaipur for shopping or optional activities. Afternoon drive back to Delhi."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Delhi International Airport for your departure flight. End of our services."
      }
    ],
    categories: ["Cultural", "Heritage"]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters & Beaches",
    country: "India",
    continent: "Asia",
    description: "Experience the serene backwaters and pristine beaches of God's Own Country.",
    longDescription: "Discover the tropical paradise of Kerala on this enchanting tour. Cruise through the tranquil backwaters on a traditional houseboat, explore spice plantations, witness traditional Kathakali performances, and relax on pristine beaches. Experience the unique culture, cuisine, and natural beauty of this southern Indian gem.",
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 124999,
    duration: 8,
    rating: 4.9,
    reviews: 178,
    featured: true,
    popular: true,
    activities: ["Houseboat Cruise", "Ayurvedic Spa", "Cultural Shows", "Beach Activities", "Spice Plantation Tours"],
    inclusions: ["7 nights accommodation", "Daily breakfast", "Houseboat stay", "Cultural performances", "Spice plantation visit", "Airport transfers"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Welcome to Kerala! Transfer to your hotel and evening Chinese fishing nets sunset view."
      },
      {
        day: 2,
        title: "Kochi Heritage Tour",
        description: "Explore Fort Kochi, Dutch Palace, Jewish Synagogue, and evening Kathakali performance."
      },
      {
        day: 3,
        title: "Munnar Hill Station",
        description: "Drive to Munnar through scenic hills. Visit tea plantations and spice gardens."
      },
      {
        day: 4,
        title: "Thekkady Wildlife",
        description: "Travel to Thekkady, boat ride in Periyar Lake, spice plantation tour."
      },
      {
        day: 5,
        title: "Alleppey Backwaters",
        description: "Board your private houseboat for an overnight cruise through the backwaters."
      },
      {
        day: 6,
        title: "Kovalam Beach",
        description: "Drive to Kovalam. Afternoon at leisure on the beach."
      },
      {
        day: 7,
        title: "Kovalam Relaxation",
        description: "Full day to relax, enjoy Ayurvedic spa treatments, and beach activities."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Trivandrum airport for your departure flight."
      }
    ],
    categories: ["Beach", "Cultural", "Honeymoon"]
  }
  // ... rest of the destinations with updated prices
];

export const getCategories = (): string[] => {
  const allCategories = destinations.flatMap(dest => dest.categories);
  return [...new Set(allCategories)];
};

export const getDestinationsByCategory = (category: string): Destination[] => {
  return destinations.filter(dest => dest.categories.includes(category));
};