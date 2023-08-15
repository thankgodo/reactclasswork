/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


const Color  = (props) => {

	return ( 
		<div style={{height: '70vh', backgroundColor: 'violet'}}>
        <h2 style={{color: 'white'}}>Color changing page</h2>
            
            <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}>
				<button >Change Color</button>
			</div>
        </div>
	 );
}
 
export default Color;


// const buttonColours = ["red", "blue", "green", "yellow", "gray", "purple"];
// const randomChosenColour = buttonColours[newSequence()];

// function newSequence () {
//   const randomNumber = Math.floor(Math.random() * 10);
  
//   return randomNumber;
// }

