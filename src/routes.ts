import { Express, Request, Response, NextFunction } from "express";
import { createUserSessionHandler } from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from './middleware/validateRequest'
import { createUserSchema, createUserSessionSchema } from './schema/user.schema';

export default function (app: Express) {
  // health check
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  // Register new user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post('/api/sessions', validateRequest(createUserSessionSchema), createUserSessionHandler)




  // GET the user's sessions
  // GET /api/sessions

  // logout
  // DELETE /api/sessions

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      if (typeof error === 'object') {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: error });
      }
    } else {
      next();
    }
  });

  app.use(function (req: Request, res: Response) {
    res.status(404).json({ error: 'route not found' });
  });
}