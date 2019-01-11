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

    ngOnInit() {
        this.categories = CATEGORIES;
    }

    saveItem() {
        if (this.name.length && this.desc.length) {
            this.items.push({name: this.name, desc: this.desc, category: this.optionSelected});
            this.copyItemInitial = [ ...this.items ];
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
        console.log(option.value)
        if (option && option.value) {
            console.log(option.value)
            this.optionSelected = option.value;
        }
        console.log(this.optionSelected);
      }
    filterItems(code: any) {
        this.items = this.copyItemInitial;
        let itemsFiltered: any = new Array();

        if (code && this.optionSelected && this.items) {
            console.log(this.items)        
            console.log('code', code)
            itemsFiltered = this.items.filter(item => item.category === `${code}`);
        }
        if (itemsFiltered.length) {
            console.log(itemsFiltered)
            return this.items = itemsFiltered;            
        }
        console.log('items filtered', this.items)
        return this.items;
    }
};
