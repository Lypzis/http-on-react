import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    /**
     * Sends a GET request for the 'post' data.
     * - Will firstly verify if an 'id' is available,
     * then, checks if there is no loadedPost OR
     * if there is a loadedPost AND its 'id' is different 
     * from the current 'id' available.
     * - These verifications will make sure that it won't 
     * become an infinite loop( only in case of 'componentDidUpdate') nor the same post will reaload.
     */
    async componentDidMount() {
        this.loadData();
    }

    async componentDidUpdate() {
        this.loadData();
    }

    async loadData() {
        if (this.props.match.params.id)
            if (!this.state.loadedPost ||
                (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id))  // the '+' converts the id string to a number :D
                try {
                    const response = await axios.get(`/posts/${this.props.match.params.id}`);

                    this.setState({ loadedPost: response.data });

                } catch (err) {
                    console.log('[FullPost.js] has something wrong! ' + err);
                }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log('[FullPost.js] has something wrong! ' + err);
            });
    };

    render() {
        let post = null;

        if (this.props.match.params.id)
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;

        if (this.state.loadedPost)
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        return post;
    }
}

export default FullPost;