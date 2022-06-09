const person = {
    name: 'john',
}

person.age = 25

// const push=
// push.innerHTML=result

const items = {
    'featured-items': ['item1', 'item2']
}

console.log(items["featured-items"])

let appState = 'loading'
let cereal = 'smatoogey'

const app = {
    [appState]: true
}

app[cereal] = "baloopr"
console.log(app)

const state = {
    loading: true,
    thename: '',
    job: ''
}


function setthestate(key, value) {
    state[key] = value
}


setthestate('loading', false)
setthestate('thename', 'frakfurter')
setthestate('job', 'frakfurter')

console.log(state)


