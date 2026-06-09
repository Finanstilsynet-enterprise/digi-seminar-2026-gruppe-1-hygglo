# Case 1: Intern utstyrsdeling (Hygglo-inspirert)

## Kort beskrivelse
Lag en intern markedsplass der ansatte kan legge ut utstyr til utlån, søke i tilgjengelig utstyr og sende foresporsler om booking.

## Hvorfor denne casen
- Tydelig brukerreise fra søk til booking
- Passer godt med React-komponenter og state-handtering
- Lett a bygge stegvis med AI-assistanse

## Forslag til MVP
- Listevisning av utstyrskort (tittel, kategori, lokasjon, eier, pris per dag)
- Søk med fritekst og filtrering på kategori
- Detaljside for valgt utstyr
- Enkel bookingflyt med datoer og validering
- Lagring i localStorage

## Brukerhistorier
- Som ansatt vil jeg se tilgjengelig utstyr slik at jeg kan finne noe a låne.
- Som ansatt vil jeg filtrere på kategori slik at jeg finner relevant utstyr raskere.
- Som ansatt vil jeg sende en bookingforespørsel slik at jeg kan reservere utstyr.
- Som eier vil jeg se innkommende forespørsler slik at jeg kan godkjenne eller avslå.

## AI-prompter dere kan starte med
Be ai lage issues for: 
- "Lag demodata som dere tror kan trenges"
- "Lag TypeScript-typer for utstyr, booking og bruker."
- "Bygg en responsiv kort-grid med filtrering pa kategori og fritekst."
- "Implementer bookingvalidering som hindrer overlappende datoer."
- "Skriv tester for filtrering og bookingregler med Vitest."

## Ferdig når
- Bruker kan finne utstyr, se detaljer og sende booking
- Validering hindrer ugyldige reservasjoner
- Viktige flyter er dekket av tester
