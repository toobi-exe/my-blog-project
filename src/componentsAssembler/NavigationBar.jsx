import bee from "../assets/bee.png"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
const NavigationBar = () => {
    return (
        <>
            <div className="w-screen h-20 flex items-center flex-row-reverse justify-between bg-zinc-700">
                <div className='flex justify-around items-center mr-0 w-1/3 flex-row-reverse '>
                    <Avatar className='m-1 p-0 h-10 w-10'>
                        <AvatarImage src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/250732313_1563403660671668_4904088135156697517_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0843LmFIC2oQ7kNvgE2LRE3&_nc_zt=23&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=AfwgVG5-kbgl7Xsvt-jOpBb&oh=00_AYD2TX6pyAiJK5RX-ai4GldbfM58H5DL_DsvT0Ykno_aDQ&oe=6750E4E0" />
                        <AvatarFallback>BA</AvatarFallback>
                    </Avatar>
                    <h1 className='uppercase m-0 p-0 text-white'>ben arbia yahya</h1>
                    <Button className="bg-zinc-900 text-slate-50">LogOut</Button>
                </div>
                <div className='flex items-center justify-around ml-10 w-20'>
                    <h1 className='text-slate-50 text-xl font-bold'>My <span className='text-amber-500'>B</span>log</h1>
                    <img src={bee} alt="beeLogo" className="w-5 invert" />
                </div>
            </div>
        </>
    )
}

export default NavigationBar