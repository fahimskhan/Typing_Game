import React from 'react';

class TextBox extends React.Component {
  render (){
    return(
      <div>
        <input className="inputbox" type="text" value={this.props.userInput} placeholder="Start typing..." onKeyPress={this.props.onInput}/>
      </div>
    )
  }
}

export default TextBox;
