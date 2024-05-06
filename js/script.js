const {createApp}= Vue;
createApp({
    data(){
        return {
            todo:[],
            itemText:'',
            done:'',
            apiUrl:'server.php'
        }
    },
    methods:{
        getData(){
            axios.get(this.apiUrl).then((res)=>{
                this.todo=res.data;
                console.log(res.data);
            })
        },
        toggleDone(id){
         const item = this.todo.find((el) => {
               return el.id === id
            });

            if(item){  
               item.done =!item.done;
            } else{
                alert('non esiste l\'id')
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
                text:this.itemText,
                done:false    
            }

            //generare un id
            let nextId = 0;
            this.todo.forEach((el) => {
                if(nextId < el.id){
                    nextId = el.id;
                }
            });
            console.log(nextId)
            newItem.id = nextId +1
            this.itemText ='';
            this.todo.push(newItem)
        }
    },
    computed: {
        cloneTodo(){
            return this.todo.filter((el)=>{
                if(this.done === ''){
                    return true
                };
                if(this.done ==='true'){
                    return el.done == true;
                };
                if(this.done ==='false'){
                    return el.done == false;
                }
            })
        }
    },
    mounted(){
        this.getData();
    },
}).mount('#app')