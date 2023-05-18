'use client'

import { FC, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CodeProps {
    codeString: string
}

const Code: FC<CodeProps> = ({ codeString }) => {
    const [displayedCode, setDisplayedCode] = useState('')

    useEffect(() => {
        const lines = codeString.split('\n')
        let i = 0

        const intervalId = setInterval(() => {
            if (i < lines.length) {
                setDisplayedCode((prev) => prev + '\n' + lines[i])
                i += 1
            }
            if (i >= lines.length) {
                clearInterval(intervalId)
            }
        }, 200)

        return () => clearInterval(intervalId)
    }, [codeString])

    return (
        <pre className="transition-all duration-300">
            <code className={cn('text-black dark:text-white transition-all duration-300')}>
                {displayedCode}
            </code>
        </pre>
    )
}

export default Code
