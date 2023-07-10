let Vue = null;
let store = null;
export const mapState = (keys) => {
    if(!Array.isArray(keys)) return;
    if(keys.every(key => typeof key === 'string')) return;
    return keys.reduce((prev,key)=>{
        prev[key] = function(){
            return store.state[key];
        }
    },{})
 }
export default {
    Store: class {
        constructor(options = {}) {
            this._options = options
            if (Object.prototype.toString.call(this._options.state).slice(8, -1) !== 'Object') return;
            this.state = Vue.observable(this._options.state ?? {})
        }
    },
    install(_Vue) {
        Vue = _Vue;
        Vue.mixin({
            beforeCreate() {
                if (!this.$parent) {
                    Vue.prototype.$store = this.$options.store
                    store = this.$options.store
                }
            }
        })
    }
}