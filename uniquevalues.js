

const things = [
    {
        name: 'education',
        category: 'profession'
    },
    {
        name: 'web dev',
        category: 'profession'
    },
    {
        name: 'marketing',
        category: 'interest'
    },
    {
        name: 'geopolitics',
        category: 'interest'
    },
    {
        name: 'hiking',
        category: 'hobby'
    },
    {
        name: 'chess',
        category: 'hobby'
    },
    {
        name: 'weightlifting',
        category: 'hobby'
    },
    {
        name: 'reading',
        category: 'hobby'
    }
]

const categories = things.map((item) => item.category)
console.log(new Set(categories))

const categories2 = ["all", ...new Set(things.map((item) => item.category))]
console.log(categories2)

const result = document.querySelector('.result')
result.innerHTML = categories2.map((category) => {
    return `<button>${category}</button>`
}).join('')