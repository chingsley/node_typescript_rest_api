import { Request, Response } from "express";
import { createAccessToken, createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import config from 'config';
import { sign } from '../utils/jwt.utils';
import { UserDocument } from "../model/user.model";
import { LeanDocument } from "mongoose";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  const user: any = await validatePassword(req.body);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }


  // Create a session
  const session = await createSession(user._id, req.get("user=agent") || "");

  // create access token
  const accessToken = createAccessToken({ user, session });

  // create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"), // 1 year
  });

  // send refresh & access token back
  res.send({ accessToken, refreshToken })
}