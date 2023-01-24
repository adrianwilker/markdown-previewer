import React from 'react'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _input: ''
    }
  }

  forwardInput(event) {
    this.props.changeInput(event.target.value)
  }

  render() {
    return (
      <div id="editor-box">
        <div className="label">
          <h2>Editor:</h2>
        </div>
        <textarea
          value={this.props._input}
          id="editor"
          onChange={event => this.forwardInput(event)}
        ></textarea>
      </div>
    )
  }
}

export default Editor
