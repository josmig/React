import { Heroes } from "./data/Heroes";


//La funciones de flecha pueden obviar el valor return 
console.log(Heroes);

const getHeroById = (id) => Heroes.find( h => h .id === id ? true : false);

console.log(getHeroById(2));

