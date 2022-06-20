// Reduce
// reduces to a single value - number, array, object, etc.
// 1st parameter ('acc' (or any name)) - total of all calculations
// 2nd parameter ('curr' (or any name)) - current interation/value

const toLearn = [
    { name: 'php', priority: 3, current_knowledge: 0 },
    { name: 'api design', priority: 4, current_knowledge: 2 },
    { name: 'typescript', priority: 3, current_knowledge: 2 },
    { name: 'Kubernetes/Docker', priority: 3, current_knowledge: 0 },
    { name: 'penetration testing', priority: 5, current_knowledge: 1 },
]

const totalKnowledge = toLearn.reduce((total, skill) => {
    total += skill.current_knowledge
    return total
}, 0)

console.log(totalKnowledge)