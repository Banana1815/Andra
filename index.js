class Fruit {
    constructor(name, color, season) {

        this._name = name
        this._color = color
        this._season = season 

    }


get name () {
    return this._name

}

set name (newName){
    this._name = newName
}
get color () {
    return this._color 
}

set color (newColor){
    this._color = newColor

}
get season () {
    return this._season
}
set season (newSeason){
    this._season = newSeason

}

describe (){
    return `the ${this._name} is ${this._color} , and is typically available in ${this._season} `

}
}

const kiwi = new Fruit ("kiwi", "green", "october")
console.log(kiwi.describe()) ;
kiwi.season = "summer"
console.log (kiwi.describe())
