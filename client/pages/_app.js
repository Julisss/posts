import React, {useState} from "react";
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from './context';

function MyApp({ Component, pageProps }) {

    const updatePost = (id, title, text) => {
        const postChanges = {
            title,
            text
        }
        if(id) {
            fetch(`http://localhost:5000/update/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postChanges: postChanges
                })
            })
            .then(resp => resp.json())
            .then(response => console.log(response))
            .then(() => {
                window.location.reload()
            })
        }
    }

    return (
        <Context.Provider value={{updatePost}}>
            <Component {...pageProps} />
        </Context.Provider>
    )
}

export default MyApp