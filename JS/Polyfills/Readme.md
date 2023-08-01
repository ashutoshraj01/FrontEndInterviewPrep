# Map - Array method

```javascript
Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i=0; i<this.length;i++){
        newArr.push(cb(this[i], i, this))
    }
     return newArr;
  }
 ``` 


 # Filter - Array Method

```javascript
 Array.prototype.myFilter = function(cb, condtion){
    let newArr = [];
    for(let i=0;i<this.length; i++){
        if(cb.call(this, this[i],i,this)){
            newArr.push(this[i])
        }
    }
    return newArr;
}
 ```

 # Reduce - Array Method

```javascript
 Array.prototype.myReduce = function(cb, intial){
    let acc = intial;
    for(let i=0;i<this.length;i++){
        if(acc !== undefined){
            acc = cb.call(undefined, acc, this[i], i, this);
        }else{
            acc = this[i];
        }
    }
    return acc;
}
 ```

 # Bind - Function Method

```javascript
 Function.prototype.myBind = function(...args){
    let obj =this;
    let params = args.slice(1);
    return function () {
       obj.apply(args[0], params); 
    }
}
 ```

 # Call - Function Method

```javascript
 Function.prototype.customCall = function(obj, ...args) {
    obj.fnRef = this;
    obj.fnRef(...args);
}
 ```

  # Apply - Function Method  

```javascript
 Function.prototype.customApply = function(obj, ...args) {   // Same as Call, it takes array as second arguments.
    obj.fnRef = this;
    obj.fnRef(...args);
}
 ```

 # Flatten a nested array

 ```javascript
let array = [1,2,3, [4,5], 6, 7,[8, [9,10]]];

function flat(arr, flattenedArr=[]){
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            flat(item, flattenedArr);
        }else{
            flattenedArr.push(item)
        }
    })
    return flattenedArr;
}
 ```