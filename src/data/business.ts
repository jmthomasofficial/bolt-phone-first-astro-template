export const business = {
  name: '{{BUSINESS_NAME}}',
  phone: '{{BUSINESS_PHONE}}',
  phoneE164: 'tel:+1{{BUSINESS_PHONE_E164}}',
  address: {
    street: '{{STREET_ADDRESS}}',
    city: '{{CITY}}',
    state: '{{STATE}}',
    zip: '{{ZIP}}',
    full: '{{STREET_ADDRESS}}, {{CITY}}, {{STATE}} {{ZIP}}',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination={{ENCODED_ADDRESS}}',
  },
  category: '{{CATEGORY}}',
  description: '{{BUSINESS_DESCRIPTION}}',
  established: '{{ESTABLISHED_YEAR}}',
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '4:00 PM' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' },
  ],
  services: [
    { name: '{{SERVICE_1_NAME}}', description: '{{SERVICE_1_DESC}}' },
    { name: '{{SERVICE_2_NAME}}', description: '{{SERVICE_2_DESC}}' },
    { name: '{{SERVICE_3_NAME}}', description: '{{SERVICE_3_DESC}}' },
  ],
  reviews: [
    {
      name: 'Sarah M.',
      city: '{{CITY}}',
      rating: 5,
      text: '{{REVIEW_1_TEXT}}',
    },
    {
      name: 'James R.',
      city: '{{CITY}}',
      rating: 5,
      text: '{{REVIEW_2_TEXT}}',
    },
    {
      name: 'Maria L.',
      city: '{{CITY}}',
      rating: 5,
      text: '{{REVIEW_3_TEXT}}',
    },
  ],
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '127',
  },
  stats: [
    { number: '{{STAT_1}}', label: '{{STAT_1_LABEL}}' },
    { number: '{{STAT_2}}', label: '{{STAT_2_LABEL}}' },
    { number: '{{STAT_3}}', label: '{{STAT_3_LABEL}}' },
  ],
  photos: {
    cover: '/photos/01-cover.jpg',
    gallery: [
      '/photos/02-detail.jpg',
      '/photos/03-work.jpg',
      '/photos/04-team.jpg',
      '/photos/05-result.jpg',
    ],
  },
  mapsEmbedUrl: '{{MAPS_EMBED_URL}}',
};
