import React, {useState} from 'react';


const WithCount = (Component) => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }


    return(
        ({...props}) => {
           return(
               <div>
                   <h1>counter from HOC</h1>
                   <Component count={count} increase={increase} {...props}/>
               </div>
           )
        }
    );


}



export default WithCount;