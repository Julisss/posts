import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { GetServerSideProps } from 'next'

const SinglePost = ({post}:any) => {
    const router = useRouter()


    return (
        <MainLayout>
            <Button style={{marginBottom: '30px'}} variant="dark" onClick={() => router.push('/posts')}>Back to Posts</Button>
            <Card>
                <Card.Header>Post № {post.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.text}</Card.Text>
                </Card.Body>
            </Card>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const res = await fetch(`http://localhost:5000/posts/${context.params.id}`)
    const post = await res.json()
    console.log(post)
    return {
        props: {post}
    }
}

export default SinglePost