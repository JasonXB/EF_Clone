import { nextAuthConfig } from './auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, nextAuthConfig);
  // If the user is offline, do not perform any backend actions
  if (!session) {
    return res
      .status(401)
      .json({ message: 'You must be logged in for this API route to proceed' });
  }
  // If the user is online, perform backend actions
  // Ex. Fetch and return private data to the front end, send emails, make changes to database...etc
  return res.json({
    message: 'User allowed to access locked privileges',
  });
}
