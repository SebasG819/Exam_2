export enum Attributebutton{
    "btn_text" = "btn_text"
}

export default class Button extends HTMLElement {

    btn_text?: string;
    

    static get observedAttributes (){
        const attrs: Record <Attributebutton, null> ={
            btn_text: null,
            
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName: Attributebutton, _:unknown, newValue:string){

        switch(propName){
            default:
                this[propName] = newValue

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

        if(this.shadowRoot)
            this.shadowRoot.innerHTML = ` `
            const button = this.ownerDocument.createElement('button')
            button.innerText = `${this.btn_text}`;
            
        this.shadowRoot?.appendChild(button)   
        }
    }


customElements.define('my-button', Button)