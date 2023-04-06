const [first, ...restOfItems] = [10, 20, 30, 40];

const newArray = [...restOfItems];


const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

const newObject = {
  ...person,
};


console.log(restOfItems);

console.log(newArray);

console.log(person);

console.log(newObject);