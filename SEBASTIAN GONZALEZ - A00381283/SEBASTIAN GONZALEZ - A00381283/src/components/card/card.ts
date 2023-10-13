import { AttributeRandom } from "../Randomdate/randomdate";
import { AttributeRandomimg } from "../Randomimg/randomimg"; 
import { Attributebutton } from "../button/button";


export enum AttributeCard{
    "fact" = "fact",
    "img" = "img",
    "btn_text" =  "btn_text"

}

export default class Card extends HTMLElement {
   
    fact?:string;
    img?: string;
    btn_text?:string;

    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> = {
            
            fact: null,
            img: null,
            btn_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeCard,_: unknown, newValue:string){
        
        switch(propName){
            default:
                this[propName] = newValue;
                break

        }

        this.render()    
}


    constructor(){
        super()
            this.attachShadow({mode:"open"})
        
    }

   
    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``

            const container = this.ownerDocument.createElement('section');

            const random = this.ownerDocument.createElement('my-random');
            random.setAttribute(AttributeRandom.fact, this.fact!)

            const image = this.ownerDocument.createElement('my-image');
            image.setAttribute(AttributeRandomimg.img, this.img!)

            const button = this.ownerDocument.createElement('my-button');
            button.setAttribute(Attributebutton.btn_text, this.btn_text!)

            container.appendChild(image)
            container.appendChild(random)
            container.appendChild(button)

        this.shadowRoot?.appendChild(container)
            
    
            
        }
    }
}

customElements.define('my-card', Card);