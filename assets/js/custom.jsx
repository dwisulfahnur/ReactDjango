import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Button extends Component {
    render() {
        return (
            <button>{this.props.value}</button>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
                <Button value="Hello"/>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById("mainApp"));