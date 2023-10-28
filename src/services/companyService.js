const baseUrl = 'https://localhost:44366/api/Products';


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
