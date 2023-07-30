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