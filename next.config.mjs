/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net', // Replace with the domain you want to allow
          },
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc', // Replace with the domain you want to allow
          }]
        }
};

export default nextConfig;
