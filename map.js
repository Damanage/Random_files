class Penis {
    constructor(){
        this._store = {};
    }
    set(key, value){
        this._store[key] = value;
        return this
    }
    get(key){       
        return this._store[key];
    }
    has(penis){
        for (const key in this._store) {
            if (key === penis) {        
                return true;    
            }
            else if(this.get(penis) === undefined){
                return false
            }
        } 
    }
    delete(penis){
        for (const key in this._store) {
            if (key === penis) {
                delete this._store[key];    
                return true       
            }
            else if(this.get(penis) === undefined){
                return false
            }
        }
    }
    forEach(callback){
        for (const key in this._store) {
            let value = this._store[key];
            callback(value,key,this);
        }
    }
    keys(){
        let arr = [];
        this.forEach((value, key)=>{
            arr.push(key)
        })
        return arr
    }
    values(){
        let arr = [];
        this.forEach((value, key)=>{

            arr.push(value)
        })
        return arr
    }
    entries(){
        let arr = [];
        this.forEach((value, key)=>{
            
            arr.push([value, key])
        })
        return arr
    }
}

let johnyD = new Penis;

johnyD.set('name', 'Miss Jesica');
johnyD.set('phone', '12345');
johnyD.set('duck', 'Кря!');
console.log(johnyD.entries())
// console.log(johnyD.has('duack'))
// johnyD.forEach((value,key)=>console.log(key))
// console.log(johnyD.delete('duck'))
// console.log(johnyD)
// console.log(johnyD)