import { Header } from '../components/Header'
import { HeroBanner } from '../components/HeroBanner'
import { workshopInfo } from '../mock/workshopData'

export function LandingPage() {
  return (
    <div className="app">
      <Header organizer={workshopInfo.organizer ?? 'Workshop'} />
      <main className="main">
        <HeroBanner
          title={workshopInfo.title}
          subtitle={workshopInfo.subtitle}
          description={workshopInfo.description}
        />
        <section className="getting-started">
          <h2>Kom i gang</h2>
          <ol className="steps">
            <li>
              Rediger <code>src/App.tsx</code> for å starte
            </li>
            <li>Legg til komponenter i mappen components/</li>
            <li>Legg til sider i mappen pages/</li>
            <li>Bruk mock/-mappen for testdata</li>
          </ol>
        </section>
      </main>
    </div>
  )
}
