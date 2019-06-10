import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    // Best place in React to make http requests 'componentDidMount' :D
    async componentDidMount() {
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
            // console.log('[Blog.js] has something wrong! ' + err);
            this.setState({ error: true });
        }
    }

    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Sorry, the posts weren't found!</p>

        if (!this.state.error)
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={this.postSelectedHandler.bind(this, post.id)} />
            });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;