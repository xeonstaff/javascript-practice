const reasons_to_hire_me = [
    {
        skill: 'coding',
        specifics: 'js, python, react',
        incredilevel: 3
    },
    {
        skill: 'teaching',
        specifics: 'lps, curriculum, classroom',
        incredilevel: 7
    },
    {
        skill: 'conversation',
        specifics: 'new friends, client development',
        incredilevel: 10
    },
];

// MAP
// returns a new array!
// doesn't change size of original array!
// uses values from original array to make new one

const levels = reasons_to_hire_me.map((reason) => {
    return reason.incredilevel * 2
})

//oneliner
const levels2 = reasons_to_hire_me.map((reason) => reason.incredilevel * 3)
console.log(levels2)

//abstracting logic to another function
const getLevels = (reason) => reason.incredilevel * 3
const levels3 = reasons_to_hire_me.map(getLevels)
console.log(levels3)

//return an object

const newReasons = reasons_to_hire_me.map((reason) => {
    return {
        attribute: reason.skill.toUpperCase(),
        futureskill: reason.incredilevel * 5
    }
})

console.log(newReasons)

const raisins = reasons_to_hire_me.map((reason) => `<h3>${reason.skill}</h3>`)

const result = document.querySelector('#result')
result.innerHTML = raisins.join('');
