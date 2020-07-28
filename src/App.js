import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: [
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
      ],
      color: 'rgb(235, 109, 25)',
      noteInputValue : ''
    }
  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
    // console.log(e.target)
  }

  handleAddBtn = (e)=>{
    console.log(e.target)
    e.preventDefault()
    var notes = {
      id: Date.now(),
      text: this.state.noteInputValue
    }
    var newNotes = [notes, ...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue: ''
    })
  }

  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes

    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })

    this.setState({notes:filteredNotes})
  }

  render(){
    //practicing git commit
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
            {
              this.state.notes.map((note)=>{
                return(
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleNoteDelete}></i>
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
                    <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.handleAddBtn}>Add</button>
              </form>
            </div>
          </div>
        </div>
	    </div>
    )
  }
}
export default App;