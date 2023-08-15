/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


// import { useContext } from "react";
// import { AppContext } from "./App";

const About = (props)=>{
    // const {list} = useContext(AppContext)
    return (
        <div style={{height: '70vh', backgroundColor: 'crimson'}}>
        <h2 style={{color: 'white'}}>My about page</h2>
            {props.list.map(item => {
                return <div>
                    <h3>{item}</h3>
                </div>
            })}

        </div>
    )
}

export default About;