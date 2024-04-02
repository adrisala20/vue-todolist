import{todo} from './data.js';
const {createApp}= Vue;
createApp({
    data(){
        return {
            todo,
            
        }
    },
    methods:{
        toggleCheck(){
            if(item){
                item.check = !item.check
            }
            
        }
    },
    computed: {
    
    }
}).mount('#app')