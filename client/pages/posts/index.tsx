import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Post from './Post';
import { IItem } from '../../interfaces'


const PostsPage = () => {
    const [posts, setPosts] = useState<IItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(response => {
            setPosts(response)
            setLoading(false)
        })
    }, [])

    const deletePost = (id: number) => {
        setLoading(true)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setPosts(response)
            setLoading(false)
        })
    }

    return (
        <MainLayout>
            <h1>Posts</h1> 
            <hr/>
            {
                loading 
                ?
                <h2>Loading...</h2>
                :
                <ul className="posts-list">
                    {
                    posts.length > 0
                    ?
                    posts.map(item => (
                        <Post item={item} key={item.id} deletePost={deletePost} />
                    ))
                    :
                    <p>There is no post here yet.</p>
                    }
                </ul>
            }

        <style>{`
            .posts-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
            }
        `}</style>
        </MainLayout>
    )
}

export default PostsPage