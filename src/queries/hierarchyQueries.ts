import { fetchEmployeesUrl, fetchOwnersUrl } from "../utils/network";
import { moveWorkerUrl } from '../utils/network';
import { hierarchyItem } from '../types/hierarchyTypes';

export const fetchEmployees = async (userId: number) => {
    console.log(userId)
    console.log(fetchEmployeesUrl(userId))
    const token = localStorage.getItem('token');

    const response = await fetch(fetchEmployeesUrl(userId), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },

    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.result;
}

export const fetchOwners = async (companyId: number):Promise<hierarchyItem[]> => {
    const token = localStorage.getItem('token');

    const response = await fetch(fetchOwnersUrl(companyId), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.result;
}

export const fetchTeam = async (employeeId: number) => {
    const token = localStorage.getItem('token');

    const responce = await fetch(moveWorkerUrl(employeeId), {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        },
    });

    const responseJson = await responce.json();

    return responseJson.result;
}