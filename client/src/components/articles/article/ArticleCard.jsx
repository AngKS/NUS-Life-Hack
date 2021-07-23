import React from 'react'

function ArticleCard({article}) {
    return (
        <div className="card p-3 my-3 rounded-md, shadow">
            <div className="d-flex justify-content-between">
                <h4 className="card-title text-dark">{article.title}</h4>
                <i className="text-muted">{article.created_at} by {article.author}</i>
            </div>
            <p className="text-left">{article.content}</p>
        </div>
    )
}

export default ArticleCard
