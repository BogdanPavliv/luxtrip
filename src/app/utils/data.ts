export type Category = 'World' | 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Antarctica' | 'Australia';

interface Images {
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

interface Trip {
  id: number;
  place: string;
  text: string;
  image: string;
  imageWide: string;
  price: number;
  category: Category;
  rating: number;
  images: Images;
}

export const dataTrips: Trip[] = [
  { 
    id: 1, 
    place: 'Austria',
    text: 'Winter Park Ski Holiday', 
    category: 'Europe', 
    price: 1499,
    image: "/img/section-extraordinary/catalog/catalog01.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 2, 
    place: 'Peru', 
    text: 'Machu Picchu',
    category: 'South America', 
    price: 2300,
    image: "/img/section-extraordinary/catalog/catalog02.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 3, 
    place: 'Croatia', 
    text: 'Hvar',
    category: 'Europe', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog03.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 4, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog04.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 5, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog05.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 6, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 5500,
    image: "/img/section-extraordinary/catalog/catalog06.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 7, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 3300,
    image: "/img/section-extraordinary/catalog/catalog07.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 8, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'North America', 
    price: 3310,
    image: "/img/section-extraordinary/catalog/catalog08.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 9, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 9310,
    image: "/img/section-extraordinary/catalog/catalog09.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 10, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'South America', 
    price: 1310,
    image: "/img/section-extraordinary/catalog/catalog10.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 11, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Africa', 
    price: 6310,
    image: "/img/section-extraordinary/catalog/catalog11.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 12, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'North America', 
    price: 7310,
    image: "/img/section-extraordinary/catalog/catalog12.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 13, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'North America', 
    price: 8810,
    image: "/img/section-extraordinary/catalog/luxary01.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 14, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 810,
    image: "/img/section-extraordinary/catalog/luxary02.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 15, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 3810,
    image: "/img/section-extraordinary/catalog/luxary03.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 16, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 4810,
    image: "/img/section-extraordinary/catalog/luxary04.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 17, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 6810,
    image: "/img/section-extraordinary/catalog/luxary05.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 18, 
    place: 'Austria', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 1490,
    image: "/img/section-extraordinary/catalog/catalog01.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 19, 
    place: 'Peru', 
    text: 'Machu Picchu',
    category: 'South America', 
    price: 2310,
    image: "/img/section-extraordinary/catalog/catalog02.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 20, 
    place: 'Croatia', 
    text: 'Hvar',
    category: 'Europe', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog03.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 21, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog04.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 22, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 4500,
    image: "/img/section-extraordinary/catalog/catalog05.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 23, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 5500,
    image: "/img/section-extraordinary/catalog/catalog06.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 24, 
    place: 'Jordan', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 3300,
    image: "/img/section-extraordinary/catalog/catalog07.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 25, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 3310,
    image: "/img/section-extraordinary/catalog/catalog08.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 26, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Asia', 
    price: 9310,
    image: "/img/section-extraordinary/catalog/catalog09.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 27, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Antarctica', 
    price: 1310,
    image: "/img/section-extraordinary/catalog/catalog10.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 28, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Australia', 
    price: 1310,
    image: "/img/section-extraordinary/catalog/catalog11.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 29, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 7310,
    image: "/img/section-extraordinary/catalog/catalog12.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 30, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Europe', 
    price: 8810,
    image: "/img/section-extraordinary/catalog/luxary01.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 31, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Australia', 
    price: 810,
    image: "/img/section-extraordinary/catalog/luxary02.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 2.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 32, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Australia', 
    price: 3810,
    image: "/img/section-extraordinary/catalog/luxary03.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 1.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 33, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Australia', 
    price: 4810,
    image: "/img/section-extraordinary/catalog/luxary04.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 34, 
    place: 'Anyplace', 
    text: 'Wadi Musa',
    category: 'Australia', 
    price: 6810,
    image: "/img/section-extraordinary/catalog/luxary05.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
  { 
    id: 35, 
    place: 'Austria',
    text: 'Winter Park Ski Holiday', 
    category: 'Europe', 
    price: 1499,
    image: "/img/section-extraordinary/catalog/catalog01.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-1.png",
    rating: 4.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-1.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-2.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-3.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-4.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-5.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-6.png",
    }
  },
  { 
    id: 36, 
    place: 'Peru', 
    text: 'Machu Picchu',
    category: 'South America', 
    price: 2300,
    image: "/img/section-extraordinary/catalog/catalog02.jpg",
    imageWide: "/img/section-extraordinary/catalog/catalog-img-wide-2.png",
    rating: 3.0,
    images: {
      image: "/img/lux-p-p-light/gallery/gallery-img-7.png",
      image2: "/img/lux-p-p-light/gallery/gallery-img-8.png",
      image3: "/img/lux-p-p-light/gallery/gallery-img-9.png",
      image4: "/img/lux-p-p-light/gallery/gallery-img-10.png",
      image5: "/img/lux-p-p-light/gallery/gallery-img-11.png",
      image6: "/img/lux-p-p-light/gallery/gallery-img-12.png",
    }
  },
];

interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
  place: string
}

export const dataReviews: Review[] = [
  { 
    id: 1, 
    text: '“Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”', 
    name: '- Eduard Hand',
    image: "/img/section-extraordinary/customer01.jpg",
    place: "Müller-Egerer",
  },
  { 
    id: 2, 
    text: '“We want to visit Manali from long time. Abhishek from ideal tour give us the best quote for Manali tour. He was very supportive and approachable at any time. He made our trip hassle-free. Thanks for your great help Abhishek...Ideal Tour..!!!”', 
    name: '- Marie Kähler',
    image: "/img/section-extraordinary/customer02.jpg",
    place: "Lekkerland",
  },
  { 
    id: 3,    
    text: '“Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”', 
    name: '- Eduard Hand',
    image: "/img/section-extraordinary/customer01.jpg",
    place: "Müller-Egerer",
  },
  { 
    id: 4, 
    text: '“We want to visit Manali from long time. Abhishek from ideal tour give us the best quote for Manali tour. He was very supportive and approachable at any time. He made our trip hassle-free. Thanks for your great help Abhishek...Ideal Tour..!!!”', 
    name: '- Marie Kähler',
    image: "/img/section-extraordinary/customer02.jpg",
    place: "Lekkerland",
  },
  { 
    id: 5, 
    text: '“Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”', 
    name: '- Eduard Hand',
    image: "/img/section-extraordinary/customer01.jpg",
    place: "Müller-Egerer",
  }
];

interface Luxtrip {
  id: number;
  title: string;
  image: string;
}

export const dataLuxtrips: Luxtrip[] = [
  { 
    id: 1, 
    title: 'Villas/Chalets', 
    image: "/img/why-lux-trips/img/book-viilas.webp",
  },
  { 
    id: 2, 
    title: 'Supercars', 
    image: "/img/why-lux-trips/img/book-supercars.webp",
  },
  { 
    id: 3,    
    title: 'Hotels', 
    image: "/img/why-lux-trips/img/book-hotels.webp",
  },
  { 
    id: 4, 
    title: 'Yachts/Boats', 
    image: "/img/why-lux-trips/img/book-yachts.webp",
  },
  { 
    id: 5, 
    title: 'Private Helicopter', 
    image: "/img/why-lux-trips/img/book-helicopter.webp",
  },
  { 
    id: 6, 
    title: 'Private Jet', 
    image: "/img/why-lux-trips/img/book-jet.webp",
  }
];

interface Info {
  title: string;
  text: string;
}

interface Book {
  id: number;
  title: string;
  text: string;
  image: string;
  info: Info;
}

export const dataBook: Book[] = [
  { 
    id: 1, 
    title: 'Supercars',
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 
    
    image: "/img/book/supercar.webp",

    info: {
      title: "Lux Trips gives you access to the most prestigious cars on the market.",
      text: "All the latest top-of-the-range models described by elegance, class and technology are among our wide range of rentals and hiring.Do you wish to feel like a Formula 1 driver and test the famous circuit in Monza? Or do you prefer to sit back and relax while our driver brings you across the most picturesque Amalfi coast? All you have to do is choose the destination and we will arrange the rest!",
    }
  },
  { 
    id: 2, 
    title: 'Hotels', 
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 
    
    image: "/img/book/hotels.webp",

    info: {
      title: "Do you need to organize an event, a leisure getaway or a business trip?",
      text: "We will do it for you! Our exclusive offers in globally renowned hotels and local boutique accommodations will bring your stay to another level. Absolute discretion and highest level comfort and professionalism paired with attention to your every wish are our primary guidelines in selecting the hotel for your next trip.",
    }
  },
  { 
    id: 3, 
    title: 'Villas/Chalets', 
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 
   
    image: "/img/book/villas.webp",

    info: {
      title: "Our handpicked prestigious villas and chalets meet the highest standard of quality and design to satisfy your every wish.",
      text: "Modern villas that offer breathtaking panoramic sea views with endless deep blue waves or traditionally charming chalets with a warm jacuzzi outside, set on top of a snowy mountain, looking out to a lush countryside, are ready to welcome you at the destination of your choice. No location is outside of our reach! Whether you prefer the finest luxury destinations like St. Moritz, Zermatt, Ibiza and Mykonos or wish to explore exotic spots of South Africa, Thailand or Australia, Lux Trips will tailor your accommodation with personalized services to ensure an exceptional stay for each member of your group.",
    }
  },
  { 
    id: 4, 
    title: 'Yachts/Boats', 
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 
    
    image: "/img/book/yachts.webp",

    info: {
      title: "Our experts will select the best option for your sea adventure",
      text: "Lux Trips offers unparalleled yacht and boat charter experiences thanks to our network of the leading players in yachting activities. Our experts will select the best option for your sea adventure to create your dream getaway.For instance, a private luxury yacht to visit the Balearic islands, an explorer for a cruise of the endless Mediterranean sea, or a sailing boat for a romantic weekend or family holiday on Lago di Garda. Onboard entertainment (e.g. jetski, karaoke, etc.) and highly qualified personnel are at your service.",
    }
  },
  { 
    id: 5, 
    title: 'Private Helicopter', 
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 
   
    image: "/img/book/helicopter.webp",

    info: {
      title: "When planes cannot land close enough to your final destination",
      text: "Opting for a helicopter is the best solution not to waste precious minutes on the road when planes cannot land close enough to your final destination.Lux Trip private aviation services offer helicopter rent and charter for VIP transfers, remote and exclusive location trips, public and private events, islands and yachts landing, professional visits, remote ski resorts and extreme sport activities, and sightseeing.",
    }
  },
  { 
    id: 6, 
    title: 'Private Jet', 
    text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.', 

    image: "/img/book/jet.webp",

    info: {
      title: "Highest level of safety and comfort on the flight",
      text: "Our fully personalized private charters and jets will anticipate your every wish. To fit your unique travel needs, we guarantee the highest level of safety and comfort on the flight.Discrete services provided by the dedicated flight crew, bespoke interior design and most advanced fleet are the signature qualities of the Lux Trip flying experience. With the possibility of urgent takeoffs and multi-stop journeys no destination will stay out of your reach!",
    }
  },
];

