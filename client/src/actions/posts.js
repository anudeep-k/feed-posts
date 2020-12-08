import * as api from '../api';

export const getPosts=()=> async (dispatch)=>{
try{
    const {data} = await api.fetchPosts();
   console.log(data)
    const action={type:'FETCH_ALL',payload:data}

    dispatch(action)
}
  catch(err){
console.log(err.message)
  }  
}

export const createPosts=(posts)=>async (dispatch)=>{
  try{
  const {data} =await api.createPosts(posts)
  console.log(data)
  const action ={type:'CREATE',payload:data}
  dispatch(action);
  }
  catch(err){

  }
}

export const updatePost=(id,posts)=>async (dispatch)=>{
  try{
   const {data}= await api.updatePost(id,posts);
   dispatch({type:"UPDATE",payload:data})

  }
  catch(err){

  }
}

export const deletePost =(id)=>async(dispatch)=>{
  try{
      const {data}=   await api.deletePost(id);
      dispatch({type:"DELETE",payload:id})
  }
  catch(err){
console.log(err)
  }
}