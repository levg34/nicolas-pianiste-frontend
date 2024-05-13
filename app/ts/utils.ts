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
