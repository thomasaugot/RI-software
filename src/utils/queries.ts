export const authorizedRequest = async (url: string, method: string) => {
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    
    console.log(response)

    if(response.status === 200){
        return await response.json();
    }else if(response.status === 401){
        window.location.href = 'http://127.0.0.1:3000/';
    }else{
        return response.status
    }
    
}

export const unauthorizedRequest = async (url: string, method: string) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response;
}