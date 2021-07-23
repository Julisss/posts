import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button } from 'react-bootstrap';

const About = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const textHandler = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const addPost = async (e) => {
        e.preventDefault()

        const data = {
            title,
            text
        }

        const res = await fetch('http://localhost:5000/newpost', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: data
            })
        })
        const response = await res.json();

        console.log(response);

    }

    return (
        <MainLayout>

        </MainLayout>
    )
}

export default About