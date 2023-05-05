export default class Store {
    constructor(state){
        this.state = {}
        this.observers = {}
        for(const key in state){
            Object.defineProperty(this.state, key, {
                get: ()=> state[key],
                set: (value)=> {
                    state[key] = value;
                    if(Array.isArray(this.observers[key])){
                        this.observers[key].forEach(observer => observer(value));
                    } 
                }
            })
        }
    }

    subscribe(key, cb){
        Array.isArray(this.observers[key])
        ? this.observers[key].push(cb)
        : this.observers[key] = [cb]
    }
}