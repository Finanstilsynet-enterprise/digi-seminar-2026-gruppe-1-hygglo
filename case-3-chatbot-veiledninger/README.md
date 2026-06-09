# Case 7: Chatbot mot veiledninger i Finanstilsynet

## Kort beskrivelse
Lag en enkel chat-assistent som svarer pa sporsmal basert pa et sett med veiledningstekster og FAQ.

## Hvorfor denne casen
- Hoyerst aktuell AI-case for workshop
- Tydelig brukeropplevelse med rask demoeffekt
- Kan bygges helt uten backend med mock-data

## Forslag til MVP
- Chatgrensesnitt med sporsmal/svar
- Sokestrategi mot lokale veiledningsdokumenter i mock-data
- Viser kilder som ble brukt i svaret
- Fallback-svar nar relevant informasjon ikke finnes
- Historikk i localStorage

## Brukerhistorier
- Som bruker vil jeg stille sporsmal i naturlig sprak.
- Som bruker vil jeg se hvilke kilder svaret bygger pa.
- Som bruker vil jeg fa et tydelig svar nar boten ikke vet.
- Som fagansvarlig vil jeg enkelt kunne oppdatere kunnskapsgrunnlaget.

## AI-prompter dere kan starte med
Be ai lage issues for: 
- "Lag demodata som dere tror kan trenges"
- "Lag en enkel retrieval-funksjon som rangerer dokumenttreff pa tekstlikhet."
- "Bygg chat-UI med meldingsbobler og kildereferanser."
- "Implementer fallback-logikk med forslag til oppfolgingssporsmal."
- "Skriv tester for rangering og svargenerering."

## Ferdig når
- Bruker kan stille sporsmal og få relevante svar
- Kildereferanser vises tydelig
- Fallback oppleves hjelpsom og konsistent
