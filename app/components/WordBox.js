import React from 'react';

class WordBox extends React.Component {
  render () {
    return(
      <div className="wordbox" >
        {this.props.wordList.map((array, index) => <span key={index}> {array.map((object, index) => <span key={index} className={object.status}>{object.letter}</span>)}</span>)}
      </div>
    )
  }
}

export default WordBox;
