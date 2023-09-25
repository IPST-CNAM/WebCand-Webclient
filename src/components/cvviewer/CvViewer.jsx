import './CvViewer.css'
import React, { Component } from 'react';
import axios from 'axios';
import LocationWrapper from './LocationWrapper';

const apiUrl = `http://localhost:9000`;
// const testing = true


class CvViewer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cv: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        };

        
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        const id = queryParams.get('id');
        // console.log("id",id);
        let candidateId = id;
        // console.log("candidatid",candidateId);
        // let candidateId = 0
        // if(testing){
        //     candidateId = 5;
        // }else{
        //     candidateId = this.props.match.params.candidateId;
        // }
        this.fetchCandidateData(candidateId);
    }

    async fetchCandidateData(candidateId) {
        let found = false;
        try {
                // console.log("candidateIdfetch",candidateId);
                const res = await axios.get(apiUrl+'/registeredUsers');
                // console.log("res",res);
                for (let candidate of res.data) {
                    // console.log("candidate",candidate);
                    // console.log("id_registered_user",candidate.id_registered_user);
                    if(candidate.id_registered_user == candidateId){
                        // console.log("same")
                        this.setState({ 
                            // cv: res.data.cv,
                            firstName: candidate.first_name,
                            lastName: candidate.last_name,
                            email: candidate.email,
                            phoneNumber: candidate.phone_number,
                            cv: process.env.PUBLIC_URL + 'cv_viewer.pdf'
                        });
                        found = true;
                    }   
                }                
            // }
                if(!found){
                    alert('Candidate Not Found');
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
                    <p><b>Nom :</b> {this.state.lastName}</p>
                    <p><b>Prénom : </b>{this.state.firstName}</p>
                    <p><b>Email :</b> {this.state.email}</p>
                    <p><b>Numéro de téléphone :</b> {this.state.phoneNumber}</p>
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

export default LocationWrapper(CvViewer);