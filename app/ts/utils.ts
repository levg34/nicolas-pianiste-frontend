export function formatDate(date: string, long?: boolean): string {
    let options: Intl.DateTimeFormatOptions

    if (long) {
        options = {
            weekday: 'short',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    } else {
        options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
    }

    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))
    return long ? formattedDate : formattedDate.replace(/\/|\s/g, '/')
}

export async function getIp(): Promise<string> {
    try {
        const response = await fetch('https://api.ipify.org')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: string = await response.text()
        return data
    } catch (error) {
        console.error('Error fetching IP information:', error)
        throw error
    }
}
