let tasksManager = (function(){

    let tasks = [];

    return {
        add:function(task) {
            tasks.push(task);
        },
        remove:function(taskId){
            let taskIndex = tasks.findIndex((t)=>t.taskId==taskId);
            if(taskIndex>-1){
                tasks.splice(taskIndex,1);
            }
        },
        getAll:function(){
            return tasks;
        },
        get:function(taskId){
            return tasks.find((t)=>t.taskId==taskId);
        }
    };
})();
