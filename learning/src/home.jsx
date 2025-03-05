const Home = () => {
    const handleClick = () => {
        return ( 
            console.log("hey")
         );
    }
    const handleClickAgain = (name) => {
        return ( 
            alert("hey "+ name)
         );
    }
     
    
     
   
    return ( 
<>

        <div className="Home">
            <h2>
                Homepage
            </h2>
            <button onClick={handleClick}>Click here</button>
            <input type="text" placeholder="Enter your name" />
            <button onClick={
                ()=>
                    handleClickAgain("mario")
            }>ADD</button>

        </div>
        
        </>
     );
}
 
export default Home;
