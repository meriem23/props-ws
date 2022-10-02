import React from "react";
// { myName, isWorking }
const Header = ({ myName, isWorking, children, myAlert }) => {

    return (
        <div>

            {isWorking ? (
                <div>
                    <h3>Hello, my name is {myName} </h3>
                    <h3>My age is {children} </h3>
                    <h4>I am a web developer</h4>
                </div>
            ) : (
                <div>
                    <h3>Hello, my name is {myName} </h3>
                    <h4>I am a student</h4>
                </div>
            )}
            {/* {myAlert()} */}
            <button onClick={myAlert}>click me</button>
        </div>
    );
};

export default Header;
