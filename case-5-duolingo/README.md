# Gruppe 5 – Duolingo

På avdelingsseminaret skal vi teste vibe coding, koding ved bruk av KI, i praksis. Målet er ikke å lage en perfekt løsning, men å oppleve hvordan vi raskt kan gå fra idé til prototype.

Det er 5 grupper som skal lage hver sin løsning på ca. én time. Hver gruppe er sammensatt med ganske lik kompetanse.

Løsningen skal vises frem for de andre gruppene.

## Gruppe 5

| Rolle | Navn |
|---------|---------|
| Gruppeleder og teknisk (Data) | Clarisse |
| Teknisk (Diginn) | Lema |
| Deltaker med GitHub Copilot (IT) | Tom |
| Deltaker (Digi-led) | Lone |
| Deltaker (Data) | Jon Reidar |
| Deltaker (Data) | Terje |
| Deltager (Diginn) | Cathrine |
| Deltager (Dokin) | Gitte |
| Deltager (Dokin) | Øystein |
| Deltager (IT) | Henning |

## Om Duolingo

Duolingo er en språkapp som gjør læring av språk enkel og spillbasert. Brukeren øver gjennom korte oppgaver, får umiddelbar tilbakemelding og samler poeng, nivåer og belønninger underveis.

Man benytter enkeltord og fraser, som kan bygges opp som:

- Hva betyr en forkortelse eller begrep
- Hva er forkortelsen for
- Hvem er direktør for
- Hvor er Lone seksjonsleder (liste over seksjoner – velg riktig)
- I Diginn er ___ seksjonsleder (liste over navn – velg riktig)

## Konsept

Lag et læringsspill der ansatte kan øve på ord, forkortelser og begreper som brukes i Finanstilsynet.

### Forslag til navn

- FT-lingo
- Tilsynslingo
- Finlingo

## Verktøy

- Copilot
- GitHub Copilot

## Tips

- Lag korte spørsmål
- Bruke poeng og streaks
- Ulike oppgavetyper
- Begrense antall begreper, eksempelvis:
  - 5–10 regelverk (DORA, GDPR, CRR)
  - Navn på ledere (kanskje starte med kun ledergruppen)
  - 5–10 forkortelser (kun DIGI og seksjoner i DIGI)
  - 5–10 IT-forkortelser (KI, RPA, ROS, DevOps, PMO o.l.)
- Bruke KI til å foreslå forklaringer på vanskelige begreper i klart språk
- Lage enkel grafikk, kanskje med Finn-Robert

## Oppgaver som skal løses i par

### Par 1 – Lema og Cathrine: Startside

- Tittel
- Kort forklaring
- Valg av nivå eller fagområde
- Startknapp

### Par 2 – Jon Reidar og Øystein: Flervalgsoppgaver

- Lage ulike former av spørsmål med svaralternativer
- Eksempel: Hva står ROS for?

### Par 3 – Gitte og Terje: Match ord og forklaring

- Lage match-oppgaver (drag-and-drop, knapper eller nedtrekksmenyer)
- Eksempel:
  - KI → Kunstig intelligens

### Par 4 – Tom og Henning: Poeng, streak og tilbakemelding

- Poeng for riktig svar
- Tilbakemelding ved feil svar
- Streak for antall riktige svar på rad
- Sluttscore

### Par 5 – Clarisse og Lone: AI-forklaring og sluttside

- Lag en funksjon som gir en enkel forklaring på et begrep
- Eksempel: Forklar «WebSak» på en enkel måte for en nyansatt

Sluttside med:

- Score
- Antall riktige
- Forslag til hva man bør øve mer på
- «Prøv igjen»-knapp

## Forberedelser

- Last ned Duolingo-appen (gratisversjon holder)
- Forbered innhold i prompter – bruk Copilot til hjelp
- Tenk ut idéer, men husk å holde det enkelt
- Snakk med din partner i forkant

## Formel på gode prompter

En god prompt kan bygges ved å definere:

**Rolle + kontekst + mål + oppgave + krav + format + avgrensning**

### Eksempel

**Rolle:** Du er en erfaren utvikler og pedagogisk rådgiver.

**Kontekst:** Vi skal lage en enkel prototype på et læringsspill inspirert av Duolingo for ansatte i Finanstilsynet.

**Mål:** Målet er at brukeren skal kunne øve på interne begreper og forkortelser.

**Oppgave:** Lag forslag til fem korte flervalgsoppgaver.

**Krav:** Hvert spørsmål skal ha ett riktig svar og tre feil svaralternativer. Språket skal være enkelt og forståelig for ansatte uten teknisk bakgrunn.

**Format:** Svar i en tabell med kolonnene spørsmål, riktig svar og feil svaralternativer.

**Avgrensning:** Hold oppgavene korte og enkle, og lag bare innhold som passer til en første prototype.

### Når dere skriver prompter, bør dere

- Forklare hva dere prøver å lage
- Si hvem løsningen er for
- Be om ett konkret resultat av gangen
- Gi eksempler hvis dere har det
- Definere hvilke kilder/data den kan bruke (f.eks. Innsia, Finanstilsynet.no)
- Be KI-en stille oppfølgingsspørsmål hvis noe er uklart
- Be om enkelt språk
- Be om forslag som kan bygges raskt
- Be KI-en holde løsningen enkel
- Teste, justere og be om forbedringer i flere runder

## Vibe coding-formel

For vibe coding fungerer prompter best når de er praktiske og iterative:

> Hva jeg bygger + brukerflyt + ønsket funksjon + tekniske rammer + hva som skal skje når brukeren trykker/velger/skriver + hold det enkelt

### Eksempel

**Kontekst / hva jeg bygger:**
Jeg bygger en enkel prototype på et læringsspill inspirert av Duolingo.

**Mål / brukerflyt:**
Brukeren skal få et spørsmål om et begrep fra Finanstilsynet, velge ett av fire svaralternativer og få umiddelbar tilbakemelding.

**Oppgave / ønsket funksjon:**
Lag en enkel løsning med HTML, CSS og JavaScript i én fil.

**Krav:**
Hold koden enkel og lett å forstå.

**Format / tekniske rammer:**
Først skal løsningen ha én startside, én oppgave og en sluttside med score.

**Avgrensning:**
Ikke legg til avanserte funksjoner før grunnflyten fungerer.
