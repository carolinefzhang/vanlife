import React from 'react'

const useFetch = <T>(apiFunction: () => Promise<T>) => {
    const [data, setData] = React.useState<T | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<Error | null>(null)
    React.useEffect(() => {
        async function loadData() {
            setLoading(true)
            try {
                const data = await apiFunction()
                setData(data)
            } catch (err) {
                console.error(err)
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    return { data, loading, error }
}

export default useFetch