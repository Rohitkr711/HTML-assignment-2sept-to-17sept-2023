function regexFunc(reg, str){
if(reg.test(str))
    return true;
else
return false;
}

const regex1 = /^Myself+_Rohit$/i;
str1="Hello_Rohit";
console.log(regexFunc(regex1, str1));

const regex2= /^Learning+\s@Front-end$/gi;  // '\s' use for whitespace
str2="Learning @Front-end";
console.log(regexFunc(regex2, str2));

const regex3 = /^From+\sJamshedpur,\s+Jharkhand$/;
str3="From Jamshedpur, Jharkhand";
console.log(regexFunc(regex3, str3));
