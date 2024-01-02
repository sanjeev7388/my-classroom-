import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CreateClass from "./CreateClass";
import "./CreateClass.css";
import StudentForm from "../AddStudent/StudentForm";
import StudentCard from "../Card/StudentCard";
import AddClassButton from "../AddClass/AddClassButton";
import { customStylesForm } from "../helper";
import { GetClassData } from "../API/API";

const ClassRoom = () => {
    const [studentdata, setStudentdata] = useState();
    const [Postres, setPostres] = useState();
    const [isOpen, setisOpen] = useState(false);
    const [classID, setclassID] = useState();
    const [Type, setType] = useState();

    function closeModal() {
        setisOpen(false);
    }

    useEffect(() => {
        GetClassData(setPostres).then((result) => {
            setStudentdata(result);
        });
    }, [Postres]);

    return (
        <div className="Container">
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Student Form Modal"
                style={customStylesForm}
            >
                {Type == "NewClass" ? (
                    <CreateClass closeModal={closeModal} />
                ) : (
                    <StudentForm classID={classID} closeModal={closeModal} />
                )}
            </Modal>
            <AddClassButton setisOpen={setisOpen} setType={setType} />
            <div className="classCard">
                {studentdata?.length > 0 ?  studentdata?.map((data, index) => {
                    return (
                        <div key={index}>
                            <StudentCard
                                data={data}
                                setisOpen={setisOpen}
                                setclassID={setclassID}
                                setType={setType}
                            />
                        </div>
                    );
                }) : "No class is Create"}
            </div>
        </div>
    );
};

export default ClassRoom;
