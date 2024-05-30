//1
let data = ['Khanya', 4, 6, 9, 11,'Pupuma']
//2
data.push(18)
console.log(data);
//3
let data2 = data.filter(value => typeof value == 'number')
console.log(data2);
//4
console.log(data.find(value => value == 9));
//5
console.log(data.findIndex(value => value == 9));
//6
let sum = data2.reduce((a,b) => a + b)
console.log(sum);

//7 Concate &  ...(Spread operator)
//8
let splitter = data.splice(1,3)
console.log(splitter)
