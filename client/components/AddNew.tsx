import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

type AddNewProps = {
    handleClose (): void,
    show: boolean
}

const AddNew: React.FC<AddNewProps> = ({handleClose, show}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const addPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            title,
            text
        }

        await fetch('http://localhost:5000/newpost', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: data
            })
        })
        .then(res => res.json())
        .then(response => {
            handleClose();
        })
        .then(() => window.location.reload())

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create new post</Modal.Title>
                </Modal.Header>
                <form onSubmit={addPost}>
                    <Modal.Body>
                        <div className="d-flex flex-column">
                            <label>
                                <p>Enter title of your post</p>
                                <input defaultValue={title} type="text" onChange={titleHandler}/>
                            </label>
                            <label>
                                <p>Enter text of your post</p>
                                <textarea defaultValue={text} onChange={textHandler}/>
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button className="btn btn-success" type="submit">Add Post</button>
                    </Modal.Footer>
                </form>
            </Modal>

            <style jsx>{`
                .form {
                    display: flex;
                    flex-flow: column;
                    align-items: flex-start;
                }
            `}</style>
        </>
    )
}

export default AddNew