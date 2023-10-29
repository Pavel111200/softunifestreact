const baseUrl = 'https://localhost:7202/api/Products';


export const getAllProducts = async (companyId, accessToken) => {
    const response = await fetch(`${baseUrl}?companyId=${companyId}`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    }
    );

    return await response.json();
}

export const getAllProductsByCompanyName = async (name, accessToken) => {
    const response = await fetch(`${baseUrl}/CompanyName?companyName=${name}`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    }
    );

    return await response.json();
}

export const addProduct = async (data, companyId , accessToken) => {
    const response = await fetch(`${baseUrl}?companyId=${companyId}`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    }
    );

    return await response;
}
