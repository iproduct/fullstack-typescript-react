const x = 42
let persons = [
    {
        name: 'Michael Harrison',
        parents: {
            mother: 'Melinda Harrison',
            father: 'Simon Harrison',
        }, 
        age: 35
    },
    {
        name: 'Robert Moore',
        parents: {
            mother: 'Sheila Moore',
            father: 'John Moore',
        }, 
        age: x
    }];

for (let { name, parents: { father: f }, age } of persons) {
    console.log(`Name: ${name}, Father: ${f}, age: ${age}`);
}
