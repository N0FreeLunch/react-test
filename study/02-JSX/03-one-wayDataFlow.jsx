class App extends React.Component {
    render() {
        <div className="body">
            <MyComponent name="message" />
        </div>
    }
}

class MyComponent extends React.Component {
    render() {
        const name = this.props.name;
        return <span>{name}</span>
    }
}