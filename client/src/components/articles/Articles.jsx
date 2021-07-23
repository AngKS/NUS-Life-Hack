import {React, useEffect, useState} from 'react'
import Axios from 'axios'
import ArticleCard from './article/ArticleCard'


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
                {
                    (articles_) ? articles_.map(article =>  <ArticleCard article={article}/>) :
                        <div className="text-center"><h1>Loading...</h1><div className="spinner-border"></div></div>
                }

            </section>

        </div>
    )
}

export default Articles
