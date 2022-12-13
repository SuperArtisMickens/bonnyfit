import React from "react"
import styled from 'styled-components'
import Navbar  from "./Navbar"

function App(){
    return <Navbar />
}

const theme = {
    blue:{
        default: '#3f51b5',
        hover: '#283593'
    }
}

const Button = styled.button`
    background-color: #3949ab;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-tranform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #283593;
    }

`

function clickMe(){
    alert('you clicked me!');
}

export default function App(){
    return(
        <div className="App">
            <h1> Hello Sandbox</h1>
           
        </div>
    )
}

