import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';

class Routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    {/* Configures route for main component i.e. Header */}
                    <div>
                        <Route exact path="/" component={Home} />
                        {/* <!--Configures route for Login component-->  */}
                        <Route path="/Home" component={Home} />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Routes;