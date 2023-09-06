var person={
    firstName:"vikash",
    lastName:"dubey",
    fullName:function(){
        return this.firstName +" "+ this.lastName
    }

}

console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"])
console.log(person.fullName())