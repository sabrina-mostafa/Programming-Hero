import { User } from "better-auth/types";
import { UserRoles } from "../../constants/userRoles";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: UserRoles;
            };
        }
    }
}