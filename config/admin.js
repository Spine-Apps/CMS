module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae010711eddab8a08a884e44c294a4b2'),
  },
});
