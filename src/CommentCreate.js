import React, { useState } from "react";
import axios from 'axios';

export default({ postId })=> {
    const [content, setContent ] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return 
    <Div>
        <form onSubmit={onSubmit}>
            <Div className="form-group">
                <label>New Comment</label>
                <input 
                value = {content}
                onChange={e => setContent(e.target.value)}
                className="form-control"/>
            </Div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </Div>
};