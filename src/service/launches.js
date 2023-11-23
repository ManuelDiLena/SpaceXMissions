const API_URL = 'https://api.spacexdata.com/v5';

// Function to get all data from API
export async function getAllLaunches() {
    try {
        const res = await fetch(`${API_URL}/launches`)
        const data = await res.json()

        return data

    } catch (e) {
        console.log(e)
    }
}

// Function to get a specific
export async function getLaunchById(id) {
    try {
        const res = await fetch(`${API_URL}/launches/${id}`)
        const data = await res.json()

        return data

    } catch (e) {
        console.error(e)
    }
}