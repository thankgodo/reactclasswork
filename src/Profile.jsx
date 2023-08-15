/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

// import { useContext } from "react"
// import { AppContext } from "./App"

const Profile = (props)=>{
    // const {handleUpdate, handlSubmit} = useContext(AppContext)
    return (
       
        <div style={{
            height: "70vh", width: "100vw", backgroundColor: "purple", display: "flex",
            justifyContent: "center", alignItems: "center", flexDirection: 'column'
        }}>
                <h2 style={{ color: 'white' }}>Create Profile Page</h2>
                <div style={{
                    border: "1px solid", display: "flex", justifyContent: "center",
                    alignItems: "center", height: "300px", width: "300px", flexDirection: "column"
                }}>
                    <input onChange={(e)=>props.handleUpdate(e)} type="text" />
                    <button onClick={props.handlSubmit} >Add User</button>
                </div>
            </div>
    )
}


export default Profile
