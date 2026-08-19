# DIGI Seminar – AI-assistert utvikling

Template for gruppearbeid på DIGI seminar med fokus på AI-assistert utvikling.

## Velg case for workshop

Deltagerne velger én case å jobbe med i sin klon av repoet. Målet er å bruke AI aktivt for å planlegge, implementere og teste en fungerende løsning i løpet av workshop. Slett de case-mappene dere ikke jobber med, så ikke de skaper forvirring, og be ai oppdatere README.md (denne fila). Husk at AI bruker informasjonen i prosjektet for å implementere løsningen.

### Case dere kan velge

- [Case 1: Intern utstyrsdeling (Hygglo-inspirert)](case-1-utstyrsdeling/README.md)
- [Case 2: Lag din egen tilsynsportal](case-2-tilsynsportal/README.md)
- [Case 3: Chatbot mot veiledninger i Finanstilsynet](case-3-chatbot-veiledninger/README.md)
- [Case 4: Sosial-portalen](case-4-sosial-portalen/README.md)
- [Case 5: FT Duolingo](case-5-duolingo/README.md)

Tips: Start med en liten MVP, få flyten til å virke ende-til-ende, og bruk AI til å skrive både kode og tester underveis.


## Kom i gang

Prosjektet bruker **Node.js** til å kjøre utviklingsverktøyene lokalt, og **React** til å bygge brukergrensesnittet.

- **Node.js**: Kjører kommandoene som installerer avhengigheter og starter utviklingsserveren.
- **React**: Bygger komponentene og sidene i appen.

Kjør disse kommandoene i terminalen:

```bash
npm install
npm run dev
```

- `npm install`: Laster ned alle pakker prosjektet trenger (fra `package.json`).
- `npm run dev`: Starter Vite sin utviklingsserver med hot reload.

Åpne [http://localhost:5173](http://localhost:5173) i nettleseren når serveren er startet.

### Kjør prosjektet fra VS Code (UI)

Du kan også starte prosjektet fra menyene i vscode. Konfigurasjonen for dette ligger i `.vscode/launch.json`.

1. Åpne **Run and Debug** i VS Code (play-ikonet i venstremenyen).
2. Velg **Start Vite Dev Server** i dropdown.
3. Klikk **Start Debugging** (grønn play-knapp).
4. Åpne [http://localhost:5173](http://localhost:5173) i nettleseren.

For å stoppe serveren, trykk **Shift+F5** eller stopp-knappen i debug-panelet.




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

## Stack

- **React** – UI-bibliotek
- **Vite** – Bygge- og utviklingsverktøy
- **TypeScript** – Typesikkerhet
- **ESLint** – Linting
- **Prettier** – Kodeformatering

## Klone dette repoet?

Når du skal klone dette repoet for å bruke til en case anbefaler jeg følgende:

* Opprett et nytt repository i github. Under "Start with a template", velg
    Finanstilsynet-enterprise/rp-template
* Deretter gjør du følgende lokalt på din egen pc eller i codespaces:

```bash
# Klon ditt repo, med lenken under [Code] - knappen i github
git clone https://github.com/Finanstilsynet-enterprise/[ditt-nye-fantastiske-repo]

# Legg til templat-repoet som upstream repo
git remote add upstream https://github.com/Finanstilsynet-enterprise/digi-seminar-ki-template.git

# Hent filer fra upstream
git fetch upstream

# Erstatt alt i ditt nye repo, med innholdet upstream
git reset --hard upstream/main
```
