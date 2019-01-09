import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransformData } from '../../../utils/transform';

@Component({
  selector: 'objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {
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
  constructor(private http: HttpClient) {
    // this.dog = this.dog;
  }

  ngOnInit() {
    // this.getData();
  }

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
          console.log(path)
          const aux = { ...this.data[path], path: path }

          console.log(aux)
          auxTramaConFormato.push(aux)
          console.log(arrayElements)
          console.log(auxTramaConFormato)
        })
        // map auxTramaConFormato
        if (auxTramaConFormato.length) {
          tramaConFormato = auxTramaConFormato.map(element => {
            const newObj = TransformData.TransformObj(element);
            return newObj;
        })
        console.log(tramaConFormato)
      }
    } else {
      alert("Genere la trama ejemplo por favor.")
    }
  }
  
  talky() {
    console.log(this.dog.sound);
  };

  showPropertyDog() {
    return this.cat.speak;
  }
}
