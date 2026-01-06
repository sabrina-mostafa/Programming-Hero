# Normalization:
> Normalization is the process of organizing relational database tables to minimize redundancy and dependency by dividing large tables into smaller, well-structured ones.

## Functional Dependency:
> A Functional Dependency is a relationship between two attributes in a database table where one attribute uniquely determines another.
```css
A → B    /* (A determines B) */
```

## Normal Forms:
> Normal Forms are rules or levels of normalization used to design a database that is efficient, consistent, and free from anomalies.
- Types:
  - 0NF
  - 1NF
  - 2NF
  - 3NF

### 1st Normal Form(1NF):
- Rules:
  - Atomic Values(a cell will store only one value)
  - Unique Column Names
  - No positional dependency
  - Columns should contain same type of data
  - Determine Primary key
     - if not found then determine **Composite Primary Key**

### 2nd Normal Form(2NF):
- Rules:
  - Must be on 1NF
  - non-Key Attribute/Column should not be a part of Candidate Key(Keys that are eligible to become the Primary Key)
     - means,  *candidate key -> non-key are `not allowed`*, which is `Partial Dependency`.
     - if this found, then divide the table into multiple tables 

### 3rd Normal Form(3NF):
- Rules:
  - Must be on 2NF
  - Must not contain `Transitive Dependency`
     - Transitive Dependency: x->y, y->z so x->z.
  - trick if determining Transitive Dependency:
     - *Present of functional dependency of non-key attributes* 
     - if this found, then make another table with those functional dependent attributes.

## **Junction Table**

> A **junction table** is a table used in a relational database to **connect two tables in a many-to-many (M:N) relationship**.

### Why a junction table is needed

Relational databases **cannot directly store many-to-many relationships**, so a third table is introduced to link them.


### Professional one-line definition

> *A junction table is an associative table that resolves a many-to-many relationship by storing foreign keys of related tables.*

### Alternative names (important for exams/interviews)

* **Bridge table**
* **Link table**
* **Join table**
* **Associative table**
