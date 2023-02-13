
const baseUrl = "http://127.0.0.1:5000/";

export const RegisterUrl  = baseUrl + "api/signup"
export const VerifyRegUrl  = baseUrl + "api/verifyy"
export const FetchHierarchyUrl = baseUrl + "api/hierarchy/employees/";
export const moveWorkerUrl = baseUrl + "api/hierarchy/moving/";
export const loginUrl = baseUrl + 'api/login';
export const searchWorkersUrl = baseUrl + '/api/search/workers';
export const navbarUrl = (userId: number) => baseUrl + `/api/navbar/${userId}`;

