import { lazy } from 'react'

const Home = lazy(() => import('./layout/Home'))
const AccordionDemo = lazy(() => import('./layout/Accordion'))
const AlertDemo = lazy(() => import('./layout/Alert'))
const AlertDialogDemo = lazy(() => import('./layout/AlertDialog'))
const AvatarDemo = lazy(() => import('./layout/Avatar'))
const BadgeDemo = lazy(() => import('./layout/Badge'))
const BreadcrumbDemo = lazy(() => import('./layout/Breadcrumb'))
const ButtonDemo = lazy(() => import('./layout/Button'))
const CalendarDemo = lazy(() => import('./layout/Calendar'))
const CardDemo = lazy(() => import('./layout/Card'))
const CarouselDemo = lazy(() => import('./layout/Carousel'))
const ChartDemo = lazy(() => import('./layout/Chart'))
const CheckboxDemo = lazy(() => import('./layout/CheckBox'))
const CollapsibleDemo = lazy(() => import('./layout/Collapsible'))
const ComboboxDemo = lazy(() => import('./layout/Combobox'))
const CommandDemo = lazy(() => import('./layout/Command'))
const ContextMenuDemo = lazy(() => import('./layout/ContextMenu'))
const DataTableDemo = lazy(() => import('./layout/DataTable'))
const DatePickerDemo = lazy(() => import('./layout/DatePicker'))
const DialogDemo = lazy(() => import('./layout/Dialog'))
const DrawerDemo = lazy(() => import('./layout/Drawer'))
const DropdownMenuDemo = lazy(() => import('./layout/DropdownMenu'))
const FormDemo = lazy(() => import('./layout/Form'))
const HoverCardDemo = lazy(() => import('./layout/HoverCard'))
const InputDemo = lazy(() => import('./layout/Input'))
const InputOTPDemo = lazy(() => import('./layout/InputOTP'))
const LabelDemo = lazy(() => import('./layout/Label'))
const MenubarDemo = lazy(() => import('./layout/Menubar'))
const NavigationMenuDemo = lazy(() => import('./layout/NavigationMenu'))
const PaginationDemo = lazy(() => import('./layout/Pagination'))
const PopoverDemo = lazy(() => import('./layout/Popover'))
const ProgressDemo = lazy(() => import('./layout/Progress'))
const RadioGroupDemo = lazy(() => import('./layout/RadioGroup'))
const ResizableDemo = lazy(() => import('./layout/Resizable'))
const ScrollAreaDemo = lazy(() => import('./layout/ScrollArea'))
const SelectDemo = lazy(() => import('./layout/Select'))
const SeparatorDemo = lazy(() => import('./layout/Separator'))
const SheetDemo = lazy(() => import('./layout/Sheet'))
const SidebarDemo = lazy(() => import('./layout/Sidebar'))
const SkeletonDemo = lazy(() => import('./layout/Skeleton'))
const SliderDemo = lazy(() => import('./layout/Slider'))
const SwitchDemo = lazy(() => import('./layout/Switch'))
const TableDemo = lazy(() => import('./layout/Table'))
const TabsDemo = lazy(() => import('./layout/Tabs'))
const TextareaDemo = lazy(() => import('./layout/TextArea'))
const ToggleDemo = lazy(() => import('./layout/Toggle'))
const ToggleGroupDemo = lazy(() => import('./layout/ToggleGroup'))
const TooltipDemo = lazy(() => import('./layout/Tooltip'))
const PageDemo = lazy(() => import('./layout/Page'))

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
  { path: '/table', name: 'Table', element: TableDemo },
  { path: '/tabs', name: 'Tabs', element: TabsDemo },
  { path: '/textarea', name: 'Textarea', element: TextareaDemo },
  { path: '/toggle', name: 'Toggle', element: ToggleDemo },
  { path: '/toggle-group', name: 'Toggle Group', element: ToggleGroupDemo },
  { path: '/tooltip', name: 'Tooltip', element: TooltipDemo },
  { path: '/page', name: 'Page', element: PageDemo },
]

export default routes
