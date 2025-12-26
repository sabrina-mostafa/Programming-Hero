# ExpressJS-Typescript-PostgreSQL

## File Structure:
- `src`
 - *app.ts*  -> (all work related to app)
 - *server.ts*   -> (to listen server)
 - .env
 - .gitignore
 - `config`
  - *db.ts*  -> (DB)
  - *index.ts*  -> (configuration of .env)
 - `modules`
  - `module-based-folder-name (x)`
   - *x.routes.ts*   -> (url/api hit management)
   - *x.controllers.ts*   -> (req, res handler)
   - *x.services.ts*   -> (database logics/business logics)
 - `middleware`
 - `types`
  - *name.d.ts*

### Declaring interface for user in Request
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

## Commands and SetUp:
1. npm init -y
2. npm install express --save
3. npm i -D typescript
4. npx tsc --init
5. make necessary changes in the tsconfig.json file
 - create *src folder* and *server.ts* file inside it
6. npm i --save-dev @types/express   -> (*for all types of express*)
7. npm i -D tsx   -> (*tsx for running typescript code*)
8. changes on `package.json` to run the project locally
 - "scripts": { "dev": "npx tsx watch ./src/server.ts" }
 - `watch` is for not to run the server again and again for continuous changes
 - npm run dev
9. npm i pg    -> (*for postgreSQL*)
10. create connection on neon db
 - go to neo db website
 - create project
 - click on connect
 - a pop-up will open which will have a connection string
11. import { Pool } from "pg";   -> (for pool creation)
12. for connecting to the DB of neonDB
 - const pool = new Pool( { connectionString: "CopiedConnectionStr" } )
 - await pool.query("sql_queries")   -> (*to create table or write SQL queries*)
13. npm i --save-dev @types/pg
14. npm i dotenv -> (for .env file)
 - create .env file
 - import dotenv from "dotenv";
 - import path from 'path';
 - dotenv.config({ path: path.join(process.cwd(), ".env") });
 - const config = { .env config infos }
15. create .gitignore file
 - include .env, node_modules, dist

### Authorization and Authentication:
1. bcrypt installation: (**for hashing**)
 - npm i bcryptjs
 - import bcrypt from "bcryptjs";
 - .hash(pass, salt_count), .compare(x, y)
2. JWT installation:
 - npm i jsonwebtoken
 - import jwt from 'jsonwebtoken';
 - npm i --save-dev @types/jsonwebtoken
 - jwt.sign({ Payload }, secret, {expiresIn: "desiredTime"})
 - jwt.verify(token, secret)


## Deploy project on vercel:
- steps:
1. npm i -g vercel
2. vercel login
3. authenticate the given link
4. create a file named `vercel.json`
5. search for vercel configuration json for express app & ts on internet
6. copy paste the json on the `vercel.json` file, which will look like:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```
7. vercel --prod   -> (prod means production)
8. Open Inspect link
 - Inspect link can view all
 - Production link is only visible to the owner