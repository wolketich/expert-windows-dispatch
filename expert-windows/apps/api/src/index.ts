import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { logger } from './lib/logger';
import { healthRoutes } from './routes/health';

const app = express();
const PORT = Number.parseInt(process.env.PORT ?? '3000', 10);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

// Routes
app.use('/api/v1', healthRoutes);

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
