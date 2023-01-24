import React from 'react'
import Editor from './Editor'
import Previewer from './Previewer'

class MarkdownBox extends React.Component {
  constructor() {
    super()
    this.state = {
      _input:
        "# This is a h1 element\n## This is a h2 element\n### This is a h3 element\n#### This is a h4 element\n##### This is a h5 element\n###### This is a h6 element\n\n[This is a link!](https://github.com/adrianwilker)\nor <https://github.com/adrianwilker>\n\nThis is a ```code``` in line\n\nA block code:\n```javascript\n// a js code block\nconsole.log('Hello world!');\n```\nA ordered list:\n1. january\n2. february\n3. march\n4. april\n\nA unordered list:\n- dog\n- cat\n- bird\n   - arara\n- platypus\n\nA blockquote:\n> '2B or ¬2B' - Hamlet\n\nA **bold** text\n\n A *italic* text\n\nA ~~mistaken~~ text\n\nA *_bold and italic_* text\n\n A <sub>subscript</sub> text\n\nA <sup>superscript</sup> text\n\nA to-do list\n- [x] pet my dog\n- [ ] study react\n- [ ] read a book\n\n![An image of a very cute kitty](https://i.pinimg.com/originals/88/9f/07/889f071a5ea4d14e457ccb4efb455c2c.jpg)"
    }
  }

  render() {
    return (
      <div id="box">
        <Editor
          changeInput={this.changeInput.bind(this)}
          _input={this.state._input}
        />
        <Previewer output={this.state._input} />
      </div>
    )
  }

  changeInput(input) {
    this.setState({ _input: input })
  }
}

export default MarkdownBox
