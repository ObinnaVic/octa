/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["octacdn.net"],
  },
};
