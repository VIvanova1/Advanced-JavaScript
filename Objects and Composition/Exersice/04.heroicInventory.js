function heroicInventory(input) {
    const res = [];
    for (const line of input) {
        const heroes = {};
        const [name, level, tokens] = line.split(' / ');

        heroes.name = name;
        heroes.level = Number(level);
        heroes.items = tokens ? tokens.split(', ') : [];
        res.push(heroes)
    }
    console.log(JSON.stringify(res));
}
heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);
//result [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
//       {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
//       {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}];