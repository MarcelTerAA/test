# RIG Academy — Ter AA Helmond

Hardwaregame voor studenten Medewerker ICT, niveau 2 (Crebo 25999).
Deze export bevat de volledige website inclusief het Ter AA-logo en de verbeterde leesbaarheid.

## Wat zit erin?

- `index.html`: de startpagina en navigatie.
- `style.css`: vormgeving en responsive indeling.
- `app.js`: alle spelregels, hardware-uitleg, quizvragen en build challenge.
- `ter-aa-logo.png`: het aangeleverde schoollogo.

Geen installatie, database, API-sleutels, ChatGPT-account of betaalde dienst nodig.
De twee gebruikte lettertypen worden via Google Fonts geladen. Zonder internet gebruikt de site vervangende lettertypen; de spelinhoud zit in de bestanden.

## Meteen bekijken

Pak de ZIP uit en open `index.html` in een moderne browser. Voor betrouwbaar bewaren van voortgang raden we aan de game via een webserver of GitHub Pages te gebruiken. Browseropslag bij direct geopende lokale bestanden kan per browser verschillen.

## Op GitHub zetten

1. Maak in GitHub een nieuwe repository, bijvoorbeeld `rig-academy`. Kies voor de eenvoudigste GitHub Pages-route een openbare repository. Daarmee worden ook de broncode en het schoollogo openbaar.
2. Pak deze ZIP uit op je computer.
3. Open de repository en kies **Add file → Upload files**.
4. Upload de uitgepakte bestanden (niet alleen de ZIP). Zet `index.html`, `style.css`, `app.js` en `ter-aa-logo.png` direct in de hoofdmap van de repository. Upload deze README desgewenst ook.
5. Sla de bestanden op met **Commit changes**.

Alleen opslaan op GitHub maakt er nog geen speelbare website van. Zet daarvoor GitHub Pages aan:

6. Open **Settings → Pages** in de repository.
7. Kies bij **Source**: **Deploy from a branch**.
8. Kies de branch **main** en de map **/(root)**. Klik **Save**.
9. Wacht tot de publicatie klaar is. De website-link verschijnt op dezelfde Pages-instellingenpagina.

Officiële uitleg:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Voortgang en privacy

XP en resultaten worden alleen in de browser op het gebruikte apparaat bewaard. Er zijn geen studentenaccounts of centrale docentresultaten. Voortgang van de huidige website verhuist niet automatisch mee naar een GitHub Pages-adres, omdat browseropslag per website-adres wordt gescheiden.

## Aanpassen

Bewerk de bestanden in een teksteditor en upload de gewijzigde bestanden opnieuw naar GitHub. De versie op GitHub en de oorspronkelijke gehoste versie zijn afzonderlijke kopieën; wijzigingen worden niet automatisch onderling gesynchroniseerd.

In `app.js` staan onder andere `parts` (de onderdelen), `questions` (quizvragen) en `catalogs` (de fictieve build-opties en oefenprijzen).

De CPU-, moederbord- en GPU-modellen in de build challenge zijn fictieve oefenmodellen. De game is bedoeld voor formatief oefenen en is geen examen.
