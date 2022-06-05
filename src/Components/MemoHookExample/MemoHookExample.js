import React, { useState } from "react";

const MemoHookExample = () => {
    
    const [state, setState] = useState(1);

    return(
        <div>
            <h2>
                Memo Hook Example
            </h2>
        </div>
    )
}

export default MemoHookExample;