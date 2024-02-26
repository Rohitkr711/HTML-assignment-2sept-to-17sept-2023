// a)
let student={
    name:"Rohit",
    age:21,
    address:"Jamshedpur"
}
Object.preventExtensions(student);

// b)
const extensibleStatus=Object.isExtensible(student);

// c)
let teacher={
    subject:"Math"
}

// d)
Object.seal(teacher)

// e)
const sealedStatus=Object.isSealed(teacher);

// f)
console.log("Extensible Status is",extensibleStatus);
console.log("Sealed Status is",sealedStatus);

