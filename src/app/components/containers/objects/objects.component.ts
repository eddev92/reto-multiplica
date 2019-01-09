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
  constructor(private http: HttpClient) {}

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
      let obj: any = {
        consumes: '',
        hasBodyOrQueryReq: false,
        hasBodyReq: false,
        hasParameters: false,
        hasPathReq: false,
        hasQueryreq: false,
        httpMethod: '',
        parameters: {
          body: {
            isRequired: false
          },
          path: {},
          query: {
            modelName: '',
            params: [
              {
                name: '',
                isRequired: false,
                comma: false,
                isBoolean: false,
                isNumber: false,
                isString: false
              }
            ]
          }
        },
        path: ''
      };
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
      } else {
        alert("Genere la trama ejemplo por favor.")
      }
    }
  }
}
