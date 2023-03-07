import { moveWorkerUrl } from "../utils/network"; 
import { workerResponse, workersTypes } from "../types/types";

export const workersForMoveFetch  = async (employeeId: number): Promise<workersTypes | undefined> => {
    const token = localStorage.getItem('token');
    try{
        const workersForMove = await fetch(moveWorkerUrl(employeeId), {
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

export const onMoveWorkerFetch = async (employeeId: number, team: boolean, newLeaderUserId: number, employeeToBeMovedUserId: number): Promise<workerResponse | undefined> => {
    const token = localStorage.getItem('token');
    try{
        let data = {
            employee_to_be_moved_user_id: employeeToBeMovedUserId,
            new_leader_user_id: newLeaderUserId,
            move_with_team: team
        }

        const movedworker = await fetch(moveWorkerUrl(employeeId), {
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