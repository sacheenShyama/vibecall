const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 100,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = authLimiter;
