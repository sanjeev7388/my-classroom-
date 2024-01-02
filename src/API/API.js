const baseUrl = "http://localhost:8000"

export async function deleteClass(id) {
    const data = fetch(`${baseUrl}/apidel/classes/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}

export async function AddClass(teacherData) {
    const data = await fetch(`${baseUrl}/api/classes`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacherData),
        }
    ).then((result) => {
        console.log(JSON.stringify(result), "resultresult")
    })
}

export async function GetClassData(setPostres) {
    const data = await fetch(`${baseUrl}/getclass`);
    setPostres(data);
    return await data.json();
}

export async function AddStudent(classID, studentData){
    const data = await fetch(`http://localhost:8000/api/classes/students/${classID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        }
    )
}