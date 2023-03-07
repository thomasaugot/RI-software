import { SearchWorkerUrl } from "../utils/network";
import { token } from "../pages/Login/Login";

export const SearchWorkerFetch = async <T>( workerName: string, pageNum: number ): Promise<T> => {
    const res = await fetch(`${SearchWorkerUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
        body: JSON.stringify({
        needle: workerName,
        results_per_page: 8,
        page_num: pageNum
        })
    });

    const SearchWorkersData = await res.json();

    return SearchWorkersData.result;
}