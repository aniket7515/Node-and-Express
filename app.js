const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','subholder','test.txt')
console.log(filePath);

const base=path.basename(filePath)
console.log(base);

const absolute =path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(absolute);

























// Modules
// const name = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavour');
// require('./7-mind-grenade')



// console.log(data);

// console.log(name);



// sayHi('Aniket')
// sayHi('Devesh')
// sayHi('Harshit')

// sayHi(name.john)
// sayHi(name.peter)
























// const amount =12 

// if(amount <10){
//     console.log('small nmumber ')


// }
// else{
//     console.log('large number')
// }

// console.log('hey it my first node app')