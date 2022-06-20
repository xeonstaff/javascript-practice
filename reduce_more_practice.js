const siblings = [
    { id: '1', name: 'Rachel', age: 41 },
    { id: '2', name: 'Kristina', age: 33 },
    { id: '3', name: 'Jesse', age: 30 },
    { id: '4', name: 'Caleb', age: 26 },
]

let result

//count
result = siblings.reduce((acc, person) => acc + 1, 0)
console.log(result)

//sum ages
result = siblings.reduce((acc, person) => acc + person.age, 0);
console.log(result)

//array of names(map)
result = siblings.reduce((acc, person) => [...acc, person.name], [])
console.log(result)

//map version
result = siblings.map((person)=> person.name)
console.log(result)

//convert to id=> person lookup (dict)
result = siblings.reduce((acc, person) => {
    return {...acc, [person.id]:[person]}
}, {})
console.log(result['3'])