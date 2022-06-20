// Rest Operator 
// -gathers/collects items
// -destructioning, functions
// -placement important, careful with the same namerest when declare functino, spread when invoke function

//arrays
const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, second, ...restOfTheFruit] = fruits;
console.log(first, restOfTheFruit)
const specificFruit = restOfTheFruit.find((fruit) => fruit === 'lemon')
console.log(specificFruit)

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { name, job, ...rest } = person;
console.log(name, job, rest)


//functions
const getAverage = (name, ...scores) => {
    console.log(name)
    console.log(scores)
    const average = scores.reduce((total, item)=>{return total+=item},0)/scores.length
    console.log(average)
}   

getAverage(person.name, 89, 92, 12, 119, 62, 41)