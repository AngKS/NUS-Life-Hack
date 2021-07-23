import { React, useState, useEffect } from 'react'
import Navbar from "../navbar/Navbar"
// import Article from '../articles/Article'
import Messages from '../messages/Messages'

// import profilePic from "../Images/profile.png"
// import Badge from "../Images/badge.png"
// import Edit from "../Images/editIcon.png"
import "./Profile.css"


function Profile() {

    let userPic = false
    let username = "AKS123"
    let userAward = true
    let helpRequest = 31
    let userBios = "Geek Out is Awesome, Yi Long and Charis are cool, Group F is the best"


    const [isEdit, setIsEdit] = useState(false)
    const [btnDisplay, setBtnDisplay] = useState(true)
    const [btn2Display, setBtn2Display] = useState(true)
    const [editUser, setEditUser] = useState(username)

    const [bios, setBios] = useState(userBios)
    const [editBios, setEditBios] = useState(false)

    const [article, setArticle] = useState(true)
    const [msg, setMsg] = useState(false)




    return (
        <div>
            <Navbar />
            <main className="container-fluid">

                <section className="row justify-content-center my-4 rounded">
                    <div className="col-md-3 bg-yellow">
                        <div className="rounded-more text-center bg-light m-3 px-2 py-3">
                            <img className="w-50" src={(userPic) ? (userPic) : (profilePic)} alt="" />
                            <div className=" d-block">
                                <div className="d-flex mx-auto justify-content-center">
                                    {
                                        (isEdit) ? (
                                            <form>
                                                <div className="input-group">
                                                    <input className="form-control form-control-sm" type="text" placeholder={`@${editUser}`} onChange={(data) => { setEditUser(data.target.value) }} />
                                                    <div class="input-group-append">
                                                        <img src={Edit} className="btn btn-sm w-20 " onClick={() => {
                                                            setIsEdit(!isEdit)
                                                            setBtnDisplay(!btnDisplay)
                                                        }} />
                                                    </div>
                                                </div>
                                            </form>
                                        ) : (
                                            <h4 className="text-secondary m-0 vertical-align">@{editUser}</h4>
                                        )
                                    }
                                    <img src={Edit} className={(btnDisplay) ? ("btn btn-sm w-20") : ("d-none")} onClick={() => {
                                        setIsEdit(!isEdit)
                                        setBtnDisplay(!btnDisplay)
                                    }} />
                                </div>


                                <div className="text-center">
                                    <img className={(userAward) ? ("w-10") : ("d-none")} src={Badge} alt="" />
                                </div>
                                <div className="my-3">
                                    <span className="border border-danger rounded p-1">{helpRequest} Request solved!</span>
                                </div>

                                <div className="">
                                    {
                                        (editBios) ?
                                            <form action="">
                                                <div className="input-group">
                                                    <textarea name="" id="" cols="30" rows="4" placeholder={bios} onChange={data => setBios(data.target.value)}></textarea>
                                                </div>
                                            </form> :
                                            <p className="p-2 text-muted">
                                                {bios}
                                            </p>
                                    }
                                    <img src={Edit} className={(btnDisplay) ? ("btn btn-sm w-20") : ("d-none")} onClick={() => {
                                        setEditBios(!editBios)
                                        setBtn2Display(!btnDisplay)
                                    }} />
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <section className="container-fluid">
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><span className={(article) ? "nav-link active" : "nav-link"} onClick={() => {
                                    setArticle(true)
                                }}>Article</span></li>
                                <li className="nav-item"><span className={(article) ? "nav-link" : "nav-link active"} onClick={() => {
                                    setArticle(false)

                                }}>Messages</span></li>
                            </ul>

                            <div className="">
                                {
                                    (article) ? (
                                        <section>
                                            <h3 className="text-center">Your articles</h3>
                                            <p className="text-muted text-center my-5">~ Articles not found ~</p>
                                            {/* <Article /> */}
                                        </section>

                                    ) : (
                                        <section>
                                            <h3 className="text-center">Your Messages</h3>
                                            <Messages />
                                        </section>
                                    )
                                }
                            </div>



                        </section>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Profile
