import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";

export default function(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.post('/api/users',
  // validateRequest(createUserSchema),
  createUserHandler);

  // Register new user
  // POST /api/user

  // Login
  // POST /api/sessions


  // GET the user's sessions
  // GET /api/sessions

  // logout
  // DELETE /api/sessions
}