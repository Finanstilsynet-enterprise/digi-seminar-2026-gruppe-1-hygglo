# DIGI Seminar – AI-assistert utvikling

Template for gruppearbeid på DIGI seminar med fokus på AI-assistert utvikling.

## Velg case for workshop

Deltagerne velger én case å jobbe med i sin klon av repoet. Målet er å bruke AI aktivt for å planlegge, implementere og teste en fungerende løsning i løpet av workshop. Slett de case-mappene dere ikke jobber med, så ikke de skaper forvirring, og be ai oppdatere README.md (denne fila). Husk at AI bruker informasjonen i prosjektet for å implementere løsningen.

### Case dere kan velge

- [Case 1: Intern utstyrsdeling (Hygglo-inspirert)](case-1-utstyrsdeling/README.md)
- [Case 2: Lag din egen tilsynsportal](case-2-tilsynsportal/README.md)
- [Case 3: Chatbot mot veiledninger i Finanstilsynet](case-3-chatbot-veiledninger/README.md)
- [Case 4: Sosial-portalen](case-4-sosial-portalen/README.md)
- [Case 5: Egendefinert](case-5-egendefinert/README.md)

Tips: Start med en liten MVP, få flyten til å virke ende-til-ende, og bruk AI til å skrive både kode og tester underveis.

## Stack

- **React** – UI-bibliotek
- **Vite** – Bygge- og utviklingsverktøy
- **TypeScript** – Typesikkerhet
- **ESLint** – Linting
- **Prettier** – Kodeformatering

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:5173](http://localhost:5173) i nettleseren.

## Scripts

| Kommando               | Beskrivelse                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start utviklingsserver               |
| `npm run build`        | Bygg for produksjon                  |
| `npm run lint`         | Kjør ESLint                          |
| `npm run preview`      | Forhåndsvis produksjonsbygget        |
| `npm run format`       | Formater kode med Prettier           |
| `npm run format:check` | Sjekk formatering uten å endre filer |

## Mappestruktur

```
src/
├── components/   # Gjenbrukbare UI-komponenter
├── pages/        # Sidekomponenter
├── services/     # API-kall og forretningslogikk
├── mock/         # Testdata og mock-implementasjoner
└── types/        # TypeScript-typer og grensesnitt
```

## Workshop-tips

- Bruk AI-verktøy (GitHub Copilot, ChatGPT, osv.) aktivt under utviklingen
- Legg til nye komponenter i `src/components/`
- Legg til nye sider i `src/pages/`
- Bruk `src/mock/` for å simulere API-data
- Definer felles typer i `src/types/`
