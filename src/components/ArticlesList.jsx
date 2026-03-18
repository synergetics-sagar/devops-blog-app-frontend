import { useEffect, useState } from "react"
import { postsUrl } from "../constants"
import { Link } from "react-router-dom"

export default function ArticleList(){
    const [posts, setPosts] = useState([])

    async function getPostsList(){
        const res = await fetch(postsUrl)
        const resdata = await res.json()
        setPosts(resdata)
    }

    useEffect(()=>{
        getPostsList()
    }, [])

    return (
        <>
            <h3>Welcome to the Blog</h3>

            <ol>
            {
                posts.map(post=><li>{post.title} <br /> <Link to={`/${post.id}`}>Read More</Link> </li>)
            }
            </ol>
        </>
    )
}