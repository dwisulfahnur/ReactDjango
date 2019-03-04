import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from "./button";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
                <Button />
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById("mainApp"));