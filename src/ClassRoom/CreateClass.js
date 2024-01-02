import React, { useState } from 'react';
import { AddClass } from '../API/API';

const CreateClass = ({ closeModal }) => {
    const [teacherData, setTeacherData] = useState({
        name: '',
        email: '',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AddClass(teacherData);
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Teacher Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={teacherData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={teacherData.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={teacherData.subject}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateClass;
