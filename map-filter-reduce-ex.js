const numbers = [1,2,3,4,5];

// Map + ternary operator
const answer1 = numbers.map(val => val % 2 === 0 ? val * 2 : val);
console.log(answer1);


let data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }

]
/// filter, get the coutnry name (map), 

const answer2 = data.filter(val => val.population > 500000000).map(val=>val.country)
console.log(answer2);

/// filter (to remove China), map  (get the population) , reduce (sum the population)

const answer3 = data.filter(val=> val.country !== "China").map(val=>val.population).reduce((acc,val)=>acc+val);
console.log(answer3);

const data2 = [
  {
    name:'Butters',
    age: 3,
    type: 'dog'
  },{
    name:'Lizzy',
    age: 6,
    type: 'dog'
  },{
    name:'Red',
    age: 1,
type: 'cat'
  },{
    name:'Joey',
    age: 3,
    type: 'dog'
  }
  ]

  
  const answer4 = data2.filter(val=> val.type === 'dog').map(val=> val.age*7).reduce((acc,val)=> acc+val)
  console.log(answer4);
