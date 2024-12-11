import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
    </SidebarProvider>
  )
}
