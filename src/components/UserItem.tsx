"use client"
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
export default function UserItem() {
    return (
        <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
            <div className='rounded-full min-w-[50px] min-h-[50px] bg-red-500 text-center flex items-center justify-center'>
            <p className='text-white font-[700]'>PB</p>
            </div>
            <div className='grow'>
            <p className='text-[14px] font-bold'>Patrick Bijampola</p>
            <p className='text-[12px]'>bijampolapatrick@gmail.com</p>
            </div>
        </div>
    )
}