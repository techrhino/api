module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  //url: 'https://api.techrhino.nz',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3cdf2ba38e828e92070b2e7ce61f7232'),
    },
  },
});
