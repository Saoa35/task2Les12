import React, { useState } from 'react';

const StateHookExample = () => {

    const [state, setState] = useState(0);

    const [data, setData] = useState({ 
        isVisible: true,
        list: [] 
    });

    const handleClick = () =>  {

        setState(state + 1);
        // setState((prevState) => prevState + 1);
        setData({
            ...data,
            list: [...data.list, state]
        });
    }

    return (
        <div>
            <h2>StateHookExample</h2>
            <button onClick={handleClick}>
                Click me!
            </button>
            {data
                ? <ul>{data.list.map(item => {
                    return <li key={item}>{item}</li>
                    })}
                  </ul>
                : <h4>No data :(</h4>
            }
            
        </div>
    )
}

export default StateHookExample;