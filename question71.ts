/*  Compare let and const: Create two examples where let allows reassignment but const does not. Try to 
reassign a const-declared variable and catch the error.*/

let age = 25; 
age = 26;
console.log(age);


const name123 = "Amna";
try {
    name123 = "Hayat"
}catch (error){
    console.log(name123);
    
}