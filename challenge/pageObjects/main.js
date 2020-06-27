import {Selector, t} from 'testcafe';

export default class MainPage{
    constructor(){
        this.navLogo = Selector('a.nav-logo');
        this.categoriesDropDown = Selector('a.nav-menu-categories-link');
        this.categoriesDropDownMenu = Selector('section.nav-categs-departments');
        this.categoryOption = this.categoriesDropDownMenu.find('li a');
        this.subMenuOptions = Selector('section[data-js="nav-categs-detail"]');
        this.subMenuOption = this.subMenuOptions.find('h2 a');
    }

    async maximizePage(){
        
    }

    async checkLogo(){
        await t.expect(this.navLogo.exists).ok('The nav logo should be displayed');
    } 

    async clickOnCategories(){
        await t
            .expect(this.categoriesDropDown.exists).ok('The categories dropdown should be displayed')
            .click(this.categoriesDropDown);
    }

    async selectCategory(category){
        await t
            .expect(this.categoriesDropDownMenu.exists).ok('The dropsdown menu should be displayed')
            .click(this.categoryOption.withText(category));
    }

    async selectSubCategory(option){
        await t
            .expect(this.subMenuOptions.exists).ok('The sub Menu options should be displayed')
            .click(this.subMenuOption.withText(option));
    }
}