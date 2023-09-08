import './EvaluationGridForm.css'
import React, { Component } from "react";
import ReactDOM from 'react-dom';

// buld the form
const labels = ["Orthographe", "Expression", "Anglais", "Maths", "Informatique"];

function generateTableRows() {
    return labels.map((label, index) => (
      <div className="row" key={index}>
        <div className="cell">
            <label id='label'>{label}</label>
            <input type='text' id="label-<%= index%>" name={index} value={label} hidden></input>
        </div>
        <div className="cell">
            <input type="number" id="note-<%= index%>" name={index} min="0" max="10" step="0.01" placeholder="0.00"/>
        </div>
        <div className="cell">
            <input type="text" id="comment-<%= index%>" name={index} placeholder=""/>
        </div>
      </div>
    ));
}      

function Table() {
    return (
      <div className="table">
        <div class="row">
            <div class="cell">Critère</div>
            <div class="cell">Note /10</div>
            <div class="cell">Info Complémenaire</div>
        </div>
        {generateTableRows()}
      </div>
    );
}

ReactDOM.render(<Table />, document.getElementById('form'));

// get data from the form
class EvaluationGridForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datamap: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        var preparedatamap = [];
        preparedatamap.push(labels);
        labels.map(index => {
            var rownumber = index;
            var rowcontent = document.getElementsByName(rownumber);
            rowcontent.forEach(element => {
                loclabel = document.getElementById('label-'.rownumber);
                locnote = document.getElementById('note-'.rownumber);
                loccomment = document.getElementById('comment-'.rownumber);
            });
            preparedatamap.push([loclabel, locnote, loccomment])
        });
        this.setState(
            {datamap: preparedatamap}
        );
        
        const res = (
            this.state.datamap
        );
        alert("Le formulaire a été enregistré.");
        localStorage.setItem('evaluationGridForm', JSON.stringify(res));
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div id="form"></div>
            <div>
                <input className='btn' type="submit" value="Enregistrer" />
                <input className='btn' type="reset" value="Annuler" />
            </div>
        </form>
      );
    }
}

export default EvaluationGridForm;
