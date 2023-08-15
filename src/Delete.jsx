/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Delete = (props)=>{
    const refresh = () => window.location.reload(false)
    return (
        <div style={{height: '70vh', backgroundColor: 'chocolate'}}>
        <h2 style={{color: 'white'}}>My Delete page</h2>
            {props.list.map(item => {
               return <div>
                    <h3>{item}</h3>
                </div>
            })} 
            <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}>
                <button onClick={refresh}>Delete</button>
            </div>
        </div>
    )
}

export default Delete;