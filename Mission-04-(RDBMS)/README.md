## 10. What is SQL Injection?

> **SQL Injection** is a security vulnerability where an attacker inserts **malicious SQL code** into an input field, which then gets executed by the database.

It happens when **user input is directly concatenated into SQL queries without proper validation or sanitization**.

### Simple Example

❌ **Vulnerable query**

```sql
SELECT * FROM users WHERE email = 'input' AND password = 'input';
```

If an attacker enters:

```
' OR '1'='1
```

The query becomes:

```sql
SELECT * FROM users WHERE email = '' OR '1'='1' AND password = '';
```

This condition is **always true**, so the attacker may gain unauthorized access.

---

### Why SQL Injection is Dangerous

* Can **bypass authentication**
* Can **read sensitive data**
* Can **modify or delete data**
* Can even **drop entire tables**

Example:

```sql
DROP TABLE users;
```

---

### How to Prevent SQL Injection

✔ Use **Parameterized Queries / Prepared Statements**
✔ Never concatenate user input into SQL strings
✔ Validate and sanitize inputs
✔ Use ORM or query builders
✔ Apply least-privilege database access

✅ **Safe example (PostgreSQL with pg):**

```ts
await pool.query(
  "SELECT * FROM users WHERE email = $1 AND password = $2",
  [email, password]
);
```

### One-Line Viva Answer

> SQL Injection is an attack where malicious SQL code is injected through user input to manipulate or gain unauthorized access to a database, and it is prevented using parameterized queries.