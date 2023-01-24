import React from 'react'
import { marked } from 'marked'

class Previewer extends React.Component {
  toMarkup(output) {
    return { __html: marked.parse(this.checkCarriageReturn(output)) }
  }

  checkCarriageReturn(output) {
    return output.replace(/\r\n|\r|\n|\s\s\r\n/gi, `  \r\n`)
  }

  render() {
    return (
      <div id="previewer-box">
        <div className="label">
          <h2>Preview:</h2>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={this.toMarkup(this.props.output)}
        ></div>
      </div>
    )
  }
}

export default Previewer
