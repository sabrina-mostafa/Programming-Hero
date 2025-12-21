

## Parser:
- middleware for json data
 - app.use(express.json());
- middleware for form data
 - app.use(express.urlencoded());

## ON DELETE CASCADE
> It is a database constraint that *automatically deletes related rows in child tables when the referenced row in the parent table is deleted*.

## What is SQL Injection?
> An attack where malicious SQL code is injected into a query via user input.

## PUT vs PATCH (HTTP Methods for Updates)
**PUT** = Replace entire resource (send all fields)  
**PATCH** = Update partial resource (send only changed fields)

**Example:**
- **PUT** `/users/1` → Send `{name, email, age}` → Old data completely replaced
- **PATCH** `/users/1` → Send `{age: 31}` → Only age updates, rest stays same

**Simple rule:** Use **PATCH** for updates, **PUT** only when replacing whole thing.