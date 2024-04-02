import{todo} from './data.js';
const {createApp}= Vue;
createApp({
    data(){
        return {
            todo,
            
        }
    },
    methods:{
        toggleDone(id){
            const item = this.todo.find((el) => {
               return el.id === id
            });
            
            if(item){
                item.done =!item.done;
            }
        },
        removeItem(id){
            const item =this.todo.findIndex((el)=>{
                return el.id === id;
            });
            console.log(item)
        }
    },
    computed: {
    
    }
}).mount('#app')