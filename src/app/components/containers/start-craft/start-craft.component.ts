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
        USERS.forEach(user => console.log(new Terran(user.name, user.age, user.country)))
    }
    createZerg() {
        USERS.forEach(user => console.log(new Zerg(user.name, user.age, user.country)))
    }
    createProtoss() {
        USERS.forEach(user => console.log(new Protoss(user.name, user.age, user.country)))
    }
    createCustom1() {
        USERS.forEach(user => console.log(new Custom1(user.name, user.age, user.country)))
    }
    createCustom2() {
        USERS.forEach(user => console.log(new Custom2(user.name, user.age, user.country)))
    }
}
