import React from "react";

export function Rating() {
    // debugger
    console.log('Rating rendering');
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('star rendered')
    return <div>star</div>
}