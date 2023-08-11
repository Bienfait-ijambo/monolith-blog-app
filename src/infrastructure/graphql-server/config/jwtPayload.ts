export function jwtPayload(userId: string) {
    const payload = {
      iss: process.env.CLIENT_URL,
      sub: userId, // typically used to identify the user or entity associated with the token. It is set to userId.
      aud: userId, ///represent a specific audience that will consume the token
      exp: Math.floor(Date.now() / 1000) + 60 * 60 + 60 * 60, // Expiration time: current time + 1 hour
      iat: Math.floor(Date.now() / 1000), // Issued at: current time
      // role: 'admin',
      //  permissions: ['read', 'write'],
      //   customField: 'some value',
    };
  
    return payload;
  }
  