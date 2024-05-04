import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

class JWTService {
  public static async generateTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      email: user?.email,
    };

    const token = sign(payload, JWT_SECRET!);

    return token;
  }
}

export default JWTService;
