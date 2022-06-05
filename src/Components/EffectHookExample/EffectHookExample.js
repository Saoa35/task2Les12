import React, { useEffect, useState } from 'react';

const EffectHookExample = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // console.log('render in useEffect');

        const url = 'https://jsonplaceholder.typicode.com/todos/';

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    // console.log('render', data);

    return (
        <div>
            <h2>
                Effect Hook Example
            </h2>

            {data ? data.map(item => <p key={item.id}>{item.title}</p>) : 'Loading...'}
        </div>
    )
}

export default EffectHookExample;