
import Avatar from '@components/Avatar'
import Circles from '@components/Circles'
import {fadeIn} from '@utils/variants'
import {motion} from 'framer-motion'
import {useState} from 'react'

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";

interface InfoSharedProps {
    title: string;
}

interface IconsProps {
    key: number;
    iconName: JSX.Element;
}

interface InfoProps extends InfoSharedProps {
    icons: IconsProps[];
}

interface AboutDataProps extends InfoSharedProps {
    info: InfoProps[];
}

const aboutData: AboutDataProps[] = [
    {
        title: 'Skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    {key: 1, iconName: <FaHtml5 />},
                    {key: 2, iconName: <FaCss3 />},
                    {key: 3, iconName: <FaJs />},
                    {key: 4, iconName: <FaReact />},
                    {key: 5, iconName: <SiNextdotjs />},
                    {key: 6, iconName: <SiFramer />},
                    {key: 7, iconName: <FaWordpress />},
                    {key: 8, iconName: <FaHtml5 />},
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [
                    {key: 1, iconName: <FaHtml5 />},
                    {key: 2, iconName: <FaCss3 />},
                    {key: 3, iconName: <FaJs />},
                    {key: 4, iconName: <FaReact />},
                    {key: 5, iconName: <SiNextdotjs />},
                    {key: 6, iconName: <SiFramer />},
                    {key: 7, iconName: <FaWordpress />},
                    {key: 8, iconName: <FaHtml5 />},
                ],
            },
        ]
    },
    //{title: 'Awards'},
    //{title: 'Experience'},
    //{title: 'Credentials'},
]

const AboutPage = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles />
            {/* avatar */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 -left-[370px]'>
                <Avatar />
            </motion.div>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>text</div>
                <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}>
                                    {/* title */}
                                    <div>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage