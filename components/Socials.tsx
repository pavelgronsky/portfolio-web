import Link from 'next/link'
import {
    RiLinkedinBoxLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiPinterestLine,
} from 'react-icons/ri'


const socialItems = [
    {link: 'https://www.linkedin.com/in/pavelgronsky', iconElement: <RiLinkedinBoxLine />},
    {link: 'https://instagram.com/pavelgronsky', iconElement: <RiInstagramLine />},
    {link: 'https://www.facebook.com/pavelgronsky', iconElement: <RiFacebookBoxLine />},
]

const Socials = () => {
    return (
        <div className='flex items-center gap-8 text-lg'>
            {socialItems.map((socialItem, index) => {
                return <Link
                    key={index}
                    href={socialItem.link}
                    target="_blank"
                    className='hover:text-accent transition-all duration-300'>
                    {socialItem.iconElement}
                </Link>
            })}
        </div>
    )
}

export default Socials