import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import Button from './Button';


class Button extends Component {
    render() {
        return (
            <button>{this.props.value}</button>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Django + React = Awesomeness </h1>
                <p>
                    <Button value="Hello"/>
                </p>
            </div>);
    }
}


ReactDOM.render(<Main/>, document.getElementById('react-app'));