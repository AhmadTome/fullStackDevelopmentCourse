import React, {useState} from 'react';

const Component2 = (props) => {


    return (
        <div>
            <h1>Component2</h1>

            <p>
                the count {props.count}
                <button onClick={props.increase}>increase</button>

            </p>
        </div>
    );
};

export default Component2;