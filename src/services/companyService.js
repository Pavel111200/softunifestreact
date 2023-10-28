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