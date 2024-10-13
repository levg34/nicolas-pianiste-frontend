import { useState } from 'react'
import { getIp } from '~/ts/utils'
import botCheck from '~/svg/bot-check.svg'
import botOK from '~/svg/bot-ok.svg'
import botError from '~/svg/bot-error.svg'

interface IpCheckerProps {
    onIpChange?: (ip: string | undefined) => void
}

export const IpChecker: React.FC<IpCheckerProps> = ({ onIpChange }) => {
    const [ip, setIp] = useState<string>()
    const [ipError, setIpError] = useState<boolean>(false)

    const getClientIp = async () => {
        try {
            const newIp = await getIp()
            setIp(newIp)
            setIpError(false)
            onIpChange?.(newIp)
        } catch (e) {
            console.error(e)
            setIpError(true)
            onIpChange?.(undefined)
        }
    }

    return (
        <>
            <input hidden name="checkbots" value={ip || ''} readOnly />
            <div style={{ width: '250px', cursor: 'pointer' }} onClick={getClientIp}>
                <img src={ip ? botOK : ipError ? botError : botCheck} alt="Bot check status" />
            </div>
        </>
    )
}
