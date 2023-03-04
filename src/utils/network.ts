
const baseUrl = "http://127.0.0.1:5000/";

export const RegisterUrl  = baseUrl + "api/verification/email/send";
export const VerifyRegUrl  = baseUrl + "api/verification/email/verify";
export const fetchEmployeesUrl = (userId: number) => baseUrl + `api/hierarchy/employees/${userId}`;
export const fetchOwnersUrl = (companyId: number) => baseUrl + `api/hierarchy/owners/${companyId}`;
export const moveWorkerUrl = (employeeId: number) => baseUrl + `api/hierarchy/moving/${employeeId}`;
export const loginUrl = baseUrl + 'api/login';
export const searchWorkersUrl = baseUrl + 'api/search/workers';
export const whoAmIUrl = baseUrl + 'api/whoami'; 
export const navbarUrl = (userId: number) => baseUrl + `api/navbar/${userId}`;
export const updateStatusUrl = baseUrl + 'api/profile/updateStatus';