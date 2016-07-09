let React = require('react');
let ReactDOM = require('react-dom');

class Test {
    constructor(){
        console.log('Hello, World!');
    }
}

let CommentBox = React.createClass({
  render: function() {
      let test = new Test();
      
    return (
      <div className="commentBox">
        Hello, World!
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
); 