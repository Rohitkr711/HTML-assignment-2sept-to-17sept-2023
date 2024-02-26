function regexFunc(reg, str) {
  if (str.match(reg)) return str.match(reg);
  else return "No match found";
}

// For numbers
const regex1 = /[0-9\.]+[0-9]ft/g;
str1 = "My actual height is 5.8ft and my friends height is 5.10ft .";
console.log(regexFunc(regex1, str1));

// for lowercase
const regex2 = /[a-z]+tech/g;
str2 =
  "Pw is a india's well known edtech. PW provides various courses on modernTechnology";
console.log(regexFunc(regex2, str2));

// for Uppercase
const regex3 = /[A-Z]+TECH/g;
str3 =
  "Pw is a india's well known edtech. PW provides various courses on MODERNTECHNOLOGY";
console.log(regexFunc(regex3, str3));

const regex4 = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|"']/g;
str4 = "info@example.com"
console.log(regexFunc(regex4, str4));
