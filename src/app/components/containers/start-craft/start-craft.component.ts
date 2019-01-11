import { Component } from '@angular/core';
import { Terran, Protoss, Zerg, Custom1, Custom2 } from '../../../constants/start-craft';
import { USERS } from '../../../constants/users';

@Component({
  selector: 'start-craft',
  templateUrl: './start-craft.component.html',
  styleUrls: ['./start-craft.component.css']
})
export class StartCraftComponent {
    createTerrans() {
        alert('revisar la consola por favor');
        USERS.forEach(user => console.log(new Terran(user.name, user.age, user.country)))
    }
    createZerg() {
        alert('revisar la consola por favor');
        USERS.forEach(user => console.log(new Zerg(user.name, user.age, user.country)))
    }
    createProtoss() {
        alert('revisar la consola por favor');
        USERS.forEach(user => console.log(new Protoss(user.name, user.age, user.country)))
    }
    createCustom1() {
        alert('revisar la consola por favor');
        USERS.forEach(user => console.log(new Custom1(user.name, user.age, user.country)))
    }
    createCustom2() {
        alert('revisar la consola por favor');
        USERS.forEach(user => console.log(new Custom2(user.name, user.age, user.country)))
    }
}
