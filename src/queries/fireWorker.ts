export const handleDelete = async (employeeId: number) => {
    try {
        const data = {
            employee_id: employeeId,
        }
        const response = await fetch('http://localhost:5000/api/hierarchy/fire', {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json
    } catch (err) {
        console.log(err)
    }
}



export const fireEmployee = async (employeeId: number) => {
    const response = await fetch('http://localhost:5000/api/hierarchy/fire', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ employee_id: employeeId, with_team: false })
    })
    const data = await response.json()
    if (data.error) {
        alert(data.error)
        return
    }

    alert('User was fired')
    // code to remove user from UI
}

export const fireEmployeeWithTeam = async (employeeId: number) => {
    const response = await fetch('http://localhost:5000/api/hierarchy/fire', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ employee_id: employeeId, with_team: true })
    })

    const data = await response.json()
    if (data.error) {
        alert(data.error)
        return
    }

    alert('User and his team were fired')
    // code to remove user and team from UI
}