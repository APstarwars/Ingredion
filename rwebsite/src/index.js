import React from 'react';
import ReactDOM from 'react-dom';

// Credit to Purgatory on Stackoverflow for the code snippet
class FileInput extends React.Component {
    constructor(props) {
      super(props)
      this.uploadFile = this.uploadFile.bind(this);
    }
    
    uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);
        
        if (file) {
          let data = new FormData();
          data.append('file', file);
        }
    }
    
    render() {
      return <span>
        <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      </span>
    }
}

ReactDOM.render(<FileInput />, document.getElementById('root'));