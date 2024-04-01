import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {HiHome, HiUser} from 'react-icons/hi'
import {HiChatBubbleBottomCenterText, HiEnvelope, HiRectangleGroup, HiViewColumns} from 'react-icons/hi2'

interface NavData {
    name: string
    path: string
    iconName: JSX.Element
}

const navData: NavData[] = [
    {name: 'home', path: '/', iconName: <HiHome />},
    {name: 'about', path: '/about', iconName: <HiUser />},
    {name: 'services', path: '/Services', iconName: <HiRectangleGroup />},
    {name: 'work', path: '/Work', iconName: <HiViewColumns />},
    {name: 'testimonials', path: '/Testimonials', iconName: <HiChatBubbleBottomCenterText />},
    {name: 'contact', path: '/Contact', iconName: <HiEnvelope />},
]

const Navigation = () => {
    const pathname = usePathname()

    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
        >
            <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10
        px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm
        text-3xl xl:text-xl xl:rounded-full"
            >
                {navData.map((link, index) => {
                    return <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
                        key={index}
                        href={link.path}>
                        {/* tooltip  */}
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div
                                className="bg-white relative flex text-primary items-center p-[6px]
            rounded-[3px]"
                            >
                                <div className="text-[12px] leading-none capitalize">
                                    {link.name}
                                </div>
                                {/*triangle */}
                                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                            </div>
                        </div>
                        {link.iconName}
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default Navigation

//{
//    navData?.map((navItem, index) => {
//        return (
//            <div
//                className={`${navItem.path === pathname && 'text-accent'}
//        relative flex items-center group hover:text-accent transition-all duration-300`}
//            >
//                <a href={navItem.path}>
//                    <Icon name={navItem.iconName} />
//                </a>
//                {/* tooltip  */}
//                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
//                    <div
//                        className="bg-white relative flex text-primary items-center p-[6px]
//            rounded-[3px]"
//                    >
//                        <div className="text-[12px] leading-none capitalize">
//                            {navItem.name}
//                        </div>
//                        {/*triangle */}
//                        <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
//                    </div>
//                </div>
//            </div>
//        )
//    })
//}