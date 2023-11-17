const {createApp} = Vue
createApp({
    data(){
        return {
            toDoList : [
                {
                    text : "Cascate del Niagara",
                    done : false
                },
                {
                    text : "Machu Picchu",
                    done : true
                },
                {
                    text : "Petra",
                    done : false
                },
                {
                    text : "Acropoli di Atene",
                    done : true
                },
                {
                    text : "Uluru",
                    done : false
                }
            ]
        }
    },
    methods : {
        removeActivity : function(i){
            this.toDoList.splice(i, 1);
        }
    }
}).mount('#app')