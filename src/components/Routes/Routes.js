import React from 'react';
// Switch will make sure that only one route is shown on the screen
import { Route, Switch } from 'react-router-dom'; // NavLink instead of just Link is for inline-shit-styles, which I will not add

import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';

const routes = props => (
    <div>
        {/*<Route path="/" exact render={() => <Posts />}/>
                    <Route path="/new-post" exact render={() => <NewPost />}/>*/}

        <Switch>
            <Route path="/new-post" component={NewPost} />
            <Route path="/posts" component={Posts} />
            {/* ':name' is a special dynamic property(route parameter),
                        since we need to retrieve a specific FullPost 
        <Route path="/posts/:id" exact component={FullPost} />*/}
        </Switch>
    </div>
);

export default routes;