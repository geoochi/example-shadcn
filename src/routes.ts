import Home from './layout/Home'
import AccordionDemo from './layout/Accordion'
import AlertDemo from './layout/Alert'
import AlertDialogDemo from './layout/AlertDialog'
import AvatarDemo from './layout/Avatar'
import BadgeDemo from './layout/Badge'
import BreadcrumbDemo from './layout/Breadcrumb'
import ButtonDemo from './layout/Button'
import CalendarDemo from './layout/Calendar'
import CardDemo from './layout/Card'
import CarouselDemo from './layout/Carousel'
import ChartDemo from './layout/Chart'
import CheckboxDemo from './layout/CheckBox'
import CollapsibleDemo from './layout/Collapsible'
import ComboboxDemo from './layout/Combobox'
import CommandDemo from './layout/Command'
import ContextMenuDemo from './layout/ContextMenu'
import DataTableDemo from './layout/DataTable'
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
  { path: '/card', name: 'Card', element: CardDemo },
  { path: '/carousel', name: 'Carousel', element: CarouselDemo },
  { path: '/chart', name: 'Chart', element: ChartDemo },
  { path: '/checkbox', name: 'Checkbox', element: CheckboxDemo },
  { path: '/collapsible', name: 'Collapsible', element: CollapsibleDemo },
  { path: '/combobox', name: 'Combobox', element: ComboboxDemo },
  { path: '/command', name: 'Command', element: CommandDemo },
  { path: '/context-menu', name: 'ContextMenu', element: ContextMenuDemo },
  { path: '/data-table', name: 'DataTable', element: DataTableDemo },
  { path: '/sidebar', name: 'Sidebar', element: SidebarDemo },
  { path: '/page', name: 'Page', element: PageDemo },
]

export default routes
