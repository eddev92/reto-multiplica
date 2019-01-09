class Warrior {
    speaker: boolean = true;
    study: boolean = false;
    scream: boolean = true;
}
class Nurse {
    speaker: boolean = true;
    study: boolean = true;
    scream: boolean = false;
}
export class Protoss extends Warrior {
    name: string = '';
    age: number = 0;
    country: string = '';

    constructor(name: string, age: number, country: string) { 
        super(); 
        Object.assign(this, { name, age, country });
    }
    run: boolean = true;
    defend: boolean = true;
    atack: boolean;
    bewitch: boolean;
    mentalControl: boolean;
    fly: boolean;
    heal: boolean;
}
export class Terran extends Warrior {
    name: string = '';
    age: number = 0;
    country: string = '';

    constructor(name: string, age: number, country: string) { 
        super(); 
        Object.assign(this, { name, age, country });
    }
    run: boolean;
    defend: boolean;
    atack: boolean = true;
    bewitch: boolean = true;
    mentalControl: boolean;
    fly: boolean;
    heal: boolean;
}
export class Zerg extends Warrior {
    name: string = '';
    age: number = 0;
    country: string = '';

    constructor(name: string, age: number, country: string) { 
        super(); 
        Object.assign(this, { name, age, country });
    }
    run: boolean;
    defend: boolean;
    atack: boolean;
    bewitch: boolean;
    mentalControl: boolean = true;
    fly: boolean = true;
    heal: boolean;
}
export class Custom2 extends Nurse{
    name: string = '';
    age: number = 0;
    country: string = '';

    constructor(name: string, age: number, country: string) { 
        super(); 
        Object.assign(this, { name, age, country });
    }
    run: boolean;
    defend: boolean;
    atack: boolean;
    bewitch: boolean = true;
    mentalControl: boolean = true;
    fly: boolean;
    heal: boolean = true;
}
export class Custom1 extends Nurse {
    name: string = '';
    age: number = 0;
    country: string = '';

    constructor(name: string, age: number, country: string) { 
        super(); 
        Object.assign(this, { name, age, country });
    }
    run: boolean = true;
    defend: boolean = true;
    atack: boolean = true;
    bewitch: boolean;
    mentalControl: boolean;
    fly: boolean;
    heal: boolean;
}