/** @type {import('next').NextConfig} */
const nextConfig = {
  //? farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
