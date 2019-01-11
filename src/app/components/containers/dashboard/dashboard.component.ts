import { Component } from '@angular/core';
import { SERVICES_ITEMS, CATEGORIES } from '../../../constants/services';

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
    public categories: any = new Array();
    public remove: boolean = false;
    public optionSelected: string;
    public copyItemInitial: any = new Array();
    public itemsFiltered: any = new Array();
    public itemsSaved: any = new Array();
    public empty: boolean;

    ngOnInit() {
        this.categories = CATEGORIES;
        localStorage.clear();
    }

    saveItem() {
        this.itemsSaved = JSON.parse(localStorage.getItem('items'));
        console.log(this.desc)
        if (!this.name.length || !this.desc.length){
            return alert('Ambos campos son requeridos.')
        }
        if (this.itemsSaved && this.itemsSaved.length) {
            this.items = JSON.parse(localStorage.getItem('items'));
        }
        if ((this.items && this.items.length) || (this.name.length && this.desc.length)) {
            this.items.push({name: this.name, desc: this.desc, category: this.optionSelected});
            localStorage.setItem('items', JSON.stringify(this.items));
            this.copyItemInitial = JSON.parse(localStorage.getItem('items'));
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
    }
    saveNewItem() {
        if (this.itemSelected && this.itemSelected.name && this.itemSelected.desc) {
            this.items.forEach((item, index) => {
                if (this.itemSelected.name === item.name && this.itemSelected.desc === item.desc && this.itemSelected.position === index) {
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
        if (this.items.length && data && data.name && data.desc) {
            this.items.forEach((item, index) => {
                if (data.name === item.name && data.desc === item.desc) {
                    this.itemSelected = {name: data.name, desc: data.desc, position: index};
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
    handleChange(option){
        if (option && option.value) {
            this.optionSelected = option.value;
        }
      }
    filterItems(code: any) {
        if (code) {
            if (code && this.items) {
                this.items = JSON.parse(localStorage.getItem('items'));
                if (code === 1) {
                    this.itemsFiltered = JSON.parse(localStorage.getItem('items'));
                } else {
                    this.itemsFiltered = this.items.filter(item => item.category === `${code}`);
                }
            }
            if (this.itemsFiltered.length) {
                return this.items = this.itemsFiltered;            
            } else {
                if (this.items.length && code === 1) {
                    this.items = JSON.parse(localStorage.getItem('items'));
                } else {
                    this.items = [];
                }
            }
            return this.items;
        } else {
            alert('No existen registros para filtrar')
        }
    }
};
