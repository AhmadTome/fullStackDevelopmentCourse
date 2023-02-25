import React, {useState} from 'react';

const Component1 = (props) => {

    return (
        <div>
            <h1>Component 1</h1>
            <p>
                the count {props.count}
                <button onClick={props.increase}>increase</button>
            </p>


        </div>
    );
};

export default Component1;