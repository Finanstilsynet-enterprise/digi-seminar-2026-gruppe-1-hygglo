# Gruppe 3 – Intern utstyrsdeling

**Digi avdelingsseminar 2026 · Hygglo-inspirert case**

På avdelingsseminaret skal vi teste vibe coding – koding ved bruk av KI – i praksis. Målet er ikke å lage en perfekt løsning, men å oppleve hvordan vi raskt kan gå fra idé til prototype.

Gruppene skal lage hver sin løsning på omtrent én time. Løsningen skal vises frem for de andre gruppene.

## Gruppe 3

| Rolle | Navn |
|---|---|
| Gruppeleder | Jonas |
| Teknisk | Asad |
| GitHub | Morten |
| Deltaker | Anita |
| Deltaker | Elin |
| Deltaker | Lena |
| Deltaker | Diana |
| Deltaker | Jonsvein |
| Deltaker | Aftab |
| Deltaker | Andrew |

## Om casen

Lag en intern markedsplass der ansatte kan legge ut utstyr til utlån, søke i tilgjengelig utstyr og sende forespørsler om booking.

## Hvorfor denne casen

Casen har en tydelig brukerreise fra søk til booking, passer godt med React-komponenter og state-håndtering, og er enkel å bygge stegvis med AI-assistanse.

## Forslag til MVP

- Listevisning av utstyrskort med tittel, kategori, lokasjon, eier og pris per dag
- Søk med fritekst og filtrering på kategori
- Detaljside for valgt utstyr
- Enkel bookingflyt med datoer og validering
- Lagring i localStorage

## Brukerhistorier

- Som ansatt vil jeg se tilgjengelig utstyr slik at jeg kan finne noe å låne.
- Som ansatt vil jeg filtrere på kategori slik at jeg finner relevant utstyr raskere.
- Som ansatt vil jeg sende en bookingforespørsel slik at jeg kan reservere utstyr.
- Som eier vil jeg se innkommende forespørsler slik at jeg kan godkjenne eller avslå.

## Verktøy

- Copilot
- GitHub Copilot
- React og TypeScript
- Vitest
- localStorage

## AI-prompter dere kan starte med

- Lag issues for MVP-en og foreslå en enkel rekkefølge for implementeringen.
- Lag demodata som dere tror kan trenges.
- Lag TypeScript-typer for utstyr, booking og bruker.
- Bygg en responsiv kort-grid med filtrering på kategori og fritekst.
- Implementer bookingvalidering som hindrer overlappende datoer.
- Skriv tester for filtrering og bookingregler med Vitest.

## Oppgaver som kan løses i par

- **Par 1 – Jonas og Anita:** Startside, listevisning og koordinering av helheten.
- **Par 2 – Asad og Aftab:** TypeScript-typer, demodata, state og localStorage.
- **Par 3 – Morten og Andrew:** GitHub-oppsett, issues, integrasjon og tester.
- **Par 4 – Elin og Lena:** Detaljside og bookingflyt med datovalg.
- **Par 5 – Diana og Jonsvein:** Innkommende forespørsler, godkjenning/avslag og bookingvalidering.

## Ferdig når

- Bruker kan finne utstyr, se detaljer og sende en bookingforespørsel.
- Validering hindrer ugyldige og overlappende reservasjoner.
- Viktige flyter er dekket av tester.

## Forberedelser

- Avklar hvem som oppretter repository og første issues.
- Bli enige om et minimum av kategorier og 6–10 demoelementer.
- Hold første versjon enkel: få grunnflyten til å virke før dere legger til ekstra funksjoner.
- Avtal korte integrasjonspunkter underveis, slik at delene kobles sammen tidlig.

## Formel på gode prompter

**Rolle + kontekst + mål + oppgave + krav + format + avgrensning**

**Eksempel:** Du er en erfaren React- og TypeScript-utvikler. Vi lager en enkel intern markedsplass for utlån av utstyr. Lag en responsiv liste med utstyrskort, fritekstsøk og kategorifilter. Bruk TypeScript, hold komponentene små, bruk kun lokale demodata og forklar kort hvilke filer som opprettes.

## Tips for vibe coding

- Forklar hva dere bygger og hvem løsningen er for.
- Beskriv brukerflyten og be om ett konkret resultat av gangen.
- Oppgi tekniske rammer: React, TypeScript, localStorage og Vitest.
- Be KI-en stille oppfølgingsspørsmål hvis noe er uklart.
- Test, juster og be om forbedringer i korte runder.
- Be KI-en holde løsningen enkel og unngå avanserte funksjoner før grunnflyten virker.

---

*Gruppe 3 · Intern utstyrsdeling · Digi avdelingsseminar 2026*
