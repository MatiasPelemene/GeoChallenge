import {t} from 'testcafe'
import MainPage from '../pageObjects/main.js';
import ProductsPage from '../pageObjects/productsPage.js';
import ProductPage from '../pageObjects/productPage.js';

let mainPage = new MainPage();
let productsPage = new ProductsPage();
let productPage = new ProductPage();

fixture `Getting Started`
    .page (`www.mercadolibre.com.ar`)
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Searching on Tv sub category on Mercado libre', async t => {
   await mainPage.maximizePage();
   await mainPage.checkLogo();
   await mainPage.clickOnCategories();
   await mainPage.selectCategory('Tecnología');
   await mainPage.selectSubCategory('TVs');
   await productsPage.checkProductsPage();
   await productsPage.selectFilterOpttion('Menor precio');
   await productsPage.selectLastProduct();
   await productPage.checkProductPage();
   let c = await productPage.getProductPrice();
   console.log(c);
});