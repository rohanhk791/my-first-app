import React from "react";

function democls()
{
    return <span>Welcome</span>;
}

export class Nestedcomponent extends React.Component
{
    render()
    {
        return <span><democls/>to react</span>;
    }
}

export default Nestedcomponent;