import React from 'react';
// Switch will make sure that only one route is shown on the screen
import { Route, Switch } from 'react-router-dom'; // Redirect. NavLink instead of just Link is for inline-shit-styles, which I will not add

import Posts from '../../containers/Blog/Posts/Posts';

import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from '../../containers/Blog/NewPost/NewPost'; // with 'lazy loading', we do not want load scripts in this way anymore.
// instead, import it asynchronously when needed, as a Promise.
// Particularly usefull in big apps, where you don't want to load everything at once
const AsyncNewPost = asyncComponent(() => import('../../containers/Blog/NewPost/NewPost')); // dynamic 'import' syntax Promise --> var promise = import('module-name');

const routes = props => (
    <div>
        {/*<Route path="/" exact render={() => <Posts />}/>
                    <Route path="/new-post" exact render={() => <NewPost />}/>*/}

        <Switch>
            {/* if user is unauthenticated, it redirects to the first page,
            always wrapps the authentication around pages that NEED to be guarded */}
            {props.authenticated ? <Route path="/new-post" component={AsyncNewPost} /> : null}
            <Route path="/posts" component={Posts} />

            {/* Besides redirect, you can use this if user goes to an unkown address, or an error occurs :D.
            Note: It won't work with 'Redirect', since they will probably conflict.*/}
            <Route render={() => <h1>Not found!</h1>} />

            {/* <Redirect from="/" to="/posts" /> */}
            {/* ':name' is a special dynamic property(route parameter),
                        since we need to retrieve a specific FullPost 
            <Route path="/posts/:id" exact component={FullPost} />*/}
        </Switch>
    </div>
);

export default routes;