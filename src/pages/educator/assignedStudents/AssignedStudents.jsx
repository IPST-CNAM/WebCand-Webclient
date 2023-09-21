import "./AssignedStudents.css"
import React from "react";
import AssignedStudentsViewer from "../../../components/assignedStudentsViewer/assignedStudentsViewer.jsx";

const AssignedStudents = () => {
    return (
        <div>
            <div class="AssignedStudentsContainer">
                <div class="feature-title-container">
                    <h1>Elèves assignés</h1>
                </div>
                <AssignedStudentsViewer/>
            </div>
        </div>
    );
};

export default AssignedStudents