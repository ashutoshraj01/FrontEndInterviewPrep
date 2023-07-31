# This behaves different inside arrow function and function declaration / Anonymous Function

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