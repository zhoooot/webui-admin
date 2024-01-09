/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    VIO_URL: process.env.VIO_URL,
  }
}

module.exports = nextConfig
