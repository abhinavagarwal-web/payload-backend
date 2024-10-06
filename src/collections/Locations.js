const Locations = {
    slug: 'locations',
    labels: {
      singular: 'Location',
      plural: 'Locations',
    },
    access: {
      read: () => true, // Allow everyone to read
      create: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to create
      update: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to update
      delete: ({ req }) => req.user && req.user.role === 'admin', // Only allow admins to delete
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
    ],
    admin: {
      useAsTitle: 'name', // Use the location's name as the title in the admin panel
    },
  };
  
  export default Locations;
  