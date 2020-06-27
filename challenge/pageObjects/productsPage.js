import {Selector, t} from 'testcafe';

export default class ProductsPage{
    constructor(){

        this.productsList = Selector('section#results-section ol#searchResults');
        this.products = this.productsList.find('li');
        this.filterOrderButton = Selector('div.ui-dropdown__indicator');
        this.unselectedfilerOptions = Selector('a.ui-list__item-option');
        this.selectedFilterOption = Selector('span.ui-list__item-option');

    }

    async checkProductsPage(){
        await t.expect(this.productsList.exists).ok('The products list should be displayed');
    }

    async selectFilterOpttion(option){
        await t
            .expect(this.filterOrderButton.exists).ok('The filter order combo should be displayed')
            .click(this.filterOrderButton)
            .expect(this.unselectedfilerOptions.exists).ok('The options on the combo box should be displayed')
            .click(this.unselectedfilerOptions.withText(option));
    }

    async selectLastProduct(){
        await t.expect(this.products.exists).ok('The products should be displayed');
        let count = await this.products.count;
        console.log(count);
        await t
            .click(this.products.nth(count-1));
    }

    

}