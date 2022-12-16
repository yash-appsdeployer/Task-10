import React, { useEffect, useRef } from "react";

function AnotherTwo({ B }) {
    const prevValue = useRef(B);
    useEffect(() => {
        prevValue.current = B;
    }, [B]);


    return (
        <div>
            <p className="another mt-2">
                B= {B}
                <br /> Previous Number= {prevValue.current}
            </p>
        </div>
    );
}

export default AnotherTwo;