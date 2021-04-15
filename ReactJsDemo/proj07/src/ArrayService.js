
export const doOnEach = (arr,taskToBeDone) =>{
    for(let i=0;i<arr.length;i++){
        taskToBeDone(arr[i]);
    }
}

export const doOnEachAsync = (value,callBack,delay) =>{
        setTimeout(() =>{
            //there might be some lengthy task
            callBack(value+10);
        },delay);
}

