"use client"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import UserItem from "./UserItem";
import { Bell, Inbox, LockKeyhole, Logs, Receipt, Settings, User } from "lucide-react";

export default function SideBar() {
  const menuLIst =[
    {
      group:"General",
      items:[
        {
          link:"/",
          icon: <User/>,
          text:"Profile"
        },
        {
          link:"/",
          icon:<Inbox/> ,
          text:"Inbox"
        },
        {
          link:"/",
          icon:<Receipt/> ,
          text:"Billing"
        },
        {
          link:"/",
          icon:<Bell/> ,
          text:"Notifications"
        },
      ]
    },
    {
      group:"Settings",
      items:[
        {
          link:"/",
          icon:<Settings/> ,
          text:"General Settings"
        },
        {
          link:"/",
          icon:<LockKeyhole/> ,
          text:"Privacy and Security"
        },
        {
          link:"/",
          icon:<Logs/> ,
          text:"Logs"
        }
      ]
    }
  ]
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4 ">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{overflow:"visible"}}>
          <CommandList style={{overflow:"visible"}}>
            {menuLIst.map((menu:any,key:number)=>(
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option:any,optionKey:number)=>(
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
           
          </CommandList>
        </Command>

      </div>
      <div>Setting/Notification</div>
    </div>
  );
}