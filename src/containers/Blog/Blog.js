import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {

    render() {

        // You can use as many Routes in a page as you want
        // eg: <Route path="/" exact render={() => <h1>Home</h1>}/>
        //     <Route path="/" exact render={() => <h1>Home 2</h1>}/>
        return (
            <div>
                <header>
                    <nav>
                        <ul className="Blog__nav-list">
                            <li className="Blog__nav-list-item"><a href="/" className="Blog__nav-link">Home</a></li>
                            <li className="Blog__nav-list-item"><a href="/new-post" className="Blog__nav-link">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" exact render={() => <NewPost />}/>
            </div>
        );
    }
}

export default Blog;


/**
 * <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
 */