type Props = {
    id?: string
    children: React.ReactNode
}

export default function Container({ id, children }: Props) {
    return (
        <div id={id} className="container">
            {children}
        </div>
    )
}
