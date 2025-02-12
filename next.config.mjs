/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'vale-ecommerce-server.onrender.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
      ],
    },
  };

export default nextConfig;
