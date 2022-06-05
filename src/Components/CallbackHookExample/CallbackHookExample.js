import React, { useCallback, useEffect, useState } from 'react';

const ItemsList = ({ getData }) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        const data = getData();
        setState(data);

    }, [getData]);

    return(
        <ul>
            {state?.map(el => <li key={el}>{el}</li>)}
        </ul>
    )
}

const CallbackHookExample = () => {

    const [state, setState] = useState(1);
    const [state2, setState2] = useState(1);

    const getData = useCallback( () => {

        return new Array(state).fill(null).map((_,idx) => `Element ${idx + 1}`)
    }, [state])

    return(
        <div>
            <h3>Callback Hook Example</h3>

            <h4>{state2}</h4>
            <p>
            <button onClick={() => setState(state + 1)}>Click!</button>
            <button onClick={() => setState2(state2 + 1)}>Click me!</button>
            </p>
            <ItemsList getData={getData}/>
        </div>
    )
}

export default CallbackHookExample;