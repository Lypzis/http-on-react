import React, { Component } from 'react';

// Switch will make sure that only one route is shown on the screen
import { Link } from 'react-router-dom'; // NavLink instead of just Link is for inline-shit-styles, which I will not add

import Routes from '../../components/Routes/Routes';

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
                <Routes />
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