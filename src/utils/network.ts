const baseUrl = "http://127.0.0.1:5000/";

export const registerUrl = baseUrl + "api/verification/email/send";
export const VerifyRegUrl = baseUrl + "api/verification/email/verify";
export const fetchEmployeesUrl = (companyId: number, employeeId: number) => baseUrl + `api/hierarchy/employees/${companyId}/${employeeId}`;
export const fetchOwnersUrl = (companyId: number) => baseUrl + `api/hierarchy/owners/${companyId}`;
export const fetchLeadersUrl = (companyId: number, employeeId: number) => baseUrl + `api/hierarchy/leaders/${companyId}/${employeeId}`;
export const moveWorkerUrl = (employeeId: number) => baseUrl + `api/hierarchy/moving/${employeeId}`;
export const loginUrl = baseUrl + 'api/login';
export const searchWorkersUrl = baseUrl + 'api/search/workers';
export const whoAmIUrl = baseUrl + 'api/whoami';
export const navbarUrl = (userId: number) => baseUrl + `api/navbar/${userId}`;
export const updateStatusUrl = baseUrl + 'api/profile/updateStatus';
export const refreshUrl = baseUrl + 'api/refresh';
export const SearchWorkerUrl = baseUrl + "api/search/workers";
export const hireUrl = baseUrl + 'api/hierarchy/hire';
export const chatInfoById = (chatId: string) => baseUrl + `api/chats/get/chat/${chatId}`
export const sendChatMessageUrl = (chatId: string, chatMessage: string) => baseUrl + chatId // we do not have an endpoint for sending messages
