/*
 * Datastructuur: 16 Azure/AZ-900 kernbegrippen voor de leertool.
 * Doelgroep: MBO niveau 2, Medewerker ICT (crebo 25999).
 * Doel: begrippen HERKENNEN op de stage-servicedesk, niet examineren.
 *
 * Per begrip:
 *  - id, domein, naam
 *  - starttoets:  { vraag, opties[4], correct (index) }   -> diagnostisch, geen cijfer
 *  - uitleg:      2-3 korte zinnen, geen jargon
 *  - scenario:    herkenbare servicedesk-situatie die het begrip illustreert
 *  - controle:    { vraag, opties[4], correct }            -> checkvraagje in leermodule
 *  - eindcheck:   { vraag, opties[4], correct }             -> andere vraagvorm dan starttoets
 *
 * Zelf begrippen toevoegen/aanpassen kan door dit bestand aan te passen,
 * zonder de rest van de tool te wijzigen.
 */

const AZURE_DOMEINEN = [
  { id: "cloudconcepten", naam: "Cloudconcepten", icoon: "☁️" },
  { id: "architectuur", naam: "Azure-architectuur", icoon: "🏗️" },
  { id: "beheer-security", naam: "Beheer & security", icoon: "🔒" },
];

const AZURE_BEGRIPPEN = [
  // ===================== DOMEIN 1: CLOUDCONCEPTEN =====================
  {
    id: "cloud-computing",
    domein: "cloudconcepten",
    naam: "Cloud computing",
    starttoets: {
      vraag: "Een collega zegt: \"Die applicatie draait in de cloud.\" Wat betekent dat?",
      opties: [
        "De applicatie draait op een server van een extern bedrijf, via internet",
        "De applicatie draait alleen op de eigen laptop van de gebruiker",
        "De applicatie werkt alleen als het internet uitvalt",
        "De applicatie staat op een USB-stick",
      ],
      correct: 0,
    },
    uitleg:
      "Cloud computing betekent dat je computerkracht, opslag of software gebruikt die op servers van een ander bedrijf staat, ergens in een datacenter. Je gebruikt het via internet, in plaats van dat het op je eigen computer staat.",
    scenario:
      "Een gebruiker belt de servicedesk: \"Ik kan al mijn bestanden overal openen, ook thuis. Hoe kan dat?\" Antwoord: die bestanden staan niet op één computer, maar in de cloud. Daarom kan hij erbij vanaf elk apparaat met internet.",
    controle: {
      vraag: "Wat is het belangrijkste kenmerk van cloud computing?",
      opties: [
        "Je gebruikt servers en opslag via internet, die van een ander bedrijf zijn",
        "Alles staat verplicht op je eigen laptop",
        "Het werkt alleen binnen het schoolgebouw",
        "Er is geen internetverbinding voor nodig",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een medewerker kan vanaf huis, kantoor en zijn telefoon bij dezelfde bestanden. Waar komt dit door?",
      opties: [
        "De bestanden staan in de cloud, op internet-servers",
        "Hij heeft de bestanden drie keer gekopieerd",
        "Zijn laptop stuurt de bestanden automatisch door",
        "Dit kan alleen met een vast netwerkkabeltje",
      ],
      correct: 0,
    },
  },
  {
    id: "cloud-modellen",
    domein: "cloudconcepten",
    naam: "Public / private / hybrid cloud",
    starttoets: {
      vraag: "Een bedrijf gebruikt Microsoft 365 (van Microsoft) én een eigen serverruimte in het gebouw. Hoe noem je zo'n combinatie?",
      opties: [
        "Hybrid cloud",
        "Public cloud",
        "Private cloud",
        "Geen cloud",
      ],
      correct: 0,
    },
    uitleg:
      "Public cloud is van een groot bedrijf zoals Microsoft, en wordt door veel klanten gedeeld. Private cloud is alleen voor één bedrijf, vaak in hun eigen serverruimte. Hybrid cloud is een combinatie van beide.",
    scenario:
      "Een collega legt aan een klant uit: \"Onze e-mail draait bij Microsoft (public cloud), maar onze salarisgegevens staan op onze eigen server (private cloud). Samen noemen we dat hybrid cloud.\"",
    controle: {
      vraag: "Wat is een hybrid cloud?",
      opties: [
        "Een combinatie van public cloud en private cloud",
        "Een cloud die alleen 's nachts werkt",
        "Een cloud zonder internetverbinding",
        "Hetzelfde als een USB-stick",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een ziekenhuis bewaart patiëntgegevens op een eigen server, maar gebruikt Teams (van Microsoft) voor overleg. Hoe heet deze combinatie?",
      opties: [
        "Hybrid cloud",
        "Alleen private cloud",
        "Alleen public cloud",
        "On-premises",
      ],
      correct: 0,
    },
  },
  {
    id: "iaas-paas-saas",
    domein: "cloudconcepten",
    naam: "IaaS / PaaS / SaaS",
    starttoets: {
      vraag: "Een school gebruikt Microsoft 365 (kant-en-klare software zoals Word en Outlook, via internet). Wat voor soort clouddienst is dit?",
      opties: [
        "SaaS (Software as a Service)",
        "IaaS (Infrastructure as a Service)",
        "PaaS (Platform as a Service)",
        "Geen van deze",
      ],
      correct: 0,
    },
    uitleg:
      "IaaS geeft je alleen de basis: servers en opslag, die je zelf verder inricht. PaaS geeft je ook een platform om software op te bouwen. SaaS is kant-en-klare software die je direct kan gebruiken, zoals Outlook.",
    scenario:
      "Denk aan pizza bestellen: IaaS is een lege keuken huren (jij doet de rest). PaaS is een keuken mét oven en apparatuur (jij maakt de pizza). SaaS is een pizza laten bezorgen (je hoeft niks te doen behalve eten). Outlook en Teams zijn SaaS.",
    controle: {
      vraag: "Een gebruiker opent Outlook in de browser en kan direct mailen, zonder iets te installeren. Wat is dit voor dienst?",
      opties: ["SaaS", "IaaS", "PaaS", "Geen cloud"],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een bedrijf huurt alleen virtuele servers en opslagruimte in de cloud, en installeert daar zelf alles op. Wat voor dienst is dit?",
      opties: ["IaaS", "SaaS", "PaaS", "Hybrid cloud"],
      correct: 0,
    },
  },
  {
    id: "scalability",
    domein: "cloudconcepten",
    naam: "Scalability (schaalbaarheid)",
    starttoets: {
      vraag: "Een webwinkel krijgt tijdens Black Friday veel meer bezoekers. In de cloud kan de webwinkel automatisch extra servercapaciteit erbij krijgen. Hoe heet dit?",
      opties: [
        "Scalability (schaalbaarheid)",
        "Subscription",
        "Resource group",
        "Region",
      ],
      correct: 0,
    },
    uitleg:
      "Scalability betekent dat je makkelijk meer of minder computerkracht kan gebruiken, afhankelijk van hoeveel je nodig hebt. In de cloud kan dit automatisch, zonder dat iemand nieuwe apparatuur hoeft te kopen.",
    scenario:
      "Een collega legt uit: \"Onze webshop draait normaal op 2 servers. Met Black Friday zet Azure er automatisch 8 bij, en daarna weer terug naar 2. Dat is scalability: meegroeien met de drukte.\"",
    controle: {
      vraag: "Wat betekent scalability in de cloud?",
      opties: [
        "Capaciteit makkelijk op- of afschalen, naar wat je nodig hebt",
        "Altijd dezelfde hoeveelheid servers gebruiken",
        "Een wachtwoord regelmatig wijzigen",
        "Bestanden opslaan in een map",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een systeem heeft in het weekend weinig gebruikers en doordeweeks veel. In de cloud past het systeem zich hierop aan. Welk begrip hoort hierbij?",
      opties: ["Scalability", "Region", "RBAC", "MFA"],
      correct: 0,
    },
  },
  {
    id: "pay-as-you-go",
    domein: "cloudconcepten",
    naam: "Pay-as-you-go",
    starttoets: {
      vraag: "Een bedrijf betaalt Microsoft Azure elke maand precies voor wat het écht gebruikt aan servers en opslag. Hoe heet dit betaalmodel?",
      opties: [
        "Pay-as-you-go",
        "Subscription (alleen als naam van een abonnement)",
        "RBAC",
        "Scalability",
      ],
      correct: 0,
    },
    uitleg:
      "Pay-as-you-go betekent 'betalen voor wat je gebruikt'. Je betaalt geen vast bedrag vooraf voor apparatuur, maar alleen voor de opslag en rekenkracht die je daadwerkelijk hebt gebruikt.",
    scenario:
      "Vergelijk het met stroom thuis: je betaalt niet voor een vast aantal kWh per maand, maar voor wat de meter aangeeft. Zo werkt Azure ook: meer gebruik is meer kosten, minder gebruik is minder kosten.",
    controle: {
      vraag: "Wat houdt pay-as-you-go in?",
      opties: [
        "Je betaalt alleen voor wat je daadwerkelijk gebruikt",
        "Je betaalt altijd een vast bedrag, ongeacht gebruik",
        "De eerste maand is altijd gratis",
        "Je koopt de servers in één keer",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een klant vraagt: \"Waarom is onze Azure-rekening deze maand hoger?\" Wat is de meest logische reden, gezien het pay-as-you-go-model?",
      opties: [
        "Er is deze maand meer capaciteit gebruikt dan normaal",
        "Microsoft verhoogt zomaar de prijzen zonder reden",
        "Pay-as-you-go betekent een vast maandbedrag",
        "De rekening klopt sowieso nooit",
      ],
      correct: 0,
    },
  },

  // ===================== DOMEIN 2: AZURE-ARCHITECTUUR =====================
  {
    id: "region",
    domein: "architectuur",
    naam: "Region",
    starttoets: {
      vraag: "Een bedrijf kiest ervoor om hun Azure-gegevens op te slaan in \"West Europe\" in plaats van in de VS. Waar kiezen ze eigenlijk voor?",
      opties: [
        "Een region: de fysieke locatie van de Microsoft-datacenters",
        "Een resource group",
        "Een subscription",
        "Een virtueel netwerk",
      ],
      correct: 0,
    },
    uitleg:
      "Een region is een gebied op de wereld waar Microsoft datacenters heeft staan, bijvoorbeeld 'West Europe'. Bedrijven kiezen vaak een region dichtbij, zodat gegevens sneller beschikbaar zijn en om aan wetgeving over dataopslag te voldoen.",
    scenario:
      "Een klant vraagt: \"Staan onze bedrijfsgegevens wel in Nederland of Europa?\" Jij kijkt dan naar de gekozen region van hun Azure-omgeving, bijvoorbeeld 'West Europe', om dit te controleren.",
    controle: {
      vraag: "Wat is een region in Azure?",
      opties: [
        "Een fysiek gebied met Microsoft-datacenters",
        "Een groep gebruikers met dezelfde rechten",
        "Een virtuele computer",
        "Een wachtwoordinstelling",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een Nederlands bedrijf wil dat hun data binnen Europa blijft, vanwege privacyregels. Welk begrip is hierbij belangrijk?",
      opties: ["Region", "Container", "RBAC", "Tags"],
      correct: 0,
    },
  },
  {
    id: "resource-group",
    domein: "architectuur",
    naam: "Resource group",
    starttoets: {
      vraag: "In Azure staan een virtuele server, een database en opslag allemaal samen in één 'map' georganiseerd. Hoe heet zo'n verzameling bij elkaar horende onderdelen?",
      opties: [
        "Resource group",
        "Subscription",
        "Region",
        "Container",
      ],
      correct: 0,
    },
    uitleg:
      "Een resource group is een soort map waarin je alle Azure-onderdelen bij elkaar zet die bij één project of applicatie horen. Zo kan je ze makkelijk samen beheren, of in één keer verwijderen als het project stopt.",
    scenario:
      "Een collega zegt: \"Alle onderdelen van de nieuwe website — de server, de database en de opslag — zetten we in dezelfde resource group. Zo houden we overzicht en kunnen we alles in één keer opruimen.\"",
    controle: {
      vraag: "Waarvoor gebruik je een resource group?",
      opties: [
        "Om bij elkaar horende Azure-onderdelen samen te organiseren en beheren",
        "Om een wachtwoord te resetten",
        "Om een gebruiker in te loggen",
        "Om een internetverbinding te maken",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een IT'er wil alle onderdelen van één afgerond project in één keer opruimen. Wat is hiervoor het handigst?",
      opties: [
        "Alle onderdelen in dezelfde resource group verwijderen",
        "Elk onderdeel apart, in een andere region, verwijderen",
        "Een nieuwe subscription aanmaken",
        "MFA uitschakelen",
      ],
      correct: 0,
    },
  },
  {
    id: "subscription",
    domein: "architectuur",
    naam: "Subscription",
    starttoets: {
      vraag: "Een bedrijf heeft één \"Azure subscription\" waaronder alle resource groups, kosten en facturatie vallen. Wat is een subscription het beste te vergelijken met?",
      opties: [
        "Een soort hoofdaccount waaronder alles wordt afgerekend en beheerd",
        "Eén virtuele computer",
        "Eén gebruikersnaam en wachtwoord",
        "Een opslagmap voor bestanden",
      ],
      correct: 0,
    },
    uitleg:
      "Een subscription (abonnement) is de laag waarop Microsoft bijhoudt wat een bedrijf gebruikt en wat het kost. Alle resource groups en onderdelen van een bedrijf vallen onder één of meerdere subscriptions.",
    scenario:
      "Een klant belt: \"Ik snap niet waarom we twee facturen krijgen.\" Jij ontdekt dat het bedrijf twee aparte subscriptions heeft, bijvoorbeeld één voor productie en één voor testen. Daarom zijn er twee rekeningen.",
    controle: {
      vraag: "Waar is een subscription in Azure vooral voor bedoeld?",
      opties: [
        "Beheer en facturatie van alle onderliggende Azure-onderdelen",
        "Het aanmaken van een wachtwoord",
        "Het opslaan van bestanden",
        "Het inloggen op een virtuele machine",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een bedrijf wil de kosten van hun testomgeving apart bijhouden van hun productieomgeving. Wat richten ze hiervoor meestal apart in?",
      opties: [
        "Een aparte subscription",
        "Een aparte region",
        "Een aparte container",
        "Een ander wachtwoordbeleid",
      ],
      correct: 0,
    },
  },
  {
    id: "virtual-machine",
    domein: "architectuur",
    naam: "Virtual machine (VM)",
    starttoets: {
      vraag: "Een bedrijf heeft een 'computer' aangemaakt in Azure die eigenlijk software is, draaiend op een server bij Microsoft. Hoe heet dit?",
      opties: [
        "Virtual machine (virtuele machine)",
        "Resource group",
        "Region",
        "Storage account",
      ],
      correct: 0,
    },
    uitleg:
      "Een virtual machine (VM) is een computer die volledig bestaat uit software, draaiend op een fysieke server in een Azure-datacenter. Voor de gebruiker voelt het als een gewone computer, met een eigen besturingssysteem.",
    scenario:
      "Een collega moet een oude applicatie testen die alleen op Windows Server werkt. In plaats van een fysieke server te kopen, zet hij snel een virtuele machine in Azure op, test de applicatie, en zet hem daarna weer uit.",
    controle: {
      vraag: "Wat is een virtual machine?",
      opties: [
        "Een computer die volledig als software draait op een server in de cloud",
        "Een fysieke laptop van een medewerker",
        "Een groep gebruikers met dezelfde rechten",
        "Een opslagplek voor bestanden",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een ontwikkelaar heeft tijdelijk een Windows-server nodig om iets te testen, zonder nieuwe hardware te kopen. Wat is hiervoor een logische oplossing?",
      opties: [
        "Een virtual machine opzetten in Azure",
        "Een nieuwe subscription aanmaken",
        "MFA inschakelen",
        "Een resource group verwijderen",
      ],
      correct: 0,
    },
  },
  {
    id: "container",
    domein: "architectuur",
    naam: "Container",
    starttoets: {
      vraag: "Een ontwikkelaar verpakt een applicatie samen met alles wat nodig is om te draaien, zodat het overal hetzelfde werkt. Hoe heet zo'n verpakking?",
      opties: [
        "Container",
        "Virtual machine",
        "Resource group",
        "Region",
      ],
      correct: 0,
    },
    uitleg:
      "Een container is een lichte 'verpakking' van een applicatie met alles wat nodig is om te draaien. In tegenstelling tot een virtuele machine deelt een container het besturingssysteem met andere containers, waardoor het sneller opstart.",
    scenario:
      "Vergelijk het met een verhuisdoos: alles wat de applicatie nodig heeft zit al netjes ingepakt in de container. Of je die container nu op de laptop van de developer draait of op een Azure-server, hij werkt overal hetzelfde.",
    controle: {
      vraag: "Wat is een belangrijk voordeel van een container ten opzichte van een virtual machine?",
      opties: [
        "Een container start sneller op en is lichter",
        "Een container heeft altijd meer opslag",
        "Een container heeft geen internet nodig",
        "Een container kan niet verplaatst worden",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een developer wil dat een applicatie op elke computer exact hetzelfde werkt, zonder installatieproblemen. Wat gebruikt hij hiervoor vaak?",
      opties: ["Een container", "Een resource group", "MFA", "Een subscription"],
      correct: 0,
    },
  },
  {
    id: "storage",
    domein: "architectuur",
    naam: "Storage (blob/file)",
    starttoets: {
      vraag: "Een bedrijf slaat grote hoeveelheden foto's en documenten op in Azure, buiten een gewone computer om. Hoe heet deze Azure-dienst?",
      opties: [
        "Storage (opslag), bijvoorbeeld blob- of file-opslag",
        "Virtual machine",
        "Region",
        "RBAC",
      ],
      correct: 0,
    },
    uitleg:
      "Storage in Azure is opslagruimte in de cloud voor bestanden. Blob-opslag is bedoeld voor losse bestanden zoals foto's, video's en documenten. File-opslag werkt meer als een gedeelde netwerkschijf, met mappen die je kan openen zoals op een gewone computer.",
    scenario:
      "Een gebruiker vraagt: \"Waar staan de back-ups van onze klantfoto's precies?\" Antwoord: die staan niet op een lokale server, maar in Azure blob-opslag, veilig in de cloud.",
    controle: {
      vraag: "Waarvoor wordt Azure storage gebruikt?",
      opties: [
        "Voor het opslaan van bestanden en data in de cloud",
        "Voor het inloggen van gebruikers",
        "Voor het toekennen van rechten",
        "Voor het schalen van servers",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een bedrijf wil duizenden productfoto's veilig bewaren buiten hun eigen kantoor. Wat is hiervoor geschikt?",
      opties: [
        "Azure storage (bijvoorbeeld blob-opslag)",
        "Een virtual machine",
        "Een subscription",
        "MFA",
      ],
      correct: 0,
    },
  },
  {
    id: "virtueel-netwerk",
    domein: "architectuur",
    naam: "Virtueel netwerk",
    starttoets: {
      vraag: "Een bedrijf wil dat hun servers in Azure veilig met elkaar kunnen praten, alsof ze op hetzelfde kantoornetwerk staan. Wat richten ze hiervoor in?",
      opties: [
        "Een virtueel netwerk",
        "Een resource group",
        "Een container",
        "Een region",
      ],
      correct: 0,
    },
    uitleg:
      "Een virtueel netwerk is een eigen, afgeschermd netwerk binnen Azure. Hiermee kunnen onderdelen zoals virtuele machines veilig met elkaar en met het internet communiceren, ongeveer zoals een netwerk in een kantoorgebouw.",
    scenario:
      "Een collega legt uit: \"Deze twee virtuele servers kunnen alleen met elkaar praten omdat we ze in hetzelfde virtuele netwerk hebben gezet. Zo blijft het verkeer afgeschermd van buitenaf.\"",
    controle: {
      vraag: "Waarvoor dient een virtueel netwerk in Azure?",
      opties: [
        "Om Azure-onderdelen veilig met elkaar te laten communiceren",
        "Om bestanden op te slaan",
        "Om gebruikers in te loggen",
        "Om facturen te beheren",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een bedrijf wil dat hun servers in de cloud alleen onderling verbinding kunnen maken, afgeschermd van de rest van het internet. Wat regelt dit?",
      opties: ["Een virtueel netwerk", "Een subscription", "Tags", "Scalability"],
      correct: 0,
    },
  },

  // ===================== DOMEIN 3: BEHEER & SECURITY =====================
  {
    id: "entra-id",
    domein: "beheer-security",
    naam: "Microsoft Entra ID (login/identiteit)",
    starttoets: {
      vraag: "Als een medewerker inlogt bij Microsoft 365 met zijn bedrijfsaccount, welk systeem controleert dan wie hij is?",
      opties: [
        "Microsoft Entra ID",
        "Resource group",
        "Storage",
        "Scalability",
      ],
      correct: 0,
    },
    uitleg:
      "Microsoft Entra ID (voorheen Azure Active Directory) is het systeem dat bijhoudt wie een gebruiker is en regelt het inloggen. Het is te vergelijken met een digitale identiteitskaart voor alle Microsoft- en Azure-diensten van een bedrijf.",
    scenario:
      "Een nieuwe medewerker kan nog niet inloggen op zijn laptop. Jij controleert in Microsoft Entra ID of zijn account al is aangemaakt en actief is. Zonder een geldig Entra ID-account kan hij nergens inloggen.",
    controle: {
      vraag: "Wat regelt Microsoft Entra ID?",
      opties: [
        "Wie een gebruiker is, en of die mag inloggen",
        "Hoeveel opslag een bedrijf gebruikt",
        "In welke region servers staan",
        "Hoe een factuur wordt opgebouwd",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een medewerker krijgt de melding \"Account niet gevonden\" bij het inloggen op Microsoft 365. Waar controleer je dit het eerst?",
      opties: [
        "In Microsoft Entra ID, of het account bestaat en actief is",
        "In de resource group van de webshop",
        "In de storage-instellingen",
        "In de facturatiegegevens van de subscription",
      ],
      correct: 0,
    },
  },
  {
    id: "mfa",
    domein: "beheer-security",
    naam: "MFA (multifactor-authenticatie)",
    starttoets: {
      vraag: "Na het intypen van zijn wachtwoord moet een medewerker ook nog een code bevestigen in een app op zijn telefoon. Hoe heet deze extra beveiligingsstap?",
      opties: [
        "MFA (multifactor-authenticatie)",
        "RBAC",
        "Scalability",
        "Region",
      ],
      correct: 0,
    },
    uitleg:
      "MFA betekent dat je bij het inloggen niet alleen een wachtwoord gebruikt, maar ook een tweede bevestiging, bijvoorbeeld een code op je telefoon. Dit maakt het veel moeilijker voor een onbevoegde om in te loggen, zelfs als het wachtwoord bekend is.",
    scenario:
      "Een gebruiker belt: \"Ik moet steeds een code goedkeuren op mijn telefoon voordat ik kan inloggen, is dat normaal?\" Jij legt uit dat dit MFA is, een extra beveiligingslaag die het account beter beschermt.",
    controle: {
      vraag: "Wat is het doel van MFA?",
      opties: [
        "Een extra controle bij het inloggen, naast het wachtwoord",
        "Sneller inloggen zonder wachtwoord",
        "Meer opslagruimte krijgen",
        "Automatisch servers bijschalen",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een gebruiker is zijn wachtwoord kwijtgeraakt, maar iemand anders probeert toch in te loggen met een geraden wachtwoord. Wat voorkomt dat deze persoon binnenkomt?",
      opties: [
        "MFA, doordat er ook een tweede bevestiging nodig is",
        "Een grotere resource group",
        "Een nieuwe region",
        "Meer opslag",
      ],
      correct: 0,
    },
  },
  {
    id: "rbac",
    domein: "beheer-security",
    naam: "RBAC (rollen en rechten)",
    starttoets: {
      vraag: "Een stagiair mag in Azure alleen bestanden bekijken, maar niets verwijderen, terwijl een systeembeheerder alles mag. Hoe heet dit systeem van rollen en rechten?",
      opties: [
        "RBAC (Role-Based Access Control)",
        "MFA",
        "Scalability",
        "Storage",
      ],
      correct: 0,
    },
    uitleg:
      "RBAC betekent dat mensen rechten krijgen op basis van hun rol, bijvoorbeeld 'lezer' of 'beheerder'. Zo kan iemand alleen doen wat nodig is voor zijn functie, en niet per ongeluk (of expres) iets belangrijks aanpassen of verwijderen.",
    scenario:
      "Een nieuwe collega vraagt waarom hij een resource group niet kan verwijderen. Jij legt uit dat hij via RBAC de rol 'lezer' heeft gekregen: hij mag alles bekijken, maar niets aanpassen. Alleen beheerders hebben die rechten.",
    controle: {
      vraag: "Wat regelt RBAC?",
      opties: [
        "Welke rechten iemand heeft, op basis van zijn rol",
        "Hoeveel een bedrijf betaalt per maand",
        "In welk land de data staat",
        "Hoeveel servers er automatisch bijkomen",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een medewerker klaagt dat hij een virtuele machine niet mag verwijderen, terwijl een collega dat wel mag. Wat is hier waarschijnlijk de reden?",
      opties: [
        "Ze hebben via RBAC verschillende rollen/rechten gekregen",
        "Ze zitten in een andere region",
        "Er is geen MFA ingesteld",
        "De subscription is verlopen",
      ],
      correct: 0,
    },
  },
  {
    id: "kosten-tags",
    domein: "beheer-security",
    naam: "Kosten & tags",
    starttoets: {
      vraag: "Een bedrijf zet labels zoals \"Afdeling: Marketing\" op hun Azure-onderdelen, zodat ze precies weten welke afdeling waarvoor betaalt. Hoe heten deze labels?",
      opties: [
        "Tags",
        "Regions",
        "Containers",
        "Rollen",
      ],
      correct: 0,
    },
    uitleg:
      "Tags zijn labels die je aan Azure-onderdelen kan hangen, bijvoorbeeld met de naam van een project of afdeling. Hiermee kan een bedrijf makkelijk overzicht houden over de kosten: wie gebruikt wat, en wat kost dat.",
    scenario:
      "De financiële afdeling wil weten hoeveel de marketingafdeling aan Azure uitgeeft. Omdat alle onderdelen van marketing getagd zijn met \"Afdeling: Marketing\", kan dit snel worden opgezocht in het kostenoverzicht.",
    controle: {
      vraag: "Waarvoor gebruik je tags in Azure?",
      opties: [
        "Om onderdelen te labelen, bijvoorbeeld voor kostenoverzicht",
        "Om in te loggen op een account",
        "Om een virtuele machine te starten",
        "Om een netwerk te beveiligen",
      ],
      correct: 0,
    },
    eindcheck: {
      vraag: "Een manager wil precies zien hoeveel elk project maandelijks aan Azure kost. Wat helpt hierbij het meest?",
      opties: [
        "Onderdelen taggen per project, zodat kosten te filteren zijn",
        "Alle onderdelen in dezelfde region zetten",
        "MFA verplicht maken",
        "Alle rechten aan iedereen geven",
      ],
      correct: 0,
    },
  },
];
