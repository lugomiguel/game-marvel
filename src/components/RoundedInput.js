import React from "react";

const RoundedInput = ({}) => {
    const inputStyle = {
        width: 300,
        height: 50,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 25,
        fontSize: 16,
    };

    return (
        <input style={inputStyle} placeholder={"Nombre de la sala"}></input>
    );
};

export default RoundedInput;