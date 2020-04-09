/* eslint-disable no-lone-blocks */
import React from 'react';

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const students = ["mahbub","mahfuz","mahmud","anas","talha"]
 const products =[{appName:"Photoshop",price:"$90.99"},
                  {appName:"Illustrator",price:"$100"},
                  {appName:"Adobe Reader",price:"$60.96"},
                  {appName:"PDF Reader"}
                ]
  const courses = [
                  {categories:"High",price:"$90.02"},
                  {categories:"Medium",price:"$60.03"},
                  {categories:"Low",price:"$30.04"},
                  {categories:"Low",price:"$30.04"},
                  {categories:"Low",price:"$30.04"},
                  {categories:"Low",price:"$30.04"},
                  {categories:"Low",price:"$30.04"}
                ]
  
  
  return (
    <div  className="App">
      <header className="App-header">
        <p>my first react paragraph.</p>
        {/*<Products name={products[0].appName} price={products[0].price}></Products>*/}
        {/*<Products name={products[1].appName} price={products[1].price}></Products> */}
        {/*<Products name={products[2].appName} price={products[2].price}></Products> */}
        {/*<Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>*/}
        <Counter></Counter>
        <Users></Users>
        <Posts></Posts>
        <div>
        <ul>
          {
            students.map(student=><li style={{width:"200px",borderBottom:"2px solid red",borderTop:"2px solid green",listStyleType:"none"}}>{student}</li>)
          }
          {
            products.map(product=><Products product={product}></Products>)
          }
        </ul>
        </div>
        <div>
         <h1>All courses</h1>
          {
            courses.map(crs=><Courses courses={crs}></Courses>)
          }
        </div>
       
      </header>
    </div>
  );
}
function Products(props){
  const productStyle={
    border:"2px solid gray",
    borderRadius:"15px",
    backgroundColor:"lightgray",
    margin:"10px",
    display:"inline-block",
    float:"left",
    width:"350px",
    height:"350px",
    color:"black",
    overflow:"hidden"
    
    
  }
  const {appName,price} = props.product;

 
  return (
        <div style={productStyle}>
          <h2>{appName}</h2>
          <h1>Price:{price}</h1>
          <button>Buy now</button>
        </div>
  )
}
function Courses(props){
  const {categories,price} =props.courses;
  const coursesStyle={
    border:"1px solid cyan",
    width:"400px",
    height:"350px",
    borderTop:"none",
    margin:"40px",
    display:"inline-block",
    
    overflow:"hidden",
    backgroundColor:"lightgray"
  }
  const btnStyle={
    padding:"20px 30px",
    backgroundColor:"lightblue",
    color:"black",
    border:"none",
    outline:"none",
    

  }
  return (
    <div style={coursesStyle}>
     <h1>{categories}</h1>
     <h2>price:{price}</h2>
     <button style={btnStyle}>Buy now</button> 
    </div>
  )
}
function Counter(){
  const styleCounter={
    border:"2px solid blue",
    width:"400px",
    height:"150px",
    margin:"40px",
    backgroundColor:"tomato"


  }
  const btnStyle={
    padding:"10px 30px",
    backgroundColor:"lightblue",
    color:"black",
    border:"none",
    outline:"none",
    

  }
  const [counts,setCount] = useState(0);
  const handleIncrease = () =>  setCount(counts+1);
  return (
    <div style={styleCounter}>
      <h1>Count:{counts} </h1>
      <button style={btnStyle} onClick={()=>setCount(counts-1)}>Decrease</button>
      <button style={btnStyle} onClick={()=>setCount(counts+1)}>Increase</button>
      {/*<button style={btnStyle} onClick={handleIncrease}>Increase</button>*/}
    </div>
  )
}
function Users(){

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
    {/*userEffect means sideEffect.. it means I can load server data by using this useEffect .. we've to remember that We've to declarer a variable by using this ,,  example is:[users , setUsers ]*/}

  return (
    <div>
      <h1>Dynamic users:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
      <h1>Phone Numbers:{users.length}</h1>
        {
            
            users.map(userPhone => <li>{userPhone.phone}</li>)
        }
      </ul>
    </div>
  )
}



function Posts(){

  var styleLi={
    height:"400px",
    width:"400px",
    overflow:"scroll"
  }
  var [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data => setPosts(data))
  })
  return(
    <div>
      <h1>users Posts:{posts.length}</h1>
      <h1>post body</h1>
      <ul style={styleLi}>
        
        {
          posts.map(post => <li>{post.body}</li>)
        }
      </ul>
      <h1>post title</h1>
      <ul style={styleLi}>
        
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
