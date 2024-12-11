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
import DatePickerDemo from './layout/DatePicker'
import DialogDemo from './layout/Dialog'
import DrawerDemo from './layout/Drawer'
import DropdownMenuDemo from './layout/DropdownMenu'
import FormDemo from './layout/Form'
import HoverCardDemo from './layout/HoverCard'
import InputDemo from './layout/Input'
import InputOTPDemo from './layout/InputOTP'
import LabelDemo from './layout/Label'
import MenubarDemo from './layout/Menubar'
import NavigationMenuDemo from './layout/NavigationMenu'
import PaginationDemo from './layout/Pagination'
import PopoverDemo from './layout/Popover'
import ProgressDemo from './layout/Progress'
import RadioGroupDemo from './layout/RadioGroup'
import ResizableDemo from './layout/Resizable'
import ScrollAreaDemo from './layout/ScrollArea'
import SelectDemo from './layout/Select'
import SeparatorDemo from './layout/Separator'
import SheetDemo from './layout/Sheet'
import SidebarDemo from './layout/Sidebar'
import SkeletonDemo from './layout/Skeleton'
import SliderDemo from './layout/Slider'
import SwitchDemo from './layout/Switch'
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
  { path: '/alert-dialog', name: 'Alert Dialog', element: AlertDialogDemo },
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
  { path: '/context-menu', name: 'Context Menu', element: ContextMenuDemo },
  { path: '/data-table', name: 'Data Table', element: DataTableDemo },
  { path: '/date-picker', name: 'Date Picker', element: DatePickerDemo },
  { path: '/dialog', name: 'Dialog', element: DialogDemo },
  { path: '/drawer', name: 'Drawer', element: DrawerDemo },
  { path: '/dropdown-menu', name: 'Dropdown Menu', element: DropdownMenuDemo },
  { path: '/form', name: 'Form', element: FormDemo },
  { path: '/hover-card', name: 'Hover Card', element: HoverCardDemo },
  { path: '/input', name: 'Input', element: InputDemo },
  { path: '/input-otp', name: 'Input OTP', element: InputOTPDemo },
  { path: '/label', name: 'Label', element: LabelDemo },
  { path: '/menubar', name: 'Menubar', element: MenubarDemo },
  {
    path: '/navigation-menu',
    name: 'Navigation Menu',
    element: NavigationMenuDemo,
  },
  { path: '/pagination', name: 'Pagination', element: PaginationDemo },
  { path: '/popover', name: 'Popover', element: PopoverDemo },
  { path: '/progress', name: 'Progress', element: ProgressDemo },
  { path: '/radio-group', name: 'Radio Group', element: RadioGroupDemo },
  { path: '/resizable', name: 'Resizable', element: ResizableDemo },
  { path: '/scroll-area', name: 'Scroll Area', element: ScrollAreaDemo },
  { path: '/select', name: 'Select', element: SelectDemo },
  { path: '/separator', name: 'Separator', element: SeparatorDemo },
  { path: '/sheet', name: 'Sheet', element: SheetDemo },
  { path: '/sidebar', name: 'Sidebar', element: SidebarDemo },
  { path: '/skeleton', name: 'Skeleton', element: SkeletonDemo },
  { path: '/slider', name: 'Slider', element: SliderDemo },
  { path: '/switch', name: 'Switch', element: SwitchDemo },
  { path: '/page', name: 'Page', element: PageDemo },
]

export default routes
