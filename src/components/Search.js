import Component from "../core/component";

export default class Search extends Component {
    render(){
        this.el.classList.add('search');
        this.el.innerHTML = /* html */`
            <input placeholder ="Enter the movie title to search!" />
            <button class='btn btn-primary'>
                Search!
            </button>
        `

        const inputEl = this.el.querySelector('input');
        inputEl.addEventListener('input', ()=>{

        })
        inputEl.addEventListener('keydownt', (event)=>{
            if(event.key === 'Enter'){

            }
        })

        const btnEl = this.el.querySelector('.btn');
        btnEl.addEventListener('click', ()=>{
            
        })
    }
}