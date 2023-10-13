import { Getimg } from "../services/data";
import { Data } from "../services/data";
import { AttributeCard } from "../components/card/card";
import { Attributebutton } from "../components/button/button";
import "../components/export"


class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    async connectedCallback(){
        const data = await Data();
        const dati = await Getimg();
       

    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        data.forEach( (e: any) => {
            const button = this.ownerDocument.createElement('my-button')
            button.setAttribute(Attributebutton.btn_text, e.btn_text )
            
            button.addEventListener('click', async ()=>{
               const date = await Getimg()
               const data = await Data()
               this.render(date)
               this.render(data)
               console.log(date);
               console.log(data)

            const card = this.ownerDocument.createElement('my-card');
            card.setAttribute(AttributeCard.fact,e.fact)
            card.setAttribute(AttributeCard.img, e.img)
            card.setAttribute(AttributeCard.btn_text, e.btn_text)
            this.shadowRoot?.appendChild(card);
            
            

            })
            
            this.shadowRoot?.appendChild(button);
    })}};

customElements.define('my-dashboard', Dashboard)