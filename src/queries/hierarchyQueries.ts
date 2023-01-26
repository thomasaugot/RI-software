import { token } from "../pages/Login/Login";
import { FetchHierarchyUrl } from "../utils/network";


export const fetchLeaderData = async () => {
    try {
        const response = await fetch(`${FetchHierarchyUrl}8`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer  ${token}`,
            },

        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// lead data

export const fetchTeamLeadData = async (id : any) => {
    try {
        const response = await fetch(`${FetchHierarchyUrl}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer  ${token}`,
            },

        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const fetchWorkerData = async (id : any) => {
    try {
        const response = await fetch(`${FetchHierarchyUrl}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer  ${token}`,
            },

        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}