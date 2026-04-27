const BASE_URL = import.meta.env.VITE_API_BASE_URL


export const fetchHeroes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/heroes`)

        return response.json()
    } catch (error) {
        console.error("Error fetching heroes! ", error)
    }
}

export const fetchHeroDataByKey = async (key) => {
    try {
        const response = await fetch(`${BASE_URL}/heroes/${key}`)

        return response.json()
    } catch (error) {
        console.error("Error fetching hero! ", error)
    }
}
