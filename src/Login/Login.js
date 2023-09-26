import React ,{useRef} from 'react';




const Login=()=>{

    const emailRef=useRef();
    const passwordRef=useRef();

   const formSubmitHandler=(event)=>{
     event.preventDefault();

    const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;
     
    const obj={
        email:enteredEmail,
        password:enteredPassword,
    }
       fetch(`https://crudcrud.com/api/dbf9981a02ee4ee1bf80edf3b09cce62/project-three/`,{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
       }).then((res)=>{
        if(res.ok){
            console.log(res);
        }
       }).catch((err)=>{
        console.log(err);
       })


   }


    return (
        <form onSubmit={formSubmitHandler}>
            <label forhtml="email">Email</label>
            <input type='email' id="email" ref={emailRef} required />
            <label forhtml="password">Password</label>
            <input type="password" id="password" ref={passwordRef} required/>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default Login;