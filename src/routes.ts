import Home from './layout/Home'
import SidebarDemo from './layout/Sidebar'
import AccordionDemo from './layout/Accordion'
import AlertDemo from './layout/Alert'
import AlertDialogDemo from './layout/AlertDialog'
import AvatarDemo from './layout/Avatar'
import PageDemo from './layout/Page'

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/', name: 'Home', element: Home },
  { path: '/sidebar', name: 'Sidebar', element: SidebarDemo },
  { path: '/accordion', name: 'Accordion', element: AccordionDemo },
  { path: '/alert', name: 'Alert', element: AlertDemo },
  { path: '/alert-dialog', name: 'AlertDialog', element: AlertDialogDemo },
  { path: '/avatar', name: 'Avatar', element: AvatarDemo },
  { path: '/page', name: 'Page', element: PageDemo },
]

export default routes
