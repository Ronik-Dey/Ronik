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
    price: 1299,
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
    price: 1499,
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
  },
  {
    id: "kashmir-paradise",
    name: "Kashmir Paradise Tour",
    country: "India",
    continent: "Asia",
    description: "Experience the heaven on earth with stunning landscapes and rich culture.",
    longDescription: "Discover the breathtaking beauty of Kashmir, often called 'Paradise on Earth'. Stay in luxurious houseboats on Dal Lake, explore the Mughal Gardens, take a shikara ride at sunset, and visit the stunning valleys of Gulmarg and Pahalgam. Experience the unique blend of natural beauty and cultural heritage in this northernmost region of India.",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4254553/pexels-photo-4254553.jpeg",
      "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg",
      "https://images.pexels.com/photos/5208347/pexels-photo-5208347.jpeg",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg"
    ],
    price: 1799,
    duration: 7,
    rating: 4.8,
    reviews: 156,
    featured: true,
    popular: true,
    activities: ["Shikara Rides", "Gondola Rides", "Garden Visits", "Shopping", "Cultural Experiences"],
    inclusions: ["6 nights accommodation", "Daily breakfast", "Houseboat stay", "All transfers", "Sightseeing tours", "English-speaking guide"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to Kashmir! Transfer to your houseboat on Dal Lake. Evening shikara ride."
      },
      {
        day: 2,
        title: "Srinagar City Tour",
        description: "Visit Mughal Gardens, Shankaracharya Temple, and local markets."
      },
      {
        day: 3,
        title: "Gulmarg Excursion",
        description: "Full day trip to Gulmarg. Enjoy gondola ride and stunning views."
      },
      {
        day: 4,
        title: "Pahalgam Valley",
        description: "Drive to Pahalgam. Visit Betaab Valley and Chandanwari."
      },
      {
        day: 5,
        title: "Pahalgam Exploration",
        description: "Day at leisure to explore Pahalgam or optional activities."
      },
      {
        day: 6,
        title: "Return to Srinagar",
        description: "Drive back to Srinagar. Evening local market visit."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Srinagar airport for departure."
      }
    ],
    categories: ["Mountain", "Cultural", "Adventure"]
  },
  {
    id: "ladakh-adventure",
    name: "Ladakh Himalayan Explorer",
    country: "India",
    continent: "Asia",
    description: "Journey through the land of high passes and Buddhist monasteries.",
    longDescription: "Embark on an adventure through the stunning landscapes of Ladakh. Visit ancient Buddhist monasteries, cross high mountain passes, explore traditional villages, and witness the unique culture of this high-altitude desert. Experience the warmth of Ladakhi hospitality and the breathtaking beauty of the Himalayas.",
    image: "https://images.pexels.com/photos/6602156/pexels-photo-6602156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6602163/pexels-photo-6602163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602164/pexels-photo-6602164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602165/pexels-photo-6602165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602166/pexels-photo-6602166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 2199,
    duration: 9,
    rating: 4.7,
    reviews: 134,
    featured: false,
    popular: true,
    activities: ["Monastery Visits", "Mountain Passes", "Village Walks", "Camel Safari", "Photography"],
    inclusions: ["8 nights accommodation", "All meals", "Oxygen cylinders", "Transport", "Guide", "Permits"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive in Leh. Rest day for acclimatization."
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "Visit Leh Palace, Shanti Stupa, and local market."
      },
      {
        day: 3,
        title: "Monastery Tour",
        description: "Visit Thiksey, Hemis, and Shey monasteries."
      },
      {
        day: 4,
        title: "Pangong Lake",
        description: "Drive to Pangong Lake via Changla Pass."
      },
      {
        day: 5,
        title: "Nubra Valley",
        description: "Travel to Nubra Valley via Khardung La Pass."
      },
      {
        day: 6,
        title: "Nubra Exploration",
        description: "Visit Diskit Monastery and Hunder Sand Dunes."
      },
      {
        day: 7,
        title: "Return to Leh",
        description: "Drive back to Leh. Evening at leisure."
      },
      {
        day: 8,
        title: "Alchi and Lamayuru",
        description: "Day trip to ancient monasteries of Alchi and Lamayuru."
      },
      {
        day: 9,
        title: "Departure",
        description: "Transfer to Leh airport for departure."
      }
    ],
    categories: ["Adventure", "Mountain", "Cultural"]
  },
  {
    id: "uttarakhand-spiritual",
    name: "Uttarakhand Spiritual Journey",
    country: "India",
    continent: "Asia",
    description: "Explore the spiritual heart of India in the Himalayan foothills.",
    longDescription: "Journey through the sacred land of Uttarakhand, where spirituality meets natural beauty. Visit holy cities like Rishikesh and Haridwar, witness the evening Ganga Aarti, practice yoga and meditation, and explore the stunning landscapes of the Himalayan foothills. Experience the perfect blend of adventure and spirituality.",
    image: "https://images.pexels.com/photos/6602175/pexels-photo-6602175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6602176/pexels-photo-6602176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602177/pexels-photo-6602177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602178/pexels-photo-6602178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602179/pexels-photo-6602179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 1299,
    duration: 8,
    rating: 4.6,
    reviews: 167,
    featured: false,
    popular: false,
    activities: ["Yoga Sessions", "Temple Visits", "River Rafting", "Nature Walks", "Meditation"],
    inclusions: ["7 nights accommodation", "Daily breakfast", "Yoga classes", "Transport", "Guide", "Activities"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dehradun",
        description: "Welcome to Uttarakhand! Transfer to Rishikesh."
      },
      {
        day: 2,
        title: "Rishikesh Exploration",
        description: "Morning yoga, visit Beatles Ashram, evening Ganga Aarti."
      },
      {
        day: 3,
        title: "Adventure Day",
        description: "White water rafting and cliff jumping."
      },
      {
        day: 4,
        title: "Haridwar",
        description: "Visit temples and witness evening Ganga Aarti."
      },
      {
        day: 5,
        title: "Mussoorie",
        description: "Drive to Mussoorie. Visit Kempty Falls and Mall Road."
      },
      {
        day: 6,
        title: "Dhanaulti",
        description: "Day trip to Dhanaulti. Nature walks and eco park visit."
      },
      {
        day: 7,
        title: "Spiritual Activities",
        description: "Meditation sessions and spiritual discussions."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Dehradun airport for departure."
      }
    ],
    categories: ["Spiritual", "Adventure", "Mountain"]
  },
  {
    id: "assam-wildlife",
    name: "Assam Wildlife Safari",
    country: "India",
    continent: "Asia",
    description: "Discover the rich wildlife and tea culture of Northeast India.",
    longDescription: "Explore the wilderness of Assam, home to the one-horned rhinoceros and diverse wildlife. Visit Kaziranga National Park, experience tea plantation life, cruise on the mighty Brahmaputra River, and immerse yourself in the unique culture of Northeast India. Perfect for wildlife enthusiasts and nature lovers.",
    image: "https://images.pexels.com/photos/6602180/pexels-photo-6602180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6602181/pexels-photo-6602181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602182/pexels-photo-6602182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602183/pexels-photo-6602183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602184/pexels-photo-6602184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 1699,
    duration: 7,
    rating: 4.7,
    reviews: 123,
    featured: false,
    popular: false,
    activities: ["Wildlife Safari", "Tea Tasting", "River Cruise", "Cultural Shows", "Bird Watching"],
    inclusions: ["6 nights accommodation", "All meals", "Safari rides", "Transport", "Guide", "Activities"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        description: "Welcome to Assam! Transfer to Kaziranga."
      },
      {
        day: 2,
        title: "Kaziranga Safari",
        description: "Morning and afternoon safari in Kaziranga National Park."
      },
      {
        day: 3,
        title: "Tea Experience",
        description: "Visit tea gardens and learn about tea production."
      },
      {
        day: 4,
        title: "River Island",
        description: "Visit Majuli, world's largest river island."
      },
      {
        day: 5,
        title: "Sibsagar",
        description: "Explore Ahom kingdom temples and monuments."
      },
      {
        day: 6,
        title: "Guwahati",
        description: "Visit Kamakhya Temple and river cruise."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Guwahati airport for departure."
      }
    ],
    categories: ["Wildlife", "Nature", "Cultural"]
  },
  {
    id: "kanyakumari-tour",
    name: "Kanyakumari Coastal Explorer",
    country: "India",
    continent: "Asia",
    description: "Experience the southernmost tip of mainland India.",
    longDescription: "Journey to Kanyakumari, where three oceans meet. Watch spectacular sunrises and sunsets, visit the Vivekananda Rock Memorial, explore ancient temples, and experience the unique culture of Tamil Nadu. This tour combines spiritual significance with natural beauty.",
    image: "https://images.pexels.com/photos/6602185/pexels-photo-6602185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6602186/pexels-photo-6602186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602187/pexels-photo-6602187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602188/pexels-photo-6602188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6602189/pexels-photo-6602189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 999,
    duration: 5,
    rating: 4.5,
    reviews: 98,
    featured: false,
    popular: false,
    activities: ["Sunrise Viewing", "Temple Visits", "Beach Activities", "Boat Rides", "Shopping"],
    inclusions: ["4 nights accommodation", "Daily breakfast", "Transport", "Guide", "Activities"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arrive in Kanyakumari. Evening sunset view."
      },
      {
        day: 2,
        title: "Memorial Visit",
        description: "Visit Vivekananda Rock Memorial and Thiruvalluvar Statue."
      },
      {
        day: 3,
        title: "Temple Tour",
        description: "Explore ancient temples and local markets."
      },
      {
        day: 4,
        title: "Coastal Experience",
        description: "Beach activities and coastal village visit."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning sunrise view before departure."
      }
    ],
    categories: ["Beach", "Spiritual", "Cultural"]
  },
  {
    id: "darjeeling-sikkim",
    name: "Darjeeling & Sikkim Adventure",
    country: "India",
    continent: "Asia",
    description: "Experience the majestic Himalayas, tea plantations, and Buddhist culture.",
    longDescription: "Discover the enchanting beauty of India's northeast on this immersive tour of Darjeeling and Sikkim. Watch the sunrise over Mount Kanchenjunga, ride the famous Darjeeling Himalayan Railway, visit ancient Buddhist monasteries, and learn about tea production at historic plantations. Experience the unique blend of Indian, Nepali, and Tibetan cultures while enjoying the crisp mountain air and stunning landscapes.",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4254553/pexels-photo-4254553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5208347/pexels-photo-5208347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 1499,
    duration: 8,
    rating: 4.7,
    reviews: 156,
    featured: false,
    popular: true,
    activities: ["Mountain Trekking", "Tea Plantation Tours", "Monastery Visits", "Toy Train Ride", "Sunrise Views"],
    inclusions: ["7 nights accommodation", "Daily breakfast", "Transportation", "English-speaking guide", "Entrance fees", "Toy train tickets"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities", "Camera fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bagdogra",
        description: "Arrive at Bagdogra Airport and transfer to Darjeeling. Evening orientation walk around Mall Road."
      },
      {
        day: 2,
        title: "Darjeeling Exploration",
        description: "Early morning visit to Tiger Hill for sunrise. Visit Ghoom Monastery, Peace Pagoda, and take a joy ride on the toy train."
      },
      {
        day: 3,
        title: "Tea Experience",
        description: "Visit Happy Valley Tea Estate, learn about tea production, and enjoy tea tasting. Afternoon visit to Himalayan Mountaineering Institute."
      },
      {
        day: 4,
        title: "Darjeeling to Gangtok",
        description: "Drive to Gangtok, Sikkim's capital. Visit Rumtek Monastery en route. Evening free to explore MG Marg."
      },
      {
        day: 5,
        title: "Gangtok Sightseeing",
        description: "Visit Enchey Monastery, Namgyal Institute of Tibetology, and Do Drul Chorten. Evening cultural show."
      },
      {
        day: 6,
        title: "Tsomgo Lake Excursion",
        description: "Full-day excursion to the stunning Tsomgo Lake and Baba Mandir (subject to weather conditions)."
      },
      {
        day: 7,
        title: "Gangtok to Kalimpong",
        description: "Drive to Kalimpong. Visit flower nurseries, Durpin Monastery, and local markets."
      },
      {
        day: 8,
        title: "Departure",
        description: "Morning transfer to Bagdogra Airport for your departure flight."
      }
    ],
    categories: ["Mountain", "Cultural", "Adventure"]
  },
  {
    id: "puri-konark",
    name: "Puri & Konark Heritage",
    country: "India",
    continent: "Asia",
    description: "Discover the spiritual and architectural wonders of Odisha.",
    longDescription: "Immerse yourself in the rich cultural heritage of Odisha on this spiritual and architectural journey. Visit the magnificent Jagannath Temple in Puri, marvel at the intricate carvings of the Sun Temple in Konark, and relax on the pristine beaches of the Bay of Bengal. Experience traditional Odissi dance, local cuisine, and the warm hospitality of the region.",
    image: "https://images.pexels.com/photos/6620743/pexels-photo-6620743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6620913/pexels-photo-6620913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6620854/pexels-photo-6620854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6620855/pexels-photo-6620855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6620857/pexels-photo-6620857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 899,
    duration: 5,
    rating: 4.6,
    reviews: 132,
    featured: false,
    popular: false,
    activities: ["Temple Visits", "Beach Activities", "Cultural Shows", "Local Crafts", "Food Tours"],
    inclusions: ["4 nights accommodation", "Daily breakfast", "Transportation", "Guide services", "Temple permissions", "Cultural show"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities", "Camera fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bhubaneswar",
        description: "Arrive at Bhubaneswar Airport and transfer to Puri. Evening visit to Puri Beach and local market."
      },
      {
        day: 2,
        title: "Puri Temple Tour",
        description: "Morning visit to Jagannath Temple (exterior for non-Hindus). Afternoon explore local handicrafts and art."
      },
      {
        day: 3,
        title: "Konark Sun Temple",
        description: "Full-day excursion to the UNESCO World Heritage Site of Konark Sun Temple. Evening Odissi dance performance."
      },
      {
        day: 4,
        title: "Chilika Lake",
        description: "Day trip to Chilika Lake, Asia's largest brackish water lagoon. Boat ride to spot dolphins and birds."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning at leisure. Transfer to Bhubaneswar Airport for departure."
      }
    ],
    categories: ["Heritage", "Spiritual", "Beach"]
  },
  {
    id: "digha-beach",
    name: "Digha Beach Escape",
    country: "India",
    continent: "Asia",
    description: "Relax on the pristine beaches of West Bengal's favorite seaside resort.",
    longDescription: "Escape to the tranquil shores of Digha, West Bengal's most popular beach destination. Enjoy long walks on the beach, spectacular sunrises and sunsets, fresh seafood, and various water activities. Visit the Marine Aquarium, explore the Amarabati Park, and experience the local culture of this charming beach town.",
    image: "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 499,
    duration: 3,
    rating: 4.3,
    reviews: 98,
    featured: false,
    popular: false,
    activities: ["Beach Activities", "Water Sports", "Marine Aquarium", "Local Markets", "Seafood Tasting"],
    inclusions: ["2 nights accommodation", "Daily breakfast", "Transportation", "Local guide", "Aquarium entry"],
    exclusions: ["Travel insurance", "Personal expenses", "Optional activities", "Meals not mentioned"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Digha",
        description: "Arrive in Digha and check-in to your hotel. Evening visit to New Digha Beach for sunset."
      },
      {
        day: 2,
        title: "Beach and Local Attractions",
        description: "Visit Marine Aquarium, Amarabati Park, and enjoy beach activities. Evening seafood dinner."
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning at leisure for last-minute shopping. Departure for onward journey."
      }
    ],
    categories: ["Beach", "Nature", "Weekend Getaway"]
  },
  {
    id: "dubai-discovery",
    name: "Dubai Modern Marvels",
    country: "United Arab Emirates",
    continent: "Asia",
    description: "Experience the ultimate blend of modern luxury and Arabian tradition.",
    longDescription: "Discover the wonders of Dubai, where traditional Arabian charm meets futuristic vision. Ascend the world's tallest building, the Burj Khalifa, shop in magnificent malls, experience desert adventures, and cruise along Dubai Creek. From gold souks to artificial islands, this tour showcases the best of this remarkable city.",
    image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2403251/pexels-photo-2403251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 2499,
    duration: 6,
    rating: 4.8,
    reviews: 312,
    featured: true,
    popular: true,
    activities: ["Desert Safari", "City Tours", "Shopping", "Dhow Cruise", "Burj Khalifa Visit"],
    inclusions: ["5 nights luxury accommodation", "Daily breakfast", "Desert safari with BBQ", "City tours", "Burj Khalifa tickets", "Airport transfers"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Welcome to Dubai! Transfer to your hotel and evening at leisure."
      },
      {
        day: 2,
        title: "Modern Dubai Tour",
        description: "Visit Burj Khalifa, Dubai Mall, Palm Jumeirah, and Atlantis Hotel. Evening dhow cruise with dinner."
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Morning at leisure. Afternoon desert safari with dune bashing, camel riding, and BBQ dinner."
      },
      {
        day: 4,
        title: "Old Dubai Tour",
        description: "Explore historic Dubai Creek, Gold Souk, Spice Souk, and Al Fahidi Historical District."
      },
      {
        day: 5,
        title: "Abu Dhabi Day Trip",
        description: "Full-day excursion to Abu Dhabi visiting Sheikh Zayed Mosque, Emirates Palace, and Ferrari World."
      },
      {
        day: 6,
        title: "Departure",
        description: "Free time for last-minute shopping before transfer to Dubai Airport."
      }
    ],
    categories: ["Luxury", "Desert", "Shopping"]
  },
  {
    id: "south-africa-safari",
    name: "South African Safari Adventure",
    country: "South Africa",
    continent: "Africa",
    description: "Experience the ultimate African safari and coastal beauty.",
    longDescription: "Embark on an unforgettable journey through South Africa's diverse landscapes. From thrilling game drives in Kruger National Park to the scenic beauty of the Garden Route, and the vibrant culture of Cape Town. Witness the Big Five in their natural habitat, explore picturesque vineyards, and discover the rich history of this remarkable country.",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 3999,
    duration: 10,
    rating: 4.9,
    reviews: 245,
    featured: true,
    popular: true,
    activities: ["Game Drives", "Wine Tasting", "City Tours", "Cultural Visits", "Nature Walks"],
    inclusions: ["9 nights accommodation", "All meals on safari", "Game drives", "Wine tours", "Local guides", "Airport transfers"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Johannesburg",
        description: "Welcome to South Africa! Transfer to your hotel and evening briefing."
      },
      {
        day: 2,
        title: "Kruger National Park",
        description: "Transfer to Kruger. Afternoon game drive searching for the Big Five."
      },
      {
        day: 3,
        title: "Kruger Safari",
        description: "Full day of game drives in Kruger National Park."
      },
      {
        day: 4,
        title: "Panorama Route",
        description: "Scenic drive along the Panorama Route visiting Blyde River Canyon."
      },
      {
        day: 5,
        title: "Cape Town",
        description: "Fly to Cape Town. Afternoon city tour including Table Mountain."
      },
      {
        day: 6,
        title: "Cape Peninsula",
        description: "Full-day Cape Peninsula tour including Cape Point and penguin colony."
      },
      {
        day: 7,
        title: "Winelands",
        description: "Tour of Stellenbosch and Franschhoek wine regions with tastings."
      },
      {
        day: 8,
        title: "Garden Route",
        description: "Drive along the Garden Route to Knysna. Afternoon lagoon cruise."
      },
      {
        day: 9,
        title: "Tsitsikamma",
        description: "Visit Tsitsikamma National Park for walks and optional activities."
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer to Port Elizabeth Airport for departure flight."
      }
    ],
    categories: ["Wildlife", "Adventure", "Nature"]
  },
  {
    id: "bali-paradise",
    name: "Bali Island Paradise",
    country: "Indonesia",
    continent: "Asia",
    description: "Experience the magic of the Island of the Gods.",
    longDescription: "Discover the enchanting island of Bali, where ancient temples meet pristine beaches, and traditional culture thrives alongside modern luxury. Explore terraced rice fields, visit sacred temples, learn traditional crafts, and relax on beautiful beaches. Experience the warm hospitality, delicious cuisine, and spiritual atmosphere that makes Bali truly special.",
    image: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 1899,
    duration: 8,
    rating: 4.7,
    reviews: 289,
    featured: true,
    popular: true,
    activities: ["Temple Visits", "Beach Activities", "Cooking Classes", "Spa Treatments", "Rice Terrace Tours"],
    inclusions: ["7 nights accommodation", "Daily breakfast", "Private tours", "Airport transfers", "Welcome dinner", "Spa treatment"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Welcome to Bali! Transfer to your hotel in Seminyak. Evening welcome dinner."
      },
      {
        day: 2,
        title: "Ubud Culture",
        description: "Visit Monkey Forest, Ubud Palace, and art galleries. Evening traditional dance performance."
      },
      {
        day: 3,
        title: "Temple Tour",
        description: "Visit Tanah Lot and Uluwatu temples. Sunset Kecak fire dance performance."
      },
      {
        day: 4,
        title: "Rice Terraces & Waterfalls",
        description: "Explore Tegalalang rice terraces and visit scenic waterfalls. Afternoon coffee plantation tour."
      },
      {
        day: 5,
        title: "Cooking & Spa",
        description: "Morning cooking class learning Balinese cuisine. Afternoon spa treatment."
      },
      {
        day: 6,
        title: "Nusa Penida Island",
        description: "Day trip to Nusa Penida visiting Kelingking Beach and Angel's Billabong."
      },
      {
        day: 7,
        title: "Beach Day",
        description: "Free day to relax on the beach or explore on your own. Optional water sports available."
      },
      {
        day: 8,
        title: "Departure",
        description: "Free time until transfer to airport for departure flight."
      }
    ],
    categories: ["Beach", "Cultural", "Honeymoon"]
  },
  {
    id: "maldives-luxury",
    name: "Maldives Luxury Escape",
    country: "Maldives",
    continent: "Asia",
    description: "Experience paradise in an overwater villa in the Maldives.",
    longDescription: "Indulge in the ultimate luxury escape in the Maldives, where crystal-clear waters meet powder-white beaches. Stay in an overwater villa, snorkel with marine life, enjoy world-class spa treatments, and witness spectacular sunsets. Perfect for honeymoons or special occasions, this trip offers the perfect blend of relaxation and adventure in a tropical paradise.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1021068/pexels-photo-1021068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 4999,
    duration: 7,
    rating: 4.9,
    reviews: 178,
    featured: true,
    popular: true,
    activities: ["Snorkeling", "Spa Treatments", "Water Sports", "Sunset Cruise", "Island Hopping"],
    inclusions: ["6 nights luxury accommodation", "All meals", "Seaplane transfers", "Welcome drinks", "Daily activities", "Sunset cruise"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Premium activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Male",
        description: "Arrive in Male and take a scenic seaplane transfer to your resort. Welcome dinner."
      },
      {
        day: 2,
        title: "Island Exploration",
        description: "Morning snorkeling tour. Afternoon at leisure. Evening sunset cruise."
      },
      {
        day: 3,
        title: "Water Activities",
        description: "Try various water sports including kayaking and paddleboarding. Evening beach dinner."
      },
      {
        day: 4,
        title: "Spa & Relaxation",
        description: "Morning spa treatment. Afternoon snorkeling with marine biologist."
      },
      {
        day: 5,
        title: "Island Hopping",
        description: "Visit nearby islands and local communities. Traditional Maldivian cooking class."
      },
      {
        day: 6,
        title: "Free Day",
        description: "Day at leisure to enjoy resort facilities. Farewell dinner under the stars."
      },
      {
        day: 7,
        title: "Departure",
        description: "Morning at leisure before seaplane transfer to Male for departure."
      }
    ],
    categories: ["Luxury", "Beach", "Honeymoon"]
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps Explorer",
    country: "Switzerland",
    continent: "Europe",
    description: "Experience the majestic beauty of the Swiss Alps and charming villages.",
    longDescription: "Discover the breathtaking beauty of Switzerland, from snow-capped peaks to crystal-clear lakes and charming alpine villages. Ride scenic trains through spectacular mountain passes, explore medieval towns, enjoy Swiss chocolate and cheese, and experience the perfect blend of natural beauty and cultural heritage that makes Switzerland unique.",
    image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2779863/pexels-photo-2779863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1539696/pexels-photo-1539696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    price: 3999,
    duration: 8,
    rating: 4.8,
    reviews: 234,
    featured: true,
    popular: true,
    activities: ["Scenic Train Rides", "Hiking", "Cable Car Rides", "Chocolate Tasting", "Lake Cruises"],
    inclusions: ["7 nights accommodation", "Daily breakfast", "Swiss Travel Pass", "Mountain excursions", "Guided tours"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich",
        description: "Welcome to Switzerland! City tour and chocolate tasting."
      },
      {
        day: 2,
        title: "Lucerne",
        description: "Travel to Lucerne. Visit Chapel Bridge and Lion Monument. Lake cruise."
      },
      {
        day: 3,
        title: "Mount Pilatus",
        description: "Golden Round Trip to Mount Pilatus including cogwheel train and cable cars."
      },
      {
        day: 4,
        title: "Interlaken",
        description: "Travel to Interlaken. Free time to explore or optional paragliding."
      },
      {
        day: 5,
        title: "Jungfraujoch",
        description: "Excursion to Jungfraujoch - Top of Europe via scenic train ride."
      },
      {
        day: 6,
        title: "Zermatt",
        description: "Travel to car-free Zermatt. View of the Matterhorn. Optional glacier paradise visit."
      },
      {
        day: 7,
        title: "Glacier Express",
        description: "Scenic train journey on the famous Glacier Express to St. Moritz."
      },
      {
        day: 8,
        title: "Departure",
        description: "Return to Zurich for departure flight."
      }
    ],
    categories: ["Mountain", "Adventure", "Luxury"]
  }
];

export const getCategories = (): string[] => {
  const allCategories = destinations.flatMap(dest => dest.categories);
  return [...new Set(allCategories)];
};

export const getDestinationsByCategory = (category: string): Destination[] => {
  return destinations.filter(dest => dest.categories.includes(category));
};