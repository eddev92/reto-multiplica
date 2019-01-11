import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    public name: string = '';
    public desc: string = '';
    public newName: string = '';
    public newDesc: string = '';
    public items: any = new Array();
    public showEdit: boolean;
    private itemSelected: any;
    remove: boolean = false;
    saveItem() {
        if (this.name.length && this.desc.length) {
            return this.items.push({name: this.name, desc: this.desc});
        } else {
            alert('Ambos campos son requeridos.')
        }
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
    saveNewItem() {
        if (this.itemSelected && this.itemSelected.name && this.itemSelected.desc) {
            this.items.forEach((item, index) => {
                if (this.itemSelected.name === item.name && this.itemSelected.desc === item.desc) {
                    item.name = this.newName;
                    item.desc = this.newDesc;
                    this.items[index] = item;
                    return this.showEdit = false;
                }
            })
            this.newName = '';
            this.newDesc = '';
        }
    }
    editItem(data) {
        const aux = {
            name: '',
            desc: ''
        };
        if (this.items.length && data && data.name && data.desc) {
            this.items.forEach((item, index) => {
                if (data.name === item.name && data.desc === item.desc) {
                    this.itemSelected = {name: data.name, desc: data.desc};
                    return this.showEdit = true
                }
            })
        }

    }
    cancelNewItem() {
      if (this.items.length && this.showEdit) {
            return this.showEdit = false;
        }
    }
};
