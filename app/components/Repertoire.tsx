import { RepertoryData } from '~/model/repertory.server'

type Props = {
    repertory: RepertoryData[]
}

const Repertoire = ({ repertory }: Props) => {
    return (
        <div id="repertory" className="container bg-1">
            <h3 className="text-center">RÉPERTOIRE</h3>

            {repertory.map((group) => (
                <div key={group.title}>
                    <h4>{group.title}</h4>
                    {group.items.map((item) => (
                        <div key={item.title}>
                            {item.title && (
                                <p>
                                    <b>{item.title}</b>
                                </p>
                            )}
                            <ul>
                                {item.list.map((el) => (
                                    <li key={el}>{el}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Repertoire
