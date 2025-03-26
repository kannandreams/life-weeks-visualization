import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Timeline4.me', // Optional: Sets a default title format
    default: 'Timeline4.me',
    },
    description: 'See the weeks you’ve lived and the ones still ahead!',
    openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.timeline4.me/',
    title: 'Timeline4.me',
    description: 'See the weeks you’ve lived and the ones still ahead!',
    images: [
      {
      url: '/thumbnail.jpg', // Use a relative path for the local image
      width: 1200, // Recommended width
      height: 630, // Recommended height for LinkedIn, Facebook
      alt: 'Timeline4.me Visualization',
      },
    ],
    siteName: 'Timeline4.me', // Optional
    },
    twitter: {
    card: 'summary_large_image',
    // handle: '@yourTwitterHandle', // Optional
    // site: '@yourTwitterHandle', // Optional
  },
};