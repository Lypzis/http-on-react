import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; // NavLink instead of just Link is for inline-shit-styles, which I will not add

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {

    render() {

        // You can use as many Routes in a page as you want
        // eg: <Route path="/" exact render={() => <h1>Home</h1>}/>
        //     <Route path="/" exact render={() => <h1>Home 2</h1>}/>
        // use 'render' for messages, 'component' for ...components duh 
        // instead of 'a' tag, use 'Link' for links that lead to other part of the app
        // so the page won't reload each time a link is clicked
        return (
            <div>
                <header>
                    <nav>
                        <ul className="Blog__nav-list">
                            <li className="Blog__nav-list-item">
                                <Link
                                    to="/"
                                    className="Blog__nav-link">Home</Link>
                            </li>
                            <li className="Blog__nav-list-item">
                                <Link
                                    to={
                                        {
                                            pathname: '/new-post',
                                            hash: '#submit',
                                            search: '?quick-submit=true'
                                        }
                                    } className="Blog__nav-link">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" exact render={() => <NewPost />}/>*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

                {/* ':name' is a special dynamic property(route parameter),
                 since we need to retrieve a specific FullPost */}
                <Route path="/posts/:id" exact component={FullPost} /> 
                
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