import { LightningElement } from 'lwc';

export default class HtmlDirective extends LightningElement {
    isDetailVisible=false;
    handleChange(event){
        this.isDetailVisible=event.target.checked;
    }
}