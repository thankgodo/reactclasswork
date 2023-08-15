/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Body = (props) => {
    return (
        <main>
            {props.list.filter((item) => {
            if(item.todo === ""){
              return item
            }
            if(item.todo.toLowerCase().includes(props.search.toLowerCase())){
              return item
            }
          }).map(item => {
            return <div style = {{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{item.todo}</h2>
            {
              item.todo && <button 
            style={
              {backgroundColor: "green", 
              color:'white'}}
              onClick={()=> props.handleDelete(item.id)}
            >delete</button>
            }
            
    </div>
      })}
        </main>
    );
}

export default Body;