import { LightningElement } from 'lwc';

export default class CalculatorExample extends LightningElement {
    firstNumber;
    lastNumber;
    result;
    handleChange(event){
        if (event.target.name=='FNumber') {
            this.firstNumber= event.target.value;
        }
        else if(event.target.name=='LNumber'){
            this.lastNumber=event.target.value;
        }
    }
    
    handleAdded(){
       this.result=parseInt(this.firstNumber) + parseInt(this.lastNumber);
    }
}