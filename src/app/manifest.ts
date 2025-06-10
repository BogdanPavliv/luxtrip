import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luxtrip Application',
    short_name: 'Luxtrip App',
    description:
      'Luxtrip is a travel agency that offers a wide range of travel services, including flight bookings, hotel reservations, and vacation packages. Our mission is to provide our customers with the best travel experiences at competitive prices',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
    ],
  }
}
