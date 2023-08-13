// Components
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside>
        <Card />
      </aside>
    </div>
  )
}