import React, {memo, useMemo} from 'react';

const Product = (props) => {

    console.log("The product Component rendered")


    const output = useMemo(() => {
        let x = 0;
        for(let i=0; i<1000000000;i++) {
            x += i;
        }

        return x;
    }, []);





    return (
        <div>
            The Product Component, the cont is {output}



            <br/>

            count is {props.count}
            <button onClick={props.increase}>click</button>
        </div>
    );
};

export default memo(Product);