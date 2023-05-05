import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {GiBrain} from "react-icons/gi"
import {SiOpenai} from "react-icons/si"
import {GoBook} from "react-icons/go"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
    title: 'GPT-3',
    path: '/gpt3',
    icon: <GiBrain/>,
    cName: 'nav-text',
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        },
        {
            title: 'What Is GPT?',
            path: '/whatisgpt',
            icon: <FaIcons.FaQuestionCircle/>,
            cName: 'nav-text',
            },
            {
                title: 'Open AI',
                path: '/openai',
                icon: <SiOpenai/>,
                cName: 'nav-text',
                },
                {
                    title: 'Case Studies',
                    path: '/casestudies',
                    icon: <GiIcons.GiNotebook/>,
                    cName: 'nav-text',
                    },
                    {   
                        title: 'Library',
                        path: '/library',
                        icon: <GoBook/>,
                        cName: 'nav-text',
                        },
]