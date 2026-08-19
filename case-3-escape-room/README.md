# Case 3: Escape Room (Digitalt gåtespill)

## Kort beskrivelse
Bygg et digitalt Escape Room i nettleseren! Spilleren må utforske et rom, løse en serie unike, interaktive gåter og oppgaver under tidspress for å finne koden som låser opp døren så de kan rømme.

## Hvorfor denne casen
- Høy interaktivitet, spenning og fantastisk demoeffekt!
- Flott trening i å bygge varierte minispill, interaktive gåter og tidsstyrte hendelser i React.
- Enkelt å designe med engasjerende historiefortelling og ledertavle.

## Forslag til MVP
- Nedtellingstimer som skaper tidsnød (f.eks. 10 eller 15 minutter).
- Rom-oversikt: Et klikkbart visuelt rom (eller scener) med gjenstander, hint og låste bokser.
- Minst 3 unike oppgaver/minispill (f.eks. dekode en mystisk beskjed, fullføre et mønster eller finne en skjult nøkkel).
- Kodebasert dør-pad: En firesifret tallkode må tastes inn for å rømme (koden avkodes via oppgavene).
- Resultatskjerm og Highscore-liste som lagres i localStorage med gjenstående tid.

## Brukerhistorier
- Som spiller vil jeg utforske rommet ved å klikke på objekter for å avdekke skjulte beskjeder og ledetråder.
- Som gåteløser vil jeg løse varierte minispill for å få tak i delkoder fra mønstre eller kryptering.
- Som stresset spiller ønsker jeg en synlig nedtellingstimer som tikker ned for å skape spenning.
- Som spiller vil jeg taste inn den endelige koden på dørpanelet for å sjekke om jeg rømmer i tide.
- Som konkurranseinnstilt spiller vil jeg lagre tiden min på en lokal ledertavle når jeg rømmer.

## AI-prompter dere kan starte med
Be AI lage issues for:
- "Lag TypeScript-typer for Puzzle, RoomState, GameTimer og LeaderboardEntry."
- "Bygg en nedtellings-komponent med visuelle effekter når tiden begynner å renne ut."
- "Lag et interaktivt gåte-komponent for en dør-lås eller kodeboks som krever dekoding av mønster."
- "Implementer et klikkbart rom eller pek-og-klikk-grensesnitt for å finne ledetråder."
- "Skriv tester som garanterer at dørkoden kun godtar riktig sekvens, og at timeren utløser tap ved 0."

## Ferdig nar
- Spilleren kan utforske rommet, løse gåtene og taste inn koden for å rømme.
- Timeren teller ned og utløser spillets slutt dersom tiden løper ut.
- Resultatside og ledertavle viser og lagrer fullførte spilltider i localStorage.
- Spilltilstanden kan nullstilles for å prøve på nytt.
- Viktig tidsstyrings- og godkjenningslogikk har tester.
