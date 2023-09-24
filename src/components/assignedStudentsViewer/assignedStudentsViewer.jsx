import './assignedStudentsViewer.css'
import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = `http://localhost:9000`;

class AssignedStudentsViewer extends Component {
    constructor(props) {
        super(props)
        console.log('Constructor')
        this.state = {
            assignedStudents: [],
            test: "red"
        }
        this.setState(this.getAssignedStudents)
    }

    async getAssignedStudents() {
        console.log('test')
        const res = await axios.get(apiUrl + '/candidates')
        console.log('test res', res.data)
        return res.data
    }

    render () {
        return (
            <div>
                <div class="asv-container">
                    <table>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Doe</td>
                            <td>John</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Smith</td>
                            <td>Jane</td>
                            <td>jane@example.com</td>
                        </tr>
                        <tr>
                            <td>Johnson</td>
                            <td>Alice</td>
                            <td>alice@example.com</td>
                        </tr>
                        <tr>
                            <td>Williams</td>
                            <td>Bob</td>
                            <td>bob@example.com</td>
                        </tr>
                        <tr>
                            <td>Jones</td>
                            <td>William</td>
                            <td>william@example.com</td>
                        </tr>
                        <tr>
                            <td>Davis</td>
                            <td>Michael</td>
                            <td>michael@example.com</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default AssignedStudentsViewer;