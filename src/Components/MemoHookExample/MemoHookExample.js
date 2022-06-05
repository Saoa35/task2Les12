import React, { useMemo, useState } from "react";

const computedFunc = (state) => {
    return state * 2;
}

const MemoHookExample = () => {

    const [state, setState] = useState(1);
    const [state2, setState2] = useState(1);

    const computed = useMemo(() => computedFunc(state), [state]) ;

    return(
        <div>
            <h2>
                Memo Hook Example
            </h2>

            <h4>
                comp: {computed}, state 2: {state2}
            </h4>

            <p>
                <button onClick={() => setState(state + 1)}>
                    Click!
                </button>
                <button onClick={() => setState2(state2 + 1)}>
                    Click me!
                </button>
            </p>
        </div>
    )
}

export default MemoHookExample;