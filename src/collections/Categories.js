const Categories = {
    slug: 'categories',
    labels: {
      singular: 'Category',
      plural: 'Categories',
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
      {
        name: 'description',
        type: 'text',
      },
    ],
    admin: {
      useAsTitle: 'name', // This ensures the 'name' field is used for display instead of ID
    },
  };
  
  export default Categories;
  