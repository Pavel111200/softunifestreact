const baseUrl = 'https://localhost:44366/api/';

export const getAllCompanies = async (accessToken) => {
    const response = await fetch(`${baseUrl}Companies/getAllVendors`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    }
    );

    return await response.json();
}

export const getCompanyByStr = async (str,accessToken) => {
    const response = await fetch(`${baseUrl}Companies/getByStr?str=${str}`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    }
    );

    return await response.json();
}
export const payWithCrypto = async (privateKey,amount,clientAccount,companyAccount) => {
    const response = await fetch(`${baseUrl}Clients/payWithCripto`, {
        method: 'POST',
        headers:{
            'accept': 'text/plain',
            'content-type': 'application/json',
        },
        body:JSON.stringify({
            clientPrivateKey: privateKey,
            amount: amount,
            companyAccount: clientAccount,
            clientAccount: companyAccount
          }),
    }
    );

    return await response.json();
}