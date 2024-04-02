import{todo} from './data.js';
const {createApp}= Vue;
createApp({
    data(){
        return {
            todo,
            
        }
    },
    methods:{
        toggleDone(item){
            if(item){
                item.done == !item.done;
            }
          
            
        }
    },
    computed: {
    
    }
}).mount('#app')