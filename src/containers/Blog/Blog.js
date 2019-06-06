import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    // Best place in React to make http requests 'componentDidMount' :D
    async componentDidMount() {
        try {
            // GET request to the API
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            // will hold only the first four posts from the retrieved data
            const posts = response.data.slice(0, 4); 

            const updatedPosts = posts.map( post => {
                // adding author to the current information of each updatedPosts
                return {
                    ...post, 
                    author: 'Mad Marcio'
                };
            });

            this.setState({ posts: updatedPosts });
        } catch {
            console.log('oops!');
        }
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;