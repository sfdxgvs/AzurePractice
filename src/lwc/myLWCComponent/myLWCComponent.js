import { LightningElement, api } from 'lwc';

export default class MyLWCComponent extends LightningElement {
    @api greeting ="Hello Jest";
    clickMe(){
        this.greeting = "Hey, You just clicked Me";
    }
}