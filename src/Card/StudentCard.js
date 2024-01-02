import React, { useState } from "react";
import "./StudentCard.css";
import ModalFile from "../Modal/ModalFile";
import { deleteClass } from "../API/API";

const StudentCard = (props) => {
    const { name, email, subject, students, _id } = props?.data;
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="card">
            <ModalFile isOpen={isOpen} setisOpen={setisOpen} students={students} />
            <h3>Teacher Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Subject: {subject}</p>
            <p
                onClick={() => {
                    setisOpen(true);
                }}
                className="Number-Student-info"
            >
                <span>Number Student: {students?.length}</span>
                <span className="Number-Student-list" > Click here to see list</span>
            </p>
            <div className="Button-container" >
                <button
                    className="btn-primary-Add"
                    onClick={() => {
                        props?.setisOpen(true);
                        props?.setclassID(_id);
                        props?.setType();
                    }}
                >
                    Add Student
                </button>
                <button
                    className="btn-primary-remove"
                    onClick={() => {
                        deleteClass(_id);
                    }}
                >
                    Remove Class
                </button>
            </div>
        </div>
    );
};

export default StudentCard;
