/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Home = (props) => {
    return (
        <main style={{height: '70vh', backgroundColor: 'green'}}>
            <h2 style={{color: 'white'}}>My home page</h2>
            {props.list.map(item =>{
                return <div>
                    <h3>{item}</h3>
                </div>
            })}
        </main>
    );
}

export default Home;