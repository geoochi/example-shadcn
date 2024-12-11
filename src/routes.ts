import Home from './layout/Home'
import AccordionDemo from './layout/Accordion'
import AlertDemo from './layout/Alert'
import AlertDialogDemo from './layout/AlertDialog'
import AvatarDemo from './layout/Avatar'
import BadgeDemo from './layout/Badge'
import BreadcrumbDemo from './layout/Breadcrumb'
import ButtonDemo from './layout/Button'
import CalendarDemo from './layout/Calendar'
import SidebarDemo from './layout/Sidebar'
import PageDemo from './layout/Page'

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/', name: 'Home', element: Home },
  { path: '/accordion', name: 'Accordion', element: AccordionDemo },
  { path: '/alert', name: 'Alert', element: AlertDemo },
  { path: '/alert-dialog', name: 'AlertDialog', element: AlertDialogDemo },
  { path: '/avatar', name: 'Avatar', element: AvatarDemo },
  { path: '/badge', name: 'Badge', element: BadgeDemo },
  { path: '/breadcrumb', name: 'Breadcrumb', element: BreadcrumbDemo },
  { path: '/button', name: 'Button', element: ButtonDemo },
  { path: '/calendar', name: 'Calendar', element: CalendarDemo },
  { path: '/sidebar', name: 'Sidebar', element: SidebarDemo },
  { path: '/page', name: 'Page', element: PageDemo },
]

export default routes
