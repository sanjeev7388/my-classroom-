import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../helper';
import './ModalFile.css'

const ModalFile = ({ isOpen, setisOpen, students }) => {
    function closeModal() {
        setisOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Student Form Modal"
                style={customStyles}
            >
                {
                    students?.length > 0 ?  students?.map((data) => {
                        return(
                            <div className='List_student' >
                                {data?.email}
                            </div>
                        )
                    }) : "No student is added in your class"
                }
            </Modal>
        </>
    );
};

export default ModalFile;