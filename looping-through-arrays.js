var pets = ['cat', 'dog', 'rat'];
pets = pets.map((cur, i) => {
    return cur + 's';
});

console.log(pets);