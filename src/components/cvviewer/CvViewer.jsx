import './CvViewer.css'
import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = `http://localhost:8080`;
const testing = true
class CvViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cv: '',
            firstName: '',
            lastName: '',
            email: ''
        };

        
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let candidateId = 0
        if(testing){
            candidateId = 5;
        }else{
            candidateId = this.props.match.params.candidateId;
        }
        
        this.fetchCandidateData(candidateId);
    }

    async fetchCandidateData(candidateId) {
        try {
            if(testing){
                this.setState({
                    cv: process.env.PUBLIC_URL + 'cv_viewer.pdf',
                    firstName: 'Hadrien',
                    lastName: 'Cellier',
                    email: 'hadrien.cellier.auditeur@lecnam.net'
                });
            }else{
                const res = await axios.get(`${apiUrl}/getCandidateData/${candidateId}`);
                this.setState({ 
                    cv: res.data.cv,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email
                });
            }
            
        } catch(error) {
            alert('Erreur lors de la récupération des données du candidat: ' + error.message);
        }
    }

    render() {
        return (
            <><div>
                <h1>Visualisation CV</h1>
                <div className="block-info">
                    <p><b>Nom :</b> {this.state.lastName} <b>Prénom : </b>{this.state.firstName}</p>
                    <p><b>Email :</b> {this.state.email}</p>
                </div>
                <a href={this.state.cv} download={this.state.cv}>
                    <button>Télécharger PDF</button>
                </a>
                <div className="cv-container">
                    <embed src={this.state.cv} type="application/pdf"></embed>
                </div>
            </div></>
        );
    }
}

export default CvViewer;
