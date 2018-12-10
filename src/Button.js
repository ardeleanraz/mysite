import React from "react";

const Button = () => {

    const gitbutton = <a href="https://github.com/ardeleanraz">
        <button className="ui massive circular github icon button"><i className="github icon"> </i></button>
    </a>;

    const linkedin = <a href="https://www.linkedin.com/in/razvan-vasile-ardelean-b63b15172/">
        <button className="ui massive circular linkedin icon button"><i className="linkedin icon"> </i></button>
    </a>;


    return (

        <div>
            <div className="dreapta-jos">
                {gitbutton}
                {linkedin}
            </div>
        </div>


    );
};


export default Button;