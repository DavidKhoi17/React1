import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.notes = [
      {
        id: 1,
        text: 'Jordan 1'
      },
      {
        id: 2,
        text: 'Jordan 3'
      },
      {
        id: 3,
        text: 'Jordan 11'
      }
    ]
  }

  render(){
    //practicing git commit
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
            {
              this.notes.map((note)=>{
                return(
                  <div className="note">
                    <div className="note-body">
                      <i className="far fa-times-circle note-remove"></i>
                      <div className="note-text">
                        {note.text}
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
        
            <div className="note new-note">
              <form className="note-body">
                  <div className="form-group">
                    <label htmlFor="note-input">New note</label>
                    <input type="text" className="form-control" id="note-input"></input>
                  </div>
                  <button type="submit" className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
	    </div>
    )
  }
}
export default App;