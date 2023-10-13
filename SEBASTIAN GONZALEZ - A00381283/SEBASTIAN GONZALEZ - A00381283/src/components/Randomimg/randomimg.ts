export enum AttributeRandomimg{
    "img" = "img"
}


export default class Randomimg extends HTMLElement {
   
    img?:string;

    static get observedAttributes(){
        const attrs: Record <AttributeRandomimg, null> = {
            
            img: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeRandomimg,_: unknown, newValue:string){
        
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
            this.shadowRoot.innerHTML = `

            <section>
            <img src= "${this.img}">
            </section>
            
            `
        }
    }
}

customElements.define('my-image', Randomimg);