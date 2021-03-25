import React from "react";
import ActionButtons from "./ActionButtons";

const Card = (props) => {
    const txtColorStyle = { color: "#604c81" };

    return (
        <div className="card p-4 m-3" style={{ borderRadius: "0px" }}>
            <div className="card-body">
                <div className="row mb-4">
                    <div
                        style={{ width: "1.1rem", backgroundColor: "#f0ecfb" }}
                    ></div>
                    <h2
                        className="card-title font-weight-bold m-0 ml-2"
                        style={txtColorStyle}
                    >
                        ASSESSMENT REVIEW
                    </h2>
                </div>
                <p
                    className="font-italic font-weight-bold"
                    style={{ color: "#787878", fontSize: "85%" }}
                >
                    {props.wish}
                </p>
                <p style={txtColorStyle}>
                    You answered {props.scored}/9 questions correctly, scoring{" "}
                    {props.scoringPercent}%
                </p>
                <ActionButtons />
            </div>
        </div>
    );
};

export default Card;
