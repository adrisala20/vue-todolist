import{todo} from './data.js';
const {createApp}= Vue;
createApp({
    data(){
        return {
            todo,
            itemText:'',
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
            if(index !== -1){
                this.todo.splice(index, 1);
                console.log(index)
            }
            console.log(index)
        },
        addItem(){
            const newItem= {
                id:null,
                text:'',
                done:false    
            }

            //generare un id
            let nextId = 0;
            this.todo.forEach((el) => {
                if(nextId < this.todo.id){
                    nextId = el.id;
                }
            });
            console.log(nextId)
            newItem.id = nextId +1
            this.todo.push(newItem)
        }
    },
    computed: {
    
    }
}).mount('#app')