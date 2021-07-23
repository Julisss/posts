import React, {  useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from '../../assets/im.jpg';
import { Context } from '../context';
import { IItem } from '../../interfaces'

interface PostProps {
    item: IItem,
    deletePost (id: number): void
}

const Post: React.FC<PostProps> = ({item, deletePost}) => {
    const router = useRouter();

    const [title, setTitle] = useState(item.title);
    const [text, setText] = useState(item.text);

    const {updatePost} = useContext(Context);

    const [edit, setEdit] = useState(false);

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }

    const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setText(e.target.value)
    }

    const changeEditMode = () => {
        setEdit(prev => {
            console.log(prev)
            return !prev
        })
    }

    const cutTheText = (text: string): string => {
        const newText = text.slice(0, 25);
        return newText
    }

    return (
        <Card className="card-item" key={item.id} style={{ width: '20rem', marginBottom: '20px'}}>
            <Card.Img variant="top" src={Image.src} />
            <Card.Body>
                { edit ? <input className="input-field mb-2" defaultValue={title} onChange={titleHandler} /> : <Card.Title>{item.title}</Card.Title> }
                { edit ? <textarea className="text-field" defaultValue={text} onChange={textHandler} />  : <Card.Text>{cutTheText(item.text)+'...'}</Card.Text> }
                <div className="d-flex justify-content-end mt-2">
                    { 
                    edit 
                    ?
                    <>
                        <Button className="mr-2" variant="danger" onClick={() => deletePost(item.id)}>Delete</Button>
                        <Button className="mr-2" variant="success" onClick={() => updatePost(item.id, title, text)}>Update</Button>
                    </>
                    :
                    <Button 
                        className="mr-2"
                        variant="primary" 
                        onClick={() => router.push(`/posts/${item.id}`)}
                        disabled={edit}
                    >
                        Go to
                    </Button>
                    }
                    <Button variant="warning" onClick={changeEditMode}>
                        {edit?"Cancel":"Edit" }
                    </Button>
                </div>
            </Card.Body>

            <style jsx>{`
                .input-field {
                    width: 100%;
                    border-radius: 5px;
                    border: 1px solid gray;
                }

                .text-field {
                    width: 100%;
                    min-height: 100px;
                    border-radius: 10px;
                    border: 1px solid gray;
                }
            `}</style>
        </Card>
    )
}

export default Post