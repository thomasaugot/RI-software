import { token } from "../pages/Login/Login";

import { moveWorkerUrl } from "../utils/network"; 
import { workerResponse, workersTypes } from "../types/types";

export const workersForMoveFetch  = async (): Promise<workersTypes | undefined> => {
    try{
        const workersForMove = await fetch(moveWorkerUrl, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        const workersForMoveJson = await workersForMove.json();

        return workersForMoveJson.result;
    }catch(error){
        console.log(error)
    }
}

export const onMoveWorkerFetch = async (team: boolean, newLeaderUserId: number, employeeToBeMovedUserId: number): Promise<workerResponse | undefined> => {
    try{
        let data = {
            employee_to_be_moved_user_id: employeeToBeMovedUserId,
            new_leader_user_id: newLeaderUserId,
            move_with_team: team
        }

        const movedworker = await fetch(moveWorkerUrl, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
        })

        const movedworkerJson = await movedworker.json();

        return movedworkerJson;
    }catch(error){

    }
} 

export const filterWorkersForMove = (workersForMove: workersTypes, search: string) => {
    const filterSearch: string  = search.toLocaleLowerCase();
    const newFilterWorkers = workersForMove.filter((workers_value) => {
        const WorkerNameLc = workers_value.name.toLocaleLowerCase();
        return WorkerNameLc.includes(search);
      })
  
    return newFilterWorkers
}