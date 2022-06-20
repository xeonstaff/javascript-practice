const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            second.style.color = 'green'
            setTimeout(() => {
                third.style.color = 'blue'
            }, 2000)
        }, 3000)
    }, 1000)

})