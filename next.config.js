/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // doesn't work
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
              port: '',
              pathname: '/**',
            },

            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
              pathname: '/**',
            },
          ],
      
    }
}

module.exports = nextConfig
