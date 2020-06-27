import {Selector, t} from 'testcafe';

export default class ProductPage{
    constructor(){
        this.price = Selector('span.price-tag-fraction').nth(0);
    }

    async checkProductPage(){
    }

    async getProductPrice(){
        await t.expect(this.price).ok('The price should be displayed')
        
        return this.price.innerText;
    }
}