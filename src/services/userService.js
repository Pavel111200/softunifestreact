const baseUrl = 'https://localhost:7202/api';

export const loginCompany = (data) => {
   return fetch(`${baseUrl}/Companies/login` , {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json());
}

export const loginClient = (data) => {
    return fetch(`${baseUrl}/Clients/login` , {
         method: 'POST',
         headers: {
             'content-type': 'application/json',
         },
         body: JSON.stringify(data),
     })
     .then(res => res.json());
 }

export const registerCompany = (data) => {
    return fetch(`${baseUrl}/Companies/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res=> res.json());
}

export const registerClient = (data) => {
    return fetch(`${baseUrl}/Clients/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res=> res.json());
}