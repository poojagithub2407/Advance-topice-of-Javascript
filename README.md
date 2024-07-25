## Array Methods

### `slice()`

**Definition:** Creates a new array with a portion of the original array, without modifying the original array. end is not included

**Syntax:**

```javascript
array.slice(begin[, end])
```

### `splice()`

**Definition:** The `splice()` method changes the contents of an array by removing, replacing, or adding elements in place. It modifies the original array and returns the removed elements as a new array.

**Syntax:**

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

### forEach()

**Defintion:** Executes a provided function once for each array element. It performs an action for every element and does not return a new array.

**Syntax:**

```javascript
array.forEach(callback(element[, index[, array]])[, thisArg])
```

### Map()

**Definition:** Creates a new array with a provided function on every element in the original array. It does not modify the original array.

**Syntax:**

```javascript
array.map(callback(currentValue[, index[, array]])[, thisArg])
```

### reducer()

**Definition:** The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**syntax**

```javascript
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

### filter()

**Defitition:** The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

**Syntax**

```javascript
array.filter(callback(element[, index[, array]])[, thisArg])
```

### find()

**Defintion:** The find() method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined. Unlike filter(), which returns an array, find() returns a single element.

**Syntax:**

```javascript
array.find(callback(element[, index[, array]])[, thisArg])

```


### some()

**Defintion:** The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes the test, and false otherwise. The method does not modify the original array.

**Syntax:**

```javascript
array.some(callback(element[, index[, array]])[, thisArg])
```

### every()


**Defintion:**The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, and false otherwise. The method does not modify the original array.

**Syntax:**

```javascript
array.every(callback(element[, index[, array]])[, thisArg])

```
