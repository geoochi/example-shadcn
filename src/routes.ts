import Home from './layout/Home'
import Sidebar from './layout/Sidebar'
import MyAccordion from './layout/Accordion'
import MyAlert from './layout/Alert'
import Page01 from './layout/Page01'
import Page02 from './layout/Page02'

interface Route {
  path: string
  name: string
  element: React.FC
}

const routes: Route[] = [
  { path: '/', name: 'Home', element: Home },
  { path: '/sidebar', name: 'Sidebar', element: Sidebar },
  { path: '/accordion', name: 'Accordion', element: MyAccordion },
  { path: '/alert', name: 'Alert', element: MyAlert },
  { path: '/page01', name: 'Page01', element: Page01 },
  { path: '/page02', name: 'Page02', element: Page02 },
]

export default routes
