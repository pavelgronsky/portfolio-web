'use client'

import {AnimatePresence, motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import {useRouter} from 'next/router'

interface PageAnimatePresenceProps {
    children: JSX.Element[]
}

const PageAnimatePresence = ({children}: PageAnimatePresenceProps) => {
    const router = useRouter()

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={router.route} className='h-full'>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageAnimatePresence