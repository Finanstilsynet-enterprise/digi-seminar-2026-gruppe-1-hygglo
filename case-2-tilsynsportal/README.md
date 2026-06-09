# Case 6: Lag din egen tilsynsportal

## Kort beskrivelse
Bygg en enkel tilsynsportal der saksbehandlere kan opprette, planlegge og folge opp tilsynssaker for virksomheter.

## Hvorfor denne casen
- Reell arbeidsflyt med tydelig verdi
- God trening i statusflyt, filtrering og prioritering
- Egner seg godt for demo med realistiske scenarier

## Forslag til MVP
- Liste over tilsynssaker med status, frist og ansvarlig
- Opprett ny sak med virksomhetsnavn, tema og risikoniva
- Filtrer pa status og prioritet
- Detaljvisning med historikk og notater
- Endre status: Ny -> Planlagt -> Under tilsyn -> Ferdigstilt

## Brukerhistorier
- Som saksbehandler vil jeg opprette en ny tilsynssak raskt.
- Som teamleder vil jeg filtrere saker etter frist og risiko.
- Som saksbehandler vil jeg oppdatere status og notater underveis.
- Som leder vil jeg fa oversikt over saker som haster.


## AI-prompter dere kan starte med
Be ai lage issues for: 
- "Lag demodata som dere tror kan trenges"
- "Lag TypeScript-typer for tilsynssak, statushistorikk og ansvarlig."
- "Bygg en saksliste med sortering pa frist og risiko."
- "Implementer validering for statusoverganger i en service."
- "Skriv tester for filtrering og statusendringer."

## Ferdig når
- Bruker kan opprette, filtrere og oppdatere tilsynssaker
- Statusflyten er robust og validert
- Viktig logikk er dekket av tester
