/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "wallpapercave.com",
        },
        {
          protocol: "https",
          hostname: "carfans.fr",
        },
        {
          protocol: "https",
          hostname: "img.goodfon.com",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
      ],
    }, 
  };
  
  export default nextConfig;
  