import SideNav from "../ui/dashboard/sidenav";
// 导入仪表盘模板SideNav
// children将page的内同填入layout渲染的坑中
export default function Layout(
    {children}:{children :React.ReactNode}
){
   return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
        
   ); 
}