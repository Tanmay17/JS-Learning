let hero = new Set(['Thor','Flash','Iron Man', 'Thor'])
hero.add('Hulk')
hero.add('Hulk')
for (const m of hero) {
    console.log(m);
}
console.log(hero.has('Captain America'))
