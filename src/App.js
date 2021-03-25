import React from "react";
import Card from "./Card";

class App extends React.Component {
    render() {
        return (
            <div style={{ width: "40vw" }}>
                <Card wish="Congratulations!" scored="9" scoringPercent="100" />
                <Card
                    wish="Minimum 80% score required to pass"
                    scored="7"
                    scoringPercent={Math.floor((7 / 9) * 100)}
                />
            </div>
        );
    }
}

export default App;
