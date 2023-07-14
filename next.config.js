/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VIMP_API_KEY : "m7bG6oFW5l50CKmwIa2kv81a9uPITwY1",
        VIMP_SERVER: "http://dev.actuview.com:80/api"
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "dev.actuview.com",
                port:'',
                pathname: "/api/**"
            }
        ]
    }
}

module.exports = nextConfig
