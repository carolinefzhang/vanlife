const apiUrl = import.meta.env.VITE_API_URL || "";
export async function getVans() {
    const response = await fetch(`${apiUrl}/api/vans`);
    if (!response.ok) {
        throw {
            message: `Failed to fetch vans: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}

export async function getVan(id: string) {
    const response = await fetch(`${apiUrl}/api/vans/${id}`);
    if (!response.ok) {
        throw {
            message: `Failed to fetch van: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}

function getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Token ${token}` })
    };
}

export async function getHostVans() {
    const response = await fetch(`${apiUrl}/api/host/vans`, {
        headers: getAuthHeaders()
    });
    if (!response.ok) {
        throw {
            message: `Failed to fetch host vans: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}

export async function getHostVan(id: string) {
    const response = await fetch(`${apiUrl}/api/host/vans/${id}`, {
        headers: getAuthHeaders()
    });
    if (!response.ok) {
        throw {
            message: `Failed to fetch host van: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${apiUrl}/api/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
        throw {
            message: `Failed to login: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    const data = await response.json();
    // Store the token in localStorage
    if (data.token) {
        localStorage.setItem('authToken', data.token);
    }
    return data;
}

export async function getHostIncome() {
    const response = await fetch(`${apiUrl}/api/host/income`, {
        headers: getAuthHeaders()
    });
    if (!response.ok) {
        throw {
            message: `Failed to fetch host income: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}

export async function getHostReviews() {
    const response = await fetch(`${apiUrl}/api/host/reviews`, {
        headers: getAuthHeaders()
    });
    if (!response.ok) {
        throw {
            message: `Failed to fetch host reviews: ${response.status} ${response.statusText}`,
            status: response.status
        };
    }
    return response.json();
}