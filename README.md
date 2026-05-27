# DIGI Seminar – AI-assistert utvikling

Template for gruppearbeid på DIGI seminar med fokus på AI-assistert webutvikling.

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
