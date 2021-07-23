import { React, useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../navbar/Navbar"

import data from "../articles/articles.json"

function ArticlePage() {

    const [ID, setID] = useState()
    const [article, setArticle] = useState()



    useEffect(() => {
        let _articleID = localStorage.getItem('articleID')
        setID(_articleID)
        setArticle(data.articles.filter(item => {
            return item.articleID == _articleID
        })[0])
    }, [])
    

    console.log(article)
    return (
        <div>
            <Navbar />
            {
                (article) ? (
                   <div className="container mt-4">
                        <header className="">
                            <h3 className="">{article.title}</h3>
                            <div className="text-muted">
                                <i>article by {article.username}; Posted on {article.date}</i>
                            </div>
                            <p>
                                {article.content}
                            </p>
                        </header>

                        <Link to="/community">Back</Link>
                        
                   </div>
                ) : (
                    <h3>Work in Progress</h3>
                )
            }


        </div>
    )
}

export default ArticlePage
