class Application extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Markdown Live Preview</h1>
              <hr />
            </div>
          </div>
          <UserInput />
        </div>
      )
    }
  }
  
  class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        md: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")'
      };
    }
    
    updatePreview(e) {
      this.setState({md: e.target.value});
    }
    
    render() {
      return (
        <div className="row">
          <div className="col-md-6">
            <br></br>
            <h4 className="text-center">ENTER MARKDOWN</h4>
            <textarea type="text" className="md-input" value={this.state.md} onChange={this.updatePreview.bind(this)}/>
          </div>
          <div className="col-md-6">
            <br></br>
            <br></br>
            <h4 className="text-center">RESULT</h4>
            <MarkdownPreview markdown={this.state.md} />
          </div>
        </div>
      )
    }
  }
  
  
  class MarkdownPreview extends React.Component {
    
    createMarkup() {
      return { __html: marked(this.props.markdown) }
    }
    
    render() {
      return (
        <div className="well" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      )
    }
  }
  
  React.render(<Application />, document.getElementById('app'));