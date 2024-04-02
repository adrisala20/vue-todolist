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
            const index =this.todo.findIndex((el)=>{
                return el.id === id;
            });
            //console.log(item)
            if(index){
                index.id.splice(index, 1);
            }
            console.log(index)
        }
    },
    computed: {
    
    }
}).mount('#app')