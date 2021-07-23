import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const About = () => {

    return (
        <MainLayout>
            <h1>About</h1>
            <hr />
            <p>This site was created to show react and next skills of the author.</p>
                <ol>
                    <li>By pushing 'New post' button you can create a new post.</li>
                    <li>At the Posts page you can see all created posts you have.<br/>
                        Also there clicking "edit" button you can edit post, for instanse:
                        <ul>
                            <li>- to change content;</li>
                            <li>- to delete the post;</li>
                            <li>- to cancel your attemp to change;</li>
                        </ul>
                    </li>
                </ol>
            <p>All posts are stored in json file on the server. This site was supposed to show front end skills not back end.</p>
            <style jsx>{`
                ul, ol {
                    margin-left: 15px;
                    margin-bottom: 15px;
                    margin-top: 15px;
                }
            `}</style>
        </MainLayout>
    )
}


export default About