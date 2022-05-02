import React from "react";

const GameEntry = ({name, currentPlayers, maxPlayers, state}) => {
    const styles = {
        barStyle: {
            border: '2px solid black',
            padding: "10px",
            marginBottom: "40px"
        },
        spanStyle: {
            fontSize: "24px"
        }
    };

    return (
        <div style={styles.barStyle}>
            <span style={{...{marginLeft: "4em"}, ...styles.spanStyle}}>{name}</span>
            <span style={{...{marginLeft: "8em"}, ...styles.spanStyle}}>{currentPlayers + "/" + maxPlayers}</span>
            <span style={{...{marginLeft: "2em"}, ...styles.spanStyle}}>{"Estado: " + state}</span>
        </div>
    );
};

export default GameEntry;