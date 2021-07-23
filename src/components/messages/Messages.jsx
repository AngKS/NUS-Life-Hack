import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import txtMessages from "./text.json"

function Messages() {

    let allMsg = txtMessages.messages.privateChats
    const [currChat, setCurrChat] = useState(allMsg[0])

    return (
        <div class="row">
            <div className="col-md-3">
                <ul className="nav nav-tabs flex-column">
                    {
                        allMsg.map(item => 
                            (<li className="nav-item">
                                <Link className="nav-link" onClick={() => setCurrChat(item)}>{item.ChatName}</Link>
                            </li> )   
                        )
                    }
                </ul>
            </div>
            <div className="col-sm-8 border border-dark">
                <div className="header">
                    <h4 className="text-left">{currChat.ChatName}</h4>
                    <hr />
                    <div className="scroll ">
                        {
                            
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    )
}

export default Messages
