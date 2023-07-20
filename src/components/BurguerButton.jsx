import React from 'react'
import styled from 'styled-components'


function BurguerButton() {
    return (
        <Burguer>
            <div>
                <div className="btn" onclick="this.classList.toggle('active')">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Burguer>
    )
}

export default BurguerButton

const Burguer = styled.div`

body {
    background:#3337a7;
    }
    .btn {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    }

.btn span {
    position:relative;
    top:0px;
    display:block;
    background:#eee;
    width:80px;
    height:10px;
    margin:10px 0px;
    cursor:pointer;
    transition:transform 300ms linear 0ms,top 250ms ease-in-out 350ms;
    }

.btn.active span:nth-child(1) {
    top: 20px;
    transform:rotate(45deg);
    transition:top 300ms linear 0ms,transform 250ms ease 400ms;
        }

.btn.active span:nth-child(2) {
    opacity:0;
    transition:all 50ms ease 350ms;
}

.btn.active span:nth-child(3) {
    top: -20px;
    transform:rotate(-45deg);
    transition:top 300ms linear 0ms,transform 250ms ease 400ms;
    }