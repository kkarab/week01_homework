// Variables
var hero = {name :'kostas', heroic : true, inventory : [], health : 10, weapon : {type: 'sword', damage: 100} }
var hero1 = {name :'dimos', heroic : true, inventory : [{type: 'sword2', damage: 100},{type: 'axe', damage: 120}], health : 10, weapon : {type: 'sword1', damage: 10} }

// Game logic
// rest, pickUpItem, dealDamage, equipWeapon, doBattle
function rest(creature) {
  creature.health = 10 ;
  return creature
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return creature
}

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender
}


function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index]
  creature.inventory.splice(index, 1);
  return creature
}

function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic == false) {
    return null
  }
  while (heroicCreature.health > 0 && creature.health > 0) {
    creature = dealDamage(heroicCreature, creature);
    if (creature.health > 0) {
      heroicCreature = dealDamage(creature, heroicCreature)
    }
  }
  if (heroicCreature.health > 0) {
    return heroicCreature
  }
  else {
    Window.alert('Your Hero has died')
  }
} 


// UI
