import React from "react";

const ActionButtons = () => {
    const btnStyle = {
        borderRadius: "0px",
        border: "0px",
        backgroundColor: "#09a894",
    };
    return (
        <div>
            <hr />

            <div className="row pl-3">
                <button className="btn btn-primary mr-3" style={btnStyle}>
                    Review Your Results
                </button>
                <button className="btn btn-primary" style={btnStyle}>
                    Try Again!
                </button>
            </div>
        </div>
    );
};

export default ActionButtons;
