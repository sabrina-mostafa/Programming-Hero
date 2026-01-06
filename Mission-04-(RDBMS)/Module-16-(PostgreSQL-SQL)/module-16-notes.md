
## ALTER:
* For column level alter
> **ALTER TABLE table_name action**
action = (rename_table/ add/drop_col / rename_col / add/drop_constraints / modify_data_type / setting_default_value);


* For table level alter (unique/primaryKey)
> **ALTER TABLE table_name add constraint random_name action**


## '' vs ""
> **for `column` name -> `" "`**
> **for string `value` of any cell => `' '`**

## LIKE vs ILIKE:
> `LIKE` -> `case sensitive`
> `ILIKE` -> `case insensitive`

## Scaler Function:
> this type of functions will run on every value of a column/attribute and give result each and every time.
- upper, lower, length, concat etc.
## Aggregate Function:
> this type of functions will run on a column/table considering them as a set and give only one result against them.
- sum, max, min, count, avg etc.

## NULL:
> any operation on null gives result as null
* to resolve this issue we have to use `is`

## coalesce Operator:
> coalesce(null, 2, 3) ; => result = 2
* it takes the 1st not-null value as result

## Limit & Offset:
> LIMIT and OFFSET are SQL clauses used mainly for pagination (fetching data in chunks).


### 🔹 LIMIT

* Controls **how many rows** to return.
* Useful when you don’t want the full dataset.

```sql
SELECT * FROM orders
LIMIT 5;
```

➡️ Returns **only 5 rows**


### 🔹 OFFSET

* Skips a specified number of rows **before** returning results.
* Usually used with `LIMIT`.

```sql
SELECT * FROM orders
LIMIT 5 OFFSET 10;
```

➡️ Skips first **10 rows**, then returns **next 5**


### 🔹 Pagination Example

(Page size = 5)

| Page   | Query               |
| ------ | ------------------- |
| Page 1 | `LIMIT 5 OFFSET 0`  |
| Page 2 | `LIMIT 5 OFFSET 5`  |
| Page 3 | `LIMIT 5 OFFSET 10` |


### Summary

* **LIMIT** → how many rows
* **OFFSET** → how many rows to skip
* Commonly used for **pagination**

## Update:
```sql
update table_name
set update_value/conditions
where conditions
```
## Delete:
```sql
delete from table_name
where conditions
```

## TRUNCATE:

**`TRUNCATE`** is a DDL command used to **remove all rows from a table instantly**.

### Syntax

```sql
TRUNCATE TABLE table_name;
```

### Key Points

* Deletes **all records** from a table
* **Faster than DELETE**
* **Cannot use WHERE**
* Resets **auto-increment / SERIAL** values
* Cannot be rolled back in most DBMS
* Table structure remains unchanged

## `WHERE` vs `HAVING`:

### 🔹 `WHERE`

**Filters individual rows before grouping happens**

* Applied **before** `GROUP BY`
* Works on **raw row data**
* ❌ Cannot use aggregate functions (`COUNT`, `SUM`, `AVG`, etc.)

### 🔹 `HAVING`

**Filters grouped results after aggregation**

* Applied **after** `GROUP BY`
* Works on **aggregated data**
* ✅ Can use aggregate functions


## 🔁 SQL Execution Order (Very Important)

```sql
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```

## JOIN:

`syntax:`
```sql
SELECT * FROM table_name(primary)
JOIN table_name(secondary) 
ON condition 
```

1. `Inner Join:` **(common rows priority)**
> only those rows where given condition will meet. **(common ones only)**

2. `Left(outer) Join:` **(left table priority)**
> all rows of left/primary table and only those rows of right/secondary table where condition meets. **(all the empty cells that occurs on the secondary table section will be filled with `NULL`)**

3. `Right(outer) Join:` **(right table priority)**
> all rows of right/secondary table and only those rows of left/primary table where condition meets. **(all the empty cells that occurs on the  primary table section will be filled with `NULL`)**

4. `Full(outer) Join:` **(both tables are priority)**
> all common rows that fulfills the given condition and all rows from primary/left table and all rows from secondary/right table as well.
**(all the empty cells will be filled with `NULL`)** 

5. `Cross Join:` **(foreign key/tables relation not required)**
> **CROSS JOIN = Cartesian product**

```sql
SELECT *
FROM users
CROSS JOIN posts;
```

If:

* users → 3 rows
* posts → 4 rows

👉 Result = **3 × 4 = 12 rows**

🔹 **No ON condition**
🔹 **No common column required**
🔹 Every row pairs with every row

6. `Natural Join:` **(foreign key/tables relation not required)**
> **does Cartesian product then, filter rows with common value of the common table**
```sql
SELECT *
FROM users
NATURAL JOIN posts;
```

🔹 SQL **automatically finds columns with the same name**
🔹 Joins on those columns
🔹 You **do not write ON**, but a relationship **must exist by column name**

Example:

```text
users(id, name)
posts(id, title)
```

👉 NATURAL JOIN will join on `id`


* Only **CROSS JOIN** and **NATURAL JOIN** can work **without explicitly defining a relationship(foreign key)**.


### ON vs USING:
- ON can be used for any common value column name joining
  - `ON e.id = e.user_id`
  - `ON e.id = e.id`
- USING can only be used for common value common name joining
  - `using(e.id)`  **->** *(both column name must be same(id))*

## Sub-Query:
> query inside query

## SQL Functions in PostgreSQL:

* **Functions** are reusable SQL blocks.
* A function can **return a value** or **return nothing**.

**Returns value (`INT`):**

```sql
CREATE FUNCTION emp_count()
RETURNS INT
LANGUAGE SQL
AS $$ SELECT COUNT(*) FROM employees; $$;
```

Called with:

```sql
SELECT emp_count();
```

**Returns nothing (`VOID`):**

```sql
CREATE FUNCTION delete_emp_id(emp_id INT)
RETURNS VOID
LANGUAGE SQL
AS $$ DELETE FROM employees WHERE id = emp_id; $$;
```

Called with:

```sql
SELECT delete_emp_id(5);
```

**Key idea:**
`RETURNS INT` → gives a result
`RETURNS VOID` → performs an action only


## SQL Procedures (PostgreSQL / PL/pgSQL)

**Procedures** are blocks of code that **perform actions** and **do not return a value**. They allow variables, loops, and complex logic.

### **Syntax:**
```sql
CREATE PROCEDURE procedure_name(param1 datatype, param2 datatype)
LANGUAGE plpgsql
AS $$
DECLARE
    -- declare variables here
    v_count INT;
BEGIN
    -- procedural code here
    SELECT COUNT(*) INTO v_count FROM employees;
    RAISE NOTICE 'Total employees: %', v_count;
END;
$$;
```

### Notes

* **`DECLARE`** → for variables
* **`BEGIN ... END`** → procedural logic block
* Use `CALL procedure_name(args);` to execute
* Can perform **INSERT, UPDATE, DELETE, SELECT** inside


## Trigger:
> A Trigger is a database object that automatically executes when a specific event occurs on a table.

`syntax:`
```sql
CREATE TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
ON table_name
FOR EACH ROW
EXECUTE FUNCTION function_name();
```

## Indexing:
> Indexing is a technique to speed up data retrieval in a database. It works like an index in a book — instead of scanning every row, the database quickly finds the location of data.




### Syntax Examples

### 1️⃣ Single-column index

```sql
CREATE INDEX idx_employee_name
ON employees(name);
```

### 2️⃣ Composite (multi-column) index

```sql
CREATE INDEX idx_emp_dept_salary
ON employees(department, salary);
```

### 3️⃣ Unique index

```sql
CREATE UNIQUE INDEX idx_email
ON employees(email);
```

### 4️⃣ Drop index

```sql
DROP INDEX IF EXISTS idx_employee_name;
```

### Notes / Best Practices

* Use indexes on columns frequently used in `WHERE`, `JOIN`, `ORDER BY`, or `GROUP BY`.
* Avoid over-indexing — it slows down writes.
* PostgreSQL automatically creates indexes for **PRIMARY KEY** and **UNIQUE constraints**.


## **One-and-Only-One vs One-to-One Relationship**

### 🔹 1️⃣ One-to-One (1:1) Relationship:

**Definition:**
A **one-to-one** relationship means **at most one** entity instance is related to another.

- It defines the **maximum cardinality** only.

`Example:`

* Person ↔ Passport

```
PERSON ─── PASSPORT
   1          1
```

* This does **NOT guarantee mandatory participation**.

### Possible meanings of 1:1:

| Case        | Meaning                 |
| ----------- | ----------------------- |
| 0..1 ↔ 0..1 | Optional on both sides  |
| 1..1 ↔ 0..1 | Mandatory on one side   |
| 1..1 ↔ 1..1 | Mandatory on both sides |


### 🔹 2️⃣ One-and-Only-One (1..1) Relationship:

**Definition:**
A **one-and-only-one** relationship means:

* **Exactly one**
* **Mandatory**
* **No zero, no many**

- It defines **both minimum and maximum cardinality**.

```
1..1
```

`Example:`

* Employee ↔ EmployeeID

```
EMPLOYEE ─── EMPLOYEE_ID
 1..1          1..1
```


## Cardinality Determination Trick:
- **select a Table(A) first** then always think of the questions that:
  - what is the **minimum connection of the other table(B)** can have with the `single one of the selected table(A)`?
  - what is the **maximum connection of the other table(B)** can have with the `single one of the selected table(A)`?