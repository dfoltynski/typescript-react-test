import React from "react";
import "../App.css";

interface Props {
    btnText: string;
    getNewUser(): void;
}

const Next: React.FC<Props> = ({ btnText, getNewUser }) => {
    return (
        <button className="next" onClick={getNewUser}>
            <b>{btnText}</b>
        </button>
    );
};

export default Next;
