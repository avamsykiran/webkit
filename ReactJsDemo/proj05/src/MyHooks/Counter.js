import React, { useState } from 'react';

const Counter = (props) => {
    
    let [count,setCount] = useState(0);
    //let [str,setStr] = useState('hello');
    //let [emp,setEmp] = userState({eid:0,ename:'Vamsy'});

    return (
        <div>
            <button type="button" onClick={()=>{setCount(count+1);}}>
                This is the {count} th times you clicked me
            </button>
        </div>
    );
};

export default Counter;