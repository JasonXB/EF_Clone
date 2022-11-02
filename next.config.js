/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

//please delete this after integrating the images gotten from GET API endpoint with the Calendar Page-----
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
};
//--------------------------------------------------------------------------------------------------------
