const bug = {name: "bug", superEffective: ["dark","grass","psychic"], notVeryEffective: ["fairy","fighting","fire","flying","ghost","poison","steel"], notEffective: [""], resist: ["fighting","grass","ground"], weak: ["fire","flying","rock"], immune: [""], color: "#A8B820"};
const dark = {name: "dark", superEffective: ["ghost","psychic"], notVeryEffective: ["dark","fairy","fighting"], notEffective: [""], resist: ["dark","ghost"], weak:["bug","fighting"], immune:["psychic"], color: "#705848"};
const dragon = {name: "dragon", superEffective: ["dragon"], notVeryEffective: ["steel"], notEffective: ["fairy"], resist: ["fire","electric","grass","water"], weak: ["dragon","fairy","ice"], immune: [""], color: "#7038F8"};
const electric = {name: "electric", superEffective: ["flying","water"], notVeryEffective: ["electric","grass", "dragon"], notEffective: ["ground"], resist: ["electric","flying","steel"], weak: "ground", immune: [""], color: "#F8D030"};
const fairy = {name: "fairy", superEffective: ["dark","dragon","fighting"], notVeryEffective: ["fire","poisonn","steel"], notEffective: [""], resist: ["bug","dark","fighting"], weak: ["poison","steel"], immune: ["dragon"], color: "#EE99AC"};
const fighting = {name: "fighting", superEffective: ["dark","ice","normal","rock","steel"], notVeryEffective: ["bug","fairy","flying","poison","psychic"], notEffective: ["ghost"], resist: ["bug","dark","rock"],  weak: ["fairy","flying","psychic"],  immune:[""], color: "#C03028"};
const fire = {name: "fire", superEffective: ["bug","grass","ice","steel"], notVeryEffective: ["dragon","fire","rock","water"], notEffective: [""], resist: ["bug","fairy","fire","ice","steel"], weak: ["ground","rock","water"], immune: [""], color: "#F08030"};
const flying = {name: "flying", superEffective: ["bug","grass","fighting"], notVeryEffective: ["electric","rock","steel"], notEffective: [""], resist: ["bug","fighting","grass"], weak: ["electric","ice","rock"], immune: ["ground"], color: "#A890F0"};
const ghost = {name: "ghost", superEffective: ["ghost","psychic"], notVeryEffective: ["dark"], notEffective: ["normal"], resist: ["bug","poison"], weak: ["dark","ghost"], immune: ["normali","fighting"], color: "#705898"}
const grass = {name: "grass", superEffective: ["ground","rock","water"], notVeryEffective: ["bug","dragon","fire","grass","flying","poison","steel"], notEffective: [""], resist: ["electric","grass","ground","water"], weak: ["bug","fire","flying","ice","poison"], immune: [""], color: "#78C850"};
const ground = {name: "ground", superEffective: ["electric","fire","poison","rock","steel"], notVeryEffective: ["bug","grass"], notEffective: ["flying"], resist: ["poison","rock"], weak: ["grass","ice","water"], immune: ["electric"], color: "#E0C068"};
const ice = {name: "ice", superEffective: ["dragon","flying","ground","grass"], notVeryEffective: ["fire","ice","steel","water"], notEffective: [""], resist: ["ice"], weak: ["fighting","fire","rock","steel"], immune: [""], color: "#98D8D8"};
const normal = {name: "normal", superEffective: ["ghost"], notVeryEffective: ["rock"], notEffective: [""], resist: [""], weak: ["fighting"], immune:["ghost"], color: "#A8A878"};
const poison = {name: "poison", superEffective: ["fairy","grass"], notVeryEffective: ["ghost","ground","rock","poison"], notEffective: ["steel"], resist: ["bug","grass","fairy","fighting","poison"], weak: ["ground","psychic"], immune:[""], color: "#A040A0"};
const psychic = {name: "psychic", superEffective: ["fighting","poison"], notVeryEffective: ["psychic","steel"], notEffective: ["dark"], resist: ["fighting","psychic"], weak: ["bug","dark","ghost"], immune:[""], color: "#F85888"};
const rock = {name: "rock", superEffective: ["bug","fire","flying","ice"], notVeryEffective: ["fighting","ground","steel"], notEffective: [""], resist: ["fire","flying","normal","poison"], weak: ["fighting","ground","grass","steel","water"], immune:[""], color: "#B8A038"};
const steel = {name: "steel", superEffective: ["fairy","ice","rock"], notVeryEffective: ["electric","fire","steel","water"], notEffective: [""], resist: ["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"], weak: ["fighing","fire","ground"], immune:["poison"], color: "#B8B8D0"};
const water = {name: "water", superEffective: ["fire","ground","rock"], notVeryEffective: ["dragonn","grass","water"], notEffective: [""], resist: ["fire","ice","steel","water"], weak: ["electric","grass"], immune:[""], color: "#6890F0"};

function isSuperEffective(typeA, typeB) {
    return typeA.superEffective.includes(typeB.name) ? true : false;
}

function isNotVeryEffective(typeA, typeB) {
    return typeA.notVeryEffective.includes(typeB.name) ? true : false;
}

function isNotEffective(typeA, typeB) {
    return typeA.notEffective.includes(typeB.name) ? true : false;
}

function isWeak(typeA, typeB) {
    return typeA.weak.includes(typeB.name) ? true : false;
}

function doesResist(typeA, typeB) {
    return typeA.resist.includes(typeB.name) ? true : false;
}

function isImmune(typeA, typeB) {
    return typeA.immune.includes(typeB.name) ? true : false;
}

function listSuperEffective(type) {
    console.log(type.superEffective);
    return type.superEffective;
}

function listNotVeryEffective(type) {
    console.log(type.notVeryEffective);
    return type.notVeryEffective;
}

function listNotEffective(type) {
    console.log(type.notEffective);
    return type.notEffective;
}

function listWeak(type) {
    console.log(type.weak);
    return type.weak;
}

function listResist(type) {
    console.log(type.resist);
    return type.resist;
}

function listImmune(type) {
    console.log(type.immune);
    return type.immune;
}

function makeListString(array) {
    if(array.length === 1) 
    {
        if(array[0] === "") return "none";
        else return array[0];
    }
    let list = array[0];
    for(i = 1; i < array.length; i++)
    {
        list = list + ", " + array[i];
    }
    return list;
}

function listTypeInfo(type) {
    let superEffective = makeListString(type.superEffective);
    let notVeryEffective = makeListString(type.notVeryEffective);
    let notEffective = makeListString(type.notEffective);
    let weak = makeListString(type.weak);
    let resist = makeListString(type.resist);
    let immune = makeListString(type.immune);

    return `${type.name} is weak to; ${weak}, is super effective against; ${superEffective}, Is not very effective against; ${notVeryEffective}, Resists; ${resist}, Is immune to; ${immune}, Does not affect ; ${notEffective}.`
}