import React, { useState } from 'react';
import { AddStudent } from '../API/API';

const StudentForm = ({ classID, closeModal }) => {
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', studentData);
        AddStudent(classID, studentData);
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Student Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={studentData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={studentData.email}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
