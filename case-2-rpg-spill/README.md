# Case 2: RPG-spill (Rollespill-generator og eventyr)

## Kort beskrivelse
Bygg et morsomt og retro rollespill (RPG-spill) direkte i nettleseren! Lag en helt som kan utforske et kart, bekjempe monstre, samle utstyr og gå opp i nivå.

## Hvorfor denne casen
- Veldig engasjerende og gøy å vise frem som en demo.
- Perfekt trening på tilstandshåndtering (helse, erfaringspoeng, inventar, og kart-koordinater).
- Egner seg ypperlig til objektorientert eller funksjonell spill-logikk med AI-støtte.

## Forslag til MVP
- Karakter-skaper: Velg klasse (f.eks. Kriger, Magiker, Tyv) og gi helten et navn.
- Turbasert kampsystem mot f.eks. "Slemme monstre" (med angrep, forsvar og helbredelse).
- Utforskingskart: Et enkelt 2D-rutenett (grid) der helten kan bevege seg rundt.
- Inventar og utstyr (våpen, rustning, eliksirer) som påvirker heltens parametere.
- Nivåsystem (level up) der man får tildelt poeng til egenskaper ved oppsamling av XP.

## Brukerhistorier
- Som spiller vil jeg opprette min egen helt med navn og klasse, slik at spillet føles personlig.
- Som spiller vil jeg bevege meg rundt på et enkelt kart, slik at jeg kan oppdage monstre og skatter.
- Som spiller ønsker jeg turbaserte kamper mot monstre der mine taktiske valg avgjør om jeg vinner.
- Som eventyrer vil jeg samle våpen og drikke eliksirer fra mitt inventar, slik at jeg overlever lenger.
- Som spiller vil jeg se min helts helse, erfaringspoeng (XP) og nivå oppdatere seg i sanntid.

## AI-prompter dere kan starte med
Be AI lage issues for:
- "Lag demodata for monstre (navn, HP, skade, XP-belønning) og mulige våpen/utstyr."
- "Lag TypeScript-typer for Player, Monster, Item og GameState."
- "Bygg et turbasert kampsystem-komponent med fargerik kamp-logg og handlingsknapper."
- "Implementer et 2D-grid-kart og spillkontroller for å navigere helten."
- "Skriv en test-suite for kampsystemet og oppdatering av XP/nivå-økning."

## Ferdig nar
- Spilleren kan opprette en karakter, utforske kartet og kjempe mot monstre.
- Kampsystemet, inventaret og nivå-oppgradering fungerer feilfritt.
- Spillet lagrer fremdriften i localStorage slik at man kan fortsette senere.
- Kjernekomponenter og spill-regler er dekket av enhetstester.
