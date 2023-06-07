module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8888),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0a35740ef5956402dfce3f7976358555'),
    },
  },
});
