export enum AttributeRandom{
    "fact" = "fact"

}

export default class Random extends HTMLElement {
   
    fact?:string;

    static get observedAttributes(){
        const attrs: Record <AttributeRandom, null> = {
            
            fact: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeRandom,_: unknown, newValue:string){
        
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
            <h1>${this.fact}</h1>
            </section>
        
            `
        }
    }
}

customElements.define('my-random', Random);


