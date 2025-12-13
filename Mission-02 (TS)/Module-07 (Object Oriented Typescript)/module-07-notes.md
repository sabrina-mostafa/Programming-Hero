# Module-07

## Class and Object:

- Each object is an Instance of an Class
- **We can use class as type**

## Parameter Properties:

- Parameter properties are a shortcut in TypeScript that lets you declare and initialize class properties directly inside the constructor parameters, instead of writing them separately.
- just use **public keyword before every parameter**

## Inheritance:

- **extends**
- we can user/access the property/methods in Child Class from Parent Class
- To _inherit_ properties and methods _from Parent Class to Child Class_
- if we write constructor in Child Class then:
- we must write **super(param1, param2, ....)**

## Polymorphism:

- **same Method_Name** but _behaves different_ in different class(obviously the classes will be Parent and child classes)
- same Method_Name Methods must follow the same structure

## Abstraction:

- an idea is shared but not the whole implementation.
- We will get an idea about any process 1st then we will do the implementation later
- _we can not create instance(object) from an Abstract Class._
- Way-01
- 1.  using **interface** >> (implements) class
- 2.  using **abstract class** >> child class >> **we must use abstract keyword before every method/property**

## Encapsulation:

- When we encapsulate(using access modifier) any property/method.
- which means when we try to limit any property/method's access within a certain area/class

## In and Type Guard/Type Narrowing:

- Type Guard
- typeof
- In Guard
- in keyword

## instanceof Guard:

- functional guard

## Access Modifier:

> modify some property/method's access

- **read only**
- if we don't want that any property or method can be changed 2nd time or further.
- **private**
- can be accessed within that class only(not even child class can access)
- **protected**
- can be accessed with that class and that class's all child class.

## Getter and Setter:

> we can access them as like (normal) class property **(not function)**.
- we have to use **get** and **set keyword** before the methods.

## Static

- same/static memory allocation of that property/method.
- no matter how many instance(objects) are created the static property/methods will refer to the same memory location
- **this.**property/method will not work for static
- we have to write as: **ClassName.**property/method
