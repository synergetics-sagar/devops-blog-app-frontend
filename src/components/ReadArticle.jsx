import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { articleUrl } from "../constants"

export default function ReadArticle(){

    const params = useParams()

    const [article, setArticle] = useState({title:"Loading...", article:"Loading...", image:""})

    async function getArticle(){
        const res = await fetch(articleUrl(params.id))
        const jsondata = await res.json()
        setArticle(jsondata)
    }

    useEffect(()=>{
        getArticle()
    }, [])

    return (
        <>
            <h3>{article.title}</h3>
            <img src={article.image} alt="Article Image" height={250}/>
            <p>{article.article}</p>
        </>
    )
}