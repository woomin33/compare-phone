/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "picsum.photos",
      port: "",
      pathname: "/**"
    }
  ]
};

module.exports = nextConfig;
