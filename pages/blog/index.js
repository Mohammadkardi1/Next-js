import React from 'react'
import Post from './Post'

const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
    const data = res.json()
    return {
        props: {posts: data},
    }
}


const Blog = ({posts}) => {

    
    return (
        <div>
            <h1>I am a index.js inside blog folder </h1>

            <Post />
        </div>
    )
}

export default Blog