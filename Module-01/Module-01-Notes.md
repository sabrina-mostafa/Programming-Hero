

## Time Count:
1. Way-1:
 - performance.now()
2. Way-2:
 - console.time("task");
 - console.timeEnd("task");

## Set:
1. declare: new Set()
2. Unique elements
3. Important Points:
 - set.map() **NOT Allowed**
 - set.forEach() **Allowed**
 - forEach **Returns Nothing/Undefined**
 - that's why we usually use Array, we generally convert Set into Array using:
    - Array.from(set_Name)
4. set Methods:
 - set.has(), set.delete etc.
    - returns true/false


## For Unique Elements Set VS Array
- Set Data Structure wins in Time complexity