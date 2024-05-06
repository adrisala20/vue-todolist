const {createApp}= Vue;
createApp({
    data(){
        return {
            todo:[],
            itemText:'',
            lastId : null,
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
                text:this.itemText,
                done:false    
            }
            this.lastId +=1;

            newItem.id = this.lastId;
            this.itemText ='';
            this.todo.push(newItem);

            const data = new FormData();
            data.append ('id', newItem.id);
            data.append('text', newItem.text);
            data.append('done', newItem.done);

            axios.post(this.apiUrl, data).then((res)=>{
                console.log(res.data)
            })
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