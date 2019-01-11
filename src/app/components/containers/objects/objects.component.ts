import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransformData } from '../../../utils/transform';
import {NgForm} from '@angular/forms';
import { DRINKS } from '../../../constants/drinks';

@Component({
  selector: 'objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {
  public code: string;
  data: any = {};
  // talk = this.talky;
  cat: any = {
    speak: function() {
      return this.talky();
    },
    sound: 'miau'
  }
  dog: any = {
    speak: this.cat.speak,
    sound: 'wof'
  }

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('./api/trama.json')
            .subscribe((res:any) => {
              console.log(res)
              this.data = res.paths;
            });
    }

    transformData() {
      let auxTramaConFormato: any = new Array();
      let tramaConFormato: any = new Array();
      const arrayElements = Object.keys(this.data);
  
      if (arrayElements.length) {
        arrayElements.forEach(path => {
          const aux = { ...this.data[path], path: path }
          auxTramaConFormato.push(aux)
        })
        // map auxTramaConFormato
        if (auxTramaConFormato.length) {
          tramaConFormato = auxTramaConFormato.map(element => {
            const newObj = TransformData.TransformObj(element);
            return newObj;
        })
        alert('Revise la consola por favor')
        console.log('tramaConFormato: ', tramaConFormato)
      }
    } else {
      alert("Genere la trama ejemplo por favor.")
    }
  }
  
  talky() {
    console.log(this.dog.sound);
    alert(this.dog.sound)
  };

  showPropertyDog() {
    return this.cat.speak;
  }
  validatePersons() {
    let personsFiltered: any = new Array();
    let personsWithWifes: any = new Array();
    const persons: any = [
      {
        name: 'Pepe',
        donacion: true,
        esposas: ['Rosangela', 'Mayte']
      },
      {
        name: 'Juan',
        donacion: false,
        esposas: ['Yahaira']
      },
      {
        name: 'Lalo',
        donacion: true,
        esposas: []
      }
    ];
    personsFiltered = persons.filter(person => person.donacion && person.esposas.length >= 1)
    if (personsFiltered && personsFiltered.length) {
      personsFiltered.forEach(esposa => {
        esposa.esposas.forEach(element => {
          if (element.startsWith('Y') || element.startsWith('N')) {
            personsWithWifes.push(esposa);
          }
        });
      })
      alert('Revise la consola por favor')
      console.log('Resultado Function#7: ', personsWithWifes)
    }
  }
  callFnctiongetPerns() {
    const persons = [
      {
        name: 'Pepe',
        edad: 11
      },
      {
        name: 'Juan',
        edad: 22
      },
      {
        name: 'Lalo',
        edad: 33
      }
    ];
    this.getPersonByAge(persons);
  }
  getPersonByAge(persons: any) {
            console.log(persons)
  }
  getDrink() {
   let exist: boolean;
   let drinkSelected: any;
    if (this.code && this.code.length) {
        DRINKS.filter((dr: any) => {
          if (dr.code === this.code) {
            drinkSelected = dr;
            exist = true;
          }
        });
        if (exist === true) {
          alert(`Estoy tomando ${drinkSelected.name}`)
        } else {
          alert('Estoy tomando agua de jamaica')
          this.code = '';
        }
    } else {
      alert('Código de bebida es requerido')
    }
  }
}
