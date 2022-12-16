import React, { useEffect, useRef } from "react";

function AnotherOne({ A }) {
    const prevValue = useRef(A);
    useEffect(() => {
        prevValue.current = A;
    }, [A]);

    return (
        <div>
            <p className=" another">
                A= {A}
                <br />
                Previous Number= {prevValue.current}
            </p>
        </div>
    );
}

export default AnotherOne;