import React, { useState } from 'react';
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import AddNew from './AddNew'

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        
            <nav className="navigation">
                <div className="container">
                    <ul className="menu">
                        <li className="menu-item">
                            <Link href='/'><a>Home</a></Link>
                        </li>
                        <li className="menu-item">
                            <Link href='/about'><a>About</a></Link>
                        </li>
                        <li className="menu-item">
                            <Link href='/posts'><a>Posts</a></Link>
                        </li>
                        <li className="menu-item">
                            <Button className="btn-primary" onClick={handleShow}><a>New post</a></Button>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddNew handleClose={handleClose} show={show}/>

            <style jsx>{`
                .navigation {
                    background: black;   
                }
                .menu {
                    display: flex;
                    padding: 20px 0;
                    align-items: center;
                }
                .menu-item {
                    margin-right: 15px;
                }
                .menu-item a {
                    color: white;
                }
            `}</style>
        </>
    )
}

export default Header