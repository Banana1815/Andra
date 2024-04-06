class Character {
    constructor(name, house, spellPower){

        this.name = name
        this.house = house
        this.spellPower = spellPower
        this.healt = 100 

    }

    displayInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`House: ${this.house}`)
        console.log(`Spell Power ${this.spellPower}`)
        console.log(`Healt: ${this.healt}`)
        console.log(".............................")
    }

    castSpell(target) {
        console.log(`${this.name} casts a spell on ${target.name}!`)
        const spellDamage = this.spellPower * (Math.floor(mat.random() * 5) +1)
        console.log(`${target.name} loses ${spellDamage} health points!`)
        target.healt -= spellDamage
        console.log(`${target.name}'s remaining healt: ${target.healt}`)
        console.log(".............................") 
    }
}

const harry = new Character("Harry Potter", "Gryffindor", 20)
const hermione = new Character("Hermione Granger", "Griffindor", 25)
const draco = new Character("Draco Malfoy", "Slytherin", 25)


console.log ("Harry Potter Characters Information:")
harry.displayInfo()
hermione.displayInfo()
draco.displayInfo()

console.log("The Duel Begins:")
harry.castSpell(draco)


