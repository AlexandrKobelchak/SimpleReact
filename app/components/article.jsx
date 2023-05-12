const React = require("react");

class Article extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.content}</p>
    }
}

module.exports=Article;