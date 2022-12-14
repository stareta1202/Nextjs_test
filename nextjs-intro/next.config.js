/** @type {import('next').NextConfig} */

const movie_key = "f1ec9d96adc79f49392ad84cd93231cc"
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      { 
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      { 
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${movie_key}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${movie_key}`
      }
    ]
  }

  
}

module.exports = nextConfig
