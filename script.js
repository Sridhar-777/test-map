let num1 =[1,1,2,3,5]
let num2=num1.map(x => x+ 5)
console.log(num2)


let numbers = [1, 3, 4,  7,  9, 10];
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);




let pets1=["dog","cat","lion","tiger"]
let pets2=pets1.filter(x=> x.startsWith('tiger'))
console.log(pets2)


let numbers1=[1,2,3,4,5,6,7,8,9,100]
let numbers2=numbers1.filter(x => x>4)
console.log(numbers2)

const method = ["planes", "trains", "automobiles"];

const newmethod = method.map(word => word.slice(0, 1));

console.log(newmethod);


let pet1=["dog","cat","lion","tiger","elephant"]
let pet2=pet1.filter(x=> x.length>5)
console.log(pet2)


let a=["planes","trains","automobiles"]
let b=a.map(x=>x.slice(0,-1))
console.log(b)














