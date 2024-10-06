const Services = {
    slug: 'services',
    labels: {
      singular: 'Service',
      plural: 'Services',
    },
    access: {
      read: () => true, // Allow everyone to read
      create: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to create
      update: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to update
      delete: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to delete
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'thumbnail',
        type: 'upload',
        relationTo: 'media', // Linked to media collection
        required: true,
      },
      {
        name: 'description',
        type: 'richText',
        required: true,
      },
      {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'price',
        type: 'number',
        required: true,
        min: 0,
      },
      {
        name: 'categories',
        type: 'relationship',
        relationTo: 'categories', // Linked to categories collection
        hasMany: true,
      },
      {
        name: 'locationsServing',
        label: 'Locations Serving',
        type: 'relationship',
        relationTo: 'locations', // Linked to locations collection
        hasMany: true, // Allows selecting multiple locations
      },
    ],
    admin: {
      useAsTitle: 'title', // Ensures the 'title' field is used as the display name in the admin interface
    },
  };
  
  export default Services;
  