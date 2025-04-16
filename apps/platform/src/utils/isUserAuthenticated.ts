import { PASSWORD_PROTECTION_COOKIE_NAME } from '~/constants';
import { jwtVerify } from 'jose';
import { NextRequest } from 'next/server';
import { ENV } from "~/config/env"
export const isUserAuthenticated = async (
  request: NextRequest,
): Promise<boolean> => {
  const token = request.cookies.get(PASSWORD_PROTECTION_COOKIE_NAME);

  if (!token) {
    return false;
  }

  try {
    const secret = new TextEncoder().encode(ENV.JWT_SECRET);
    await jwtVerify(token.value, secret);

    return true;
  } catch (error) {
    return false;
  }
};
