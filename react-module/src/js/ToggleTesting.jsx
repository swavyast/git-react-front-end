import { useState } from "react";

const ToggleTesting = () =>{
    const [toggle, setToggle] = useState(false);
    const toggleMe = () => setToggle((toggleState) => !toggleState);

    return(
        <div className="container p-2">
        <div className="text-center">
        <button className="btn btn-success text-light px-2 mx-2 mb-2" onClick={toggleMe}>ToggleMe <span>{toggle ?  '-' : '+' }</span></button>
        </div>
        {toggle ? <div className="text-center bg-dark text-light">Description can be hidden by clicking ToggleMe button.</div> : null}
    </div>
    );
}

export default ToggleTesting;