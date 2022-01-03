import { LightningElement } from 'lwc';
import tempOne from './templateOne.html';
import tempTwo from './templateTwo.html';
export default class MultipleTemplate extends LightningElement {

    showTemplateOne=true;

    render(){
        return this.showTemplateOne?tempOne:tempTwo;
    }
    switchTemplate(){
        this.showTemplateOne = this.showTemplateOne === true ? false : true;
    }
}