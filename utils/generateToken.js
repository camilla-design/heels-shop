import jwt from "jsonwebtoken";

const NEXT_PUBLIC_ACCESS_TOKEN_SECRET = "$kz)Wgg.sc:4}{LE"
 const NEXT_PUBLIC_REFRESH_TOKEN_SECRET = "H(]K'zm&+Z&c]K6M27A4"

export const createAccessToken = (payload) => {
  return jwt.sign(payload, NEXT_PUBLIC_ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, NEXT_PUBLIC_REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
