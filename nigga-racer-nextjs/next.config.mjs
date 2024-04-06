/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL, 'localhost'],
    }
};

export default nextConfig;
