const cart = [
    {
        title: 'hello there',
        price: 15,
        amount: 14,

    },
    {
        title: 'goodby there',
        price: 13,
        amount: 12,
    },
    {
        title: 'how does it go now?',
        price: 17.22322522829,
        amount: 16

    },
    {
        title: 'a season in preedam',
        price: 11.1010101010,
        amount: 10
    }
]

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount
    total.cartTotal += price * amount
    return total
}, {
    totalItems: 0,
    cartTotal: 0,
})

cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItems, cartTotal)

const url = 'https://api.github.com/users/xeonstaff/repos?per_page=100'

const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total, repo) => {
        const { language } = repo

        // if (total[language]) {
        //     total[language] = total[language] + 1
        // }
        // else {
        //     total[language] = 1
        // }

        if (language) {
            total[language] = total[language] + 1
        }
        return total
    }, {})

    console.log(newData)
}

fetchRepos()
