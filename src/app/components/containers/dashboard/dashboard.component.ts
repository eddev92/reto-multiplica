import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    public name: string = '';
    public desc: string = '';
    public items: any = new Array();
    remove: boolean = false;
    saveItem() {
        if (this.name.length && this.desc.length) {
            this.items.push({name: this.name, desc: this.desc});
        } else {
            alert('Ambos campos son requeridos.')
        }
        console.log(this.items)
    }

    removeInfo() {
        this.name = '';
        this.desc = '';
    }
    removeItem(data) {
        if (this.items.length) {
            this.items.forEach((item, index) => {
                if (data.name === item.name && data.desc === item.desc) {
                    return this.items.splice(index, 1);
                }
            })
        }
        console.log(this.items)
    }
    editItem() {
        console.log('entro editItem')
    }
};
