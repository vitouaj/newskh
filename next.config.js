/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/admin",
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/admin",
//         destination: "http://localhost:8080/api/v1/admin",
//         permanent: true,
//       },
//     ];
//   },
// };
