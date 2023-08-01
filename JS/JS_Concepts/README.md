# "This" behaves different inside arrow function and function declaration / Anonymous Function

```javascript
let obj ={
    name: "Ashutosh",
    getName: function(){  // Anonymous Function 
      console.log(this) // Here, this points to the scope where this function is present, which is obj.
    },
    getAge : () =>{  // Arrow function
        console.log(this) // Here, this points to global window object.
    },
    getCity: function cityName(){  // function declaration
        console.log(this)  // Here, this points to the scope where this function is present, which is obj.
    }
}
 ``` 

# Reference Overriding

```javascript
 function a(){
    console.log("Hello");
 }

  function a(){
    console.log("Hi");
 }

 a(); // "Hi" will be printed, Since both function names are same & function are stored in heap memory and there reference is at call   Stack. So when another function with same name is encountered the last function reference get overidden.
 ``` 

# Shadowing

#### Legal Shadowing

```javascript
 let a = 10;  
 console.log(a); // 10
 {
    let a = 20;         // let is a block scope
    console.log(a); // 20
 }
 console.log(a); // 10
 ``` 

#### Illegal Shadowing

```javascript
 let a = 10;  
 console.log(a); 
 {
   var a = 20;      
    console.log(a); // Throws error(Identifier 'a' has already been declared), since var is a functional scope.
 }
 ``` 

 # Values returning 
 
 #### As a false value

```javascript
 false
 "" //empty string
 0 // zero
 null
 undefined
 NaN
 ```

 #### As a true value

```javascript
  []  // Empty Array
  {}  // Empty Object
  Any varaible/String(Non-empty)
 ```

# Shallow / Deep Copy

 #### Shallow Copy of Object

```javascript
 // Object here are created using reference, due to which if value inside nested object changes in one object, it gets reflected inside the other one.

let obj = {
  name: "David",
  age: 22
}

1. let obj1 = obj;
2. let obj2 = {...obj};
3. let obj3 = Object.assgin({}, obj);
 ```

 #### Shallow Copy of Array
 
```javascript
let arr = [1,2,3,4,5];

1. let arr1 = arr;
2. let arr2 = [...arr];
3. let arr3 = Array.from(arr);
 ```

  #### Deep Copy of Object/Array
  ```javascript
    let deepCopy = JSON.parse(JSON.stringify(objectName or arrayName));
 ```

 # Object creation using 

 #### Class
  ```javascript
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
    }

    let person1 = new Person("Klauss", 1000);

    person1 ==> {
      "name": "Klauss",
      "age": 1000
    }
 ```

 #### Constructor function

  ```javascript
    function Car(name, colour){
      this.name = name;
      this.colour = colour;
    }

    let bmw = new Car("BMX", "Black");

    bmw ==> {
      "name": "BMX",
      "colour": "Black" 
    }
 ```