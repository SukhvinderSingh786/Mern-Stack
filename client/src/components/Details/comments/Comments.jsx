
import { useState, useContext,useEffect } from "react";
import { Box,TextareaAutosize, Button, styled } from "@mui/material";
import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

import Comment from "./Comment";
const Container=styled(Box)`
    margin-top:100px;
   
`;

const Image= styled('img')({
    width:50,
    height:50,
    borderRadius:'50%'
});

const StyledTextArea=styled(TextareaAutosize)`
    height: 100px;
    width: 900px;
    margin: 0 20px;
`;


const initialValues={
    name:'',
    postId:'',
    comments:'',
    date:new Date()
}
export const Comments =({post})=>{
        const url = 'https://static.thenounproject.com/png/12017-200.png'


        const [comment,setComment]=useState(initialValues);
        const [comments,setComments]=useState([]);
        const {account}=useContext(DataContext);
        const [toggle,setToggle]=useState(false);
        useEffect(()=>{
            const getData=async() =>{
             const response = await API.getAllComments(post._id);
             if(response.isSuccess){
                setComments(response.data);
             }
            }
            getData();
        },[post,toggle])
        const handleChange=(e)=>{
            setComment({
                ...comment,
                name:account.username,
                postId:post._id,
                comments:e.target.value
            })
        }


        const addComment = async(e)=>{
         let response= await API.newComment(comment);
         if(response.isSuccess){
            setComment(initialValues);
         }
         setToggle(prev=>!prev);
        }
    return(
        <Container >
            <Box display={"flex"}>
                <Image src={url} alt="dp"/>
                <StyledTextArea
                minRows={5}
                placeholder="What's on your mind"
                value={comment.comments}
                onChange={(e)=>handleChange(e)}
                />
                <Button 
                variant="contained" 
                style={{height:'40px'}} color="primary"
                onClick={(e)=>addComment(e)}
                >Post</Button>
            </Box>
            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment =>(
                        <Comment comment={comment} setToggle={setToggle}/>
                    ))
                }
            </Box>
        </Container>
    )
}

export default Comments;