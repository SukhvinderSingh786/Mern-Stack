import { useContext } from "react";
import { Box, Typography,styled } from "@mui/material";
import {Delete} from '@mui/icons-material';
import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
margin-top:30px;
background:#F5F5F5;
padding:10px;
`
const Container= styled(Box)`
display:flex;
margin-bottom:5px;
`

const Name=styled(Typography)   `
font-weight:600;
font-size:18px;
margin-right:20px;
`
// const styledDate=styled(Typography)`
// color:#878787;
// font-size:14px;
// `
// const deleteIcon=styled(Delete)`
//     margin-left:auto;
// `
const Comment =({comment, setToggle}) =>{

    const {account}=useContext(DataContext)

    const removeComment=async()=>{
     let response=   await API.deleteComment(comment._id);
        if(response.isSuccess){
            setToggle(prev => !prev);
        }

    }
    return(
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <Typography style={{fontSize:'14px',color:'gray'}}>{new Date(comment.date).toDateString()}</Typography>
                {comment.name === account.username && <Delete style={{ marginLeft:'auto'}} onClick={()=> removeComment()}/>}
            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box> 
        </Component>
    )
}
export default Comment;