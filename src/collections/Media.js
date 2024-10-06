const Media = {
    slug: 'media',
    labels: {
      singular: 'Media',
      plural: 'Media',
    },
    upload: {
      staticDir: 'uploads', // This specifies where to store uploaded files on the server
      mimeTypes: ['image/*'], // Only allow image uploads
    },
    fields: [
      {
        name: 'altText',
        type: 'text',
        required: true,
      },
    ],
  };
  
  export default Media;
  