// Filter -- returns a new array, can maniulate the size of the new array (unlike map),
// returns based on condition
//Find - returns single instance (or object), returns first match, if no match - undefined

const desired_industries = [
    { name: 'education', desirelevel: 9, position: 'web developer' },
    { name: 'charity', desirelevel: 10, position: 'web developer' },
    { name: 'finance', desirelevel: 5, position: 'web developer' },
    { name: 'real estate', desirelevel: 7, position: 'web developer' },
    { name: 'cool product', desirelevel: 8, position: 'web developer' },
    { name: 'automotive', desirelevel: 5, position: 'web developer' },
];

const plants = ['grass', 'tree', 'tall grass', 'super tall tree']

//filter
const bestIndustries = desired_industries.filter((industry) => {
    // if (industry.desirelevel >= 8) {
    //     return industry
    // }
    return industry.desirelevel > 8
})

console.log(bestIndustries)

//one-liner
const bestjob = desired_industries.filter((person) => person.desirelevel == 10)
console.log(bestjob)

//no match? -- filter
const betterthanthebest = desired_industries.filter((industry) => industry.desirelevel == 11)
console.log(betterthanthebest) // empty array

//no match ? -- find
const betterthanthebest2 = desired_industries.find((industry) => industry.desirelevel == 11)
console.log(betterthanthebest2) // undefined

//find, natural find
const findthefive = desired_industries.find((bop) => bop.desirelevel == 5)
console.log(findthefive) //finds FIRST match
const findthefirst = desired_industries.find((bop) => bop.desirelevel > 5)
console.log(findthefirst) //finds FIRST match

const findthegrass = plants.find((bop) => bop == 'grass')
console.log(findthegrass)