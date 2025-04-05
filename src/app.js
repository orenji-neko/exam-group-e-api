import express from 'express';
import dotenv from 'dotenv';
import router from './routes/exam.js';
dotenv.config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

/**
 * Middleware
 */
app.use(express.json());

/**
 * Routes
 */
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
