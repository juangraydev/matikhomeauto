import React from 'react'
import { useNavigate } from "react-router-dom";

function Content (props) {
    const navigate  = useNavigate();
    
    React.useEffect(()=>{
        if(localStorage.getItem("TOKEN")){
            navigate("/dashboard");
        }else {
            navigate("/")
        }
    }, [localStorage.getItem("TOKEN") ])
    return (
        <React.Fragment>
            { props.children }
        </React.Fragment>
    );
}

export default Content;
