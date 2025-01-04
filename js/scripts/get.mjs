import { Validate } from "./validate.mjs";

export class GetItems extends Validate {

    catchFormData() {
        const INPUT_DATA = new Array();
        const INPUT_ELEMENTS = document.querySelectorAll("form input");
        INPUT_ELEMENTS.forEach(input => INPUT_DATA.push(input.value));

        try{
            this.isFilled(INPUT_DATA);
        } catch (er) {
            console.log(er.message);
        }
    }
}