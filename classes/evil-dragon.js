const Dragon = require("./dragon");

class EvilDragon extends Dragon {
    constructor (name, color, evilDoings, nemesis) {
        super (name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        for (const evildeed of this.evilDoings) {
            console.log(`${this.name} will ${evildeed}`);
        }
    }
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
}
