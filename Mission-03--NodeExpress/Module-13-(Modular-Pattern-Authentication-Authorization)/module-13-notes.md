

## config steps:
- .env > (config >> index.ts + db.ts) > server.ts
- config(index.ts) = .env info
- db.ts = db info


## routers > controllers > services
- routes define the paths
- controller handles the req, res
- services stores the business logics

## Authentication Vs Authorization
- `Authentication`:
 - Asks, `who` are you.
- `Authorization`:
 - Asks, what are the `roles` you can access

## neon db
- for cloud db

## hashing:
- bcryptjs/bcrypt

## **JSON Web Token (JWT)**

## installation:
- npm i jsonwebtoken
- import jwt from 'jsonwebtoken';
- npm i --save-dev @types/jsonwebtoken

> **JSON Web Token (JWT)** is an open standard used to securely transmit information between a client and a server as a compact JSON object. It is widely used for **authentication and authorization**.

- A JWT has **three parts**:
* **Header** – algorithm and token type
* **Payload** – user data (claims)
* **Signature(secret)** – verifies token integrity

**Example JWT:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiJ9
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Decoded Example:**

**Header**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload**

```json
{
  "userId": 1,
  "role": "admin"
}
```

**Use case:**
After login, the server sends a JWT to the client. The client sends this token with each request to access protected routes.

**Note:** JWT is **encoded, not encrypted**, so do not store sensitive data in the payload.


## Higher Order Function

- A Higher Order Function (HOF) is a function that works with other functions.
- It can do at least one of these:
 - Accept a function as an argument
 - Return a function

## Type declaration & file extension:
- `name.d.ts`

### declaring user interface in Request
- `Example`:
```ts
import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
```


## Deploy project on vercel:
- steps:
1. npm i -g vercel
2. vercel login
3. authenticate the given link
4. create a file named vercel.json
5. search for vercel configuration json for express,ts on internet
6. copy paste the json on the previously created file
7. vercel --prod    (prod means production)
8. Open Inspect link
