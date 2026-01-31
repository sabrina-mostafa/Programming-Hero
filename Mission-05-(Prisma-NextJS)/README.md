## What is Same-Origin Policy (SOP)?

> **Same-Origin Policy is a browser security rule that says:
> A website can only read data from the same origin.**

### What does “origin” mean?

An **origin** = **protocol + domain + port**

| URL                     | Origin                   |
| ----------------------- | ------------------------ |
| `https://bank.com`      | `https + bank.com + 443` |
| `https://bank.com:3000` | ❌ different              |
| `http://bank.com`       | ❌ different              |
| `https://evil.com`      | ❌ different              |


### What SOP does by default?

Without any CORS headers:

* ❌ JavaScript on `evil.com` **CANNOT read** responses from `bank.com`
* ❌ JavaScript cannot access:

  * API responses
  * Cookies
  * Local storage
  * DOM of another site

✅ This rule **already protects you**

### ❗ Then why do we need CORS at all?

Because SOP is **too strict** for modern apps.

Example:

* Frontend: `http://localhost:3000`
* Backend: `http://localhost:5000`

👉 These are **different origins**

Without CORS:

* Browser blocks your **own frontend** from reading your **own backend**

## CORS = controlled relaxation of SOP

> **CORS is a way for the server to say:
> “Hey browser, it’s OK to break SOP for these origins.”**


### Step-by-step example

### 🔴 Without CORS

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000/api/users
```

Browser says:

> ❌ “Blocked by Same-Origin Policy”

### ✅ With CORS

Backend response includes:

```
Access-Control-Allow-Origin: http://localhost:3000
```

Browser says:

> ✅ “Server allows this origin, response is readable”


## Definition of SOP and CORS:

> Same-Origin Policy is a browser security mechanism that restricts web pages from accessing resources from a different origin. CORS is a controlled way for servers to relax this policy and allow specific cross-origin access.


---


## SOP, CORS, CSRF(Cross-Site Request Forgery) defenses:

> The purpose of SOP and CORS is to prevent unauthorized reading of sensitive cross-origin data. They do not prevent state-changing actions like bank transfers. Such actions are protected using CSRF defenses, while SOP and CORS ensure data confidentiality.

### 🧠 One-line memory rule (golden)

> **SOP & CORS protect privacy**
> **CSRF protection protects actions**

### 🔚 Final thought (important)

Security is **layered**, not single-feature.

No single mechanism solves everything.

| Layer | Purpose                 |
| ----- | ----------------------- |
| SOP   | Browser data isolation  |
| CORS  | Controlled data sharing |
| CSRF  | Action authorization    |
| Auth  | Identity                |
| OTP   | High-risk confirmation  |


---

## Nodemailer:
Nodemailer is the most popular email sending library for Node.js. It makes sending emails straightforward and secure, with zero runtime dependencies to manage.


---


## To create new project of Prisma:
* `follow prisma docs`:
- npm init -y
- npm install typescript tsx @types/node --save-dev
- npx tsc --init
- npm install prisma @types/node @types/pg --save-dev 
- npm install @prisma/client @prisma/adapter-pg pg dotenv
- Update tsconfig.json for ESM compatibility
- Update package.json to enable ESM:
- npx prisma
- npx prisma init --datasource-provider postgresql --output ../generated/prisma
- update .env
- npx prisma migrate dev --name init  -> (**schema pushed into db and sql conversion**)
- npx prisma generate  -> (**generates all kind of types**)
- **whenever we change anything for database, we have to generate and migrate** 
- create src folder
- create lib/prisma.ts under src folder
- create script.ts (or the server.ts file according to the need)
  - on server.ts connect prisma using try catch block
  - connect on try block
  - disconnect and process exit on catch block
- on app.ts do cors setup: origin, credential
- on auth.ts set trustedOrigins
  - emailVerification
     - for email verification we must set `requireEmailVerification: true` on emailAndPassword
  - nodemailer  (**for sending email**)
     - create app password of user on your email
     - update host, user & pass on transporter
- npx tsx script.ts
- npx prisma studio  -> (**to see data/tables on localhost**)


## For backend:
- npm i express
- npm i cors
- to run server+app
  - npx tsx watch server.ts(file name)

## To use better auth (for authentication)
> follow their documentation (installation, authentication etc.) 