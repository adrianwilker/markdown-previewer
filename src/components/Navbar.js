import React from 'react'

class Navbar extends React.Component {
  fontSize() {
    var editorFontSize = Number(
      window
        .getComputedStyle(document.getElementById('editor'))
        .fontSize.substring(0, 2)
    )
    var previewFontSize = Number(
      window
        .getComputedStyle(document.getElementById('preview'))
        .fontSize.substring(0, 2)
    )

    if (editorFontSize <= 17 || editorFontSize <= 20) {
      document.getElementById('editor').style.fontSize =
        String(editorFontSize + 1) + 'px'
      document.getElementById('preview').style.fontSize =
        String(previewFontSize + 1) + 'px'
    } else {
      document.getElementById('editor').style.fontSize = '14px'
      document.getElementById('preview').style.fontSize = '17px'
    }
  }

  changeTheme() {
    var className = document.getElementById('theme-mode').className
    if (className === 'fa fa-sun-o') {
      document.getElementById('theme-mode').className = 'fa fa-moon-o'
      document.getElementsByTagName('html')[0].className += ' dark-mode'
    } else {
      document.getElementById('theme-mode').className = 'fa fa-sun-o'
      document.getElementsByTagName('html')[0].classList.remove('dark-mode')
    }
    //window.alert(html)
  }

  render() {
    return (
      <header>
        <div></div>
        <h1>Markdown Viewer</h1>
        <div>
          <i
            title="Change theme"
            id="theme-mode"
            className="fa fa-sun-o"
            onClick={this.changeTheme}
          ></i>
          <i
            title="Change font size"
            id="font-size"
            className="fa fa-text-height"
            onClick={this.fontSize}
          ></i>
        </div>
      </header>
    )
  }
}

export default Navbar
