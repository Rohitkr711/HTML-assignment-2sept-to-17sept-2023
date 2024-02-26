function outerFunction(x,y){
    let p=11;
    return function innerFunction(z){
        console.log(x,y,z,p);
    }
}

const a=outerFunction(7,8);
a(12);

// NOTE: Here the innerFunction maintain to access the variable and parameters of outterFunction even after the outterFunction is't present in the memory because of closures.