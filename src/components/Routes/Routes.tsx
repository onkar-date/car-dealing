import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SellCar from '../SellCar/SellCar';


class Routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    {/* Configures route for main component i.e. Header */}
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/sell-car" component={SellCar} />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Routes;