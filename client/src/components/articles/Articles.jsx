import {React, useEffect, useState} from 'react'
import Axios from 'axios'


function Articles() {

    const [articles_, setArticles_] = useState()

    useEffect(() => {
        
        Axios.get("https://nus-life-hack.herokuapp.com/api/articles").then(res => {
            let allArticles = res.data
            setArticles_(allArticles)
        })
        
    }, [])


    return (
        <div>
            <section className="container">

            </section>

        </div>
    )
}

export default Articles
