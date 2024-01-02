import React from 'react';
import { buttonStyle } from '../helper';

const AddClassButton = ({ setisOpen, setType }) => {

    return (
        <button style={buttonStyle} onClick={() => { setisOpen(true); setType("NewClass")}}>
            Add New Class
        </button>
    );
};

export default AddClassButton;
