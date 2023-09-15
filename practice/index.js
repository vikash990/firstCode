/* var x=[2,3,4,4,57,-1]
//console.log(x.length);
var a1=[1,2,3,45,66,6];
var a2=[33,44,55,6]

//console.log(a1.concat(a2))

var arr=[1,2,3,4,5,6,7,8]

var newArr= arr.map(function(ele){
    return ele*3;
})

var newArr2=arr.filter(function(ele){
    return ele%2==0;
})

//console.log(newArr2)

var sliceArr=[2,3,3,44,5,56,6,6]

var newSlice=sliceArr.slice(0,3);



var spliceArr=[2,4,5,6,7,8]
spliceArr.splice(2,0,0,1);
console.log(spliceArr) */

var data='{"name":"vikash",  "lastName":"dubey","rollNumber":"67"}'
console.log(data);
console.log(JSON.parse(data))
console.log(JSON.stringify(data))

var localToken= localStorage.setItem("name","vikash");
var sessionToken=sessionStorage.setItem("newName","Dubey");



//console.log(newSlice)