import { SetStateAction } from "react";
import { token } from "../pages/Login/Login";
import { moveWorker } from "../types/types";
import { moveWorkerUrl } from "../utils/network";




export const moveWorkers = async ({ leader_id, team_moving }: moveWorker) => {
    let data = {
        leader_id,
        team_moving
    }
    const response = await fetch(`${moveWorkerUrl}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${token}`,
        },
    });
    const json = await response.json();
    return json;
}

