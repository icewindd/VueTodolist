new Vue({
    el:'#app',
    data:{
        todos:[],
        newTodo: ''
    },
    methods:{
        addTodo:function(todo){
            this.todos.push({content:todo,completed:false});
        },
        removeTodo:function(todo){
            this.todos.splice(this.todos.indexOf(todo),1);
        },
        allFinish:function(){
            for(var i=0;i<this.todos.length;i++){
                if(this.todos[i].completed == false){
                    this.todos[i].completed = true;
                }else{
                    this.todos[i].completed = false;
                }
                
            }
        }
    }
});