//Blogging App using Hooks
import { useState,useReducer} from "react";
import { initializeApp } from "firebase/app";
import db from "../firebaseInit";
import { collection, addDoc } from "firebase/firestore"; 


// Add a new document with a generated id.


function Reducer(state,action){
    switch (action.type){
        case "add":return [action.blog,...state];
        case "remove":return state.filter((s,index)=>index !== action.index);
    }

}

export default function Blog(){
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [blogs,dispatch]=useReducer(Reducer,[]);
    async function handleSubmit(e){
        e.preventDefault();
    //    setBlogs([{title,content},...blogs]);
    dispatch({type:"add",blog:{title,content}});
   
    const ref = await addDoc(collection(db, "blogs"), {
       title: title,
        content:content
      });
    //   console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setContent("");
        console.log(blogs);
    }
    function Delete(i){
     
    
     
    //  setBlogs(blogs.filter((blog,index)=>(i!==index)));
    dispatch({type:"remove",index:i})
     console.log(blogs);
     console.log('inside delete');
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                onChange={(e)=>setTitle(e.target.value) }
                                value={title}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.." 
                                onChange={(e)=>setContent(e.target.value)}
                                value={content}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
       
            {blogs.map((blog,index)=>(
                <>
                 <div className="blog">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <button onClick={()=>Delete(index)}>x</button>
                </div>
                </>
            ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
