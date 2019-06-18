import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    // Best place in React to make http requests 'componentDidMount' :D
    async componentDidMount() {

        //console.log(this.props);

        try {
            // GET request to the API
            const response = await axios.get('/posts');

            // will hold only the first four posts from the retrieved data
            const posts = response.data.slice(0, 4);

            const updatedPosts = posts.map(post => {
                // adding author to the current information of each updatedPosts
                return {
                    ...post,
                    author: 'Mad Marcio'
                };
            });

            this.setState({ posts: updatedPosts });
        } catch (err) {
            console.log('[Blog.js] has something wrong! ' + err);
            // this.setState({ error: true });
        }
    }

    postSelectedHandler = id => {

        // if one is selected, redirect to the fullpost
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Sorry, the posts weren't found!</p>

        posts = this.state.posts.map(post => {
            return ( // in here we use Link to consume the ':name' specified in the <Route>
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={this.postSelectedHandler.bind(this, post.id)} />
                </Link>
            );
        });

        return (
            <section className="Posts__topics">
                {posts}
            </section>
        );
    }
}

export default Posts;