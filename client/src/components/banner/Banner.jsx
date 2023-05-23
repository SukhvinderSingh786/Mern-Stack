import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Image=styled(Box)`
background:url(https://images.unsplash.com/photo-1523635050353-f5b60dafa07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60) center/55% repeat-x #000;
width:100%;
height:50vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Heading=styled(Typography)`
font-size:70px;
color:black;
line-height:1;
`

const SubHeading=styled(Typography)`
    font-size:20px;
    background:#FFFFFF;
`
const Banner=()=>{
    return(
    <Image>
       <Heading>Blog</Heading>
       <SubHeading>Write, Rewrite, Read.Then Repeat.</SubHeading>
    </Image>
    )
}
export default Banner;
