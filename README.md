# B&B Beurs

Een kleine webapp waarmee het team van [Bosh & Bordon](https://boshandbordon.be) een vakbeurs afloopt: de lijst met standen, per stand een contact en een notitie, en een grondplan dat aanvinkt waar je geweest bent.

Dit is een intern werkinstrument. De code staat publiek omdat GitHub Pages dat op een gratis account vraagt, niet omdat het een product is.

## Wat hier wel en niet staat

Hier staat de app zelf en de lijst van standhouders, zoals die publiek op de website van de beurs staat. Er staat **geen enkel bezoek, geen naam van een contactpersoon, geen e-mailadres en geen sleutel** in deze repository. Wat het team op de beurs invult, blijft op het eigen toestel en in een afgeschermde back-up van Bosh & Bordon.

## Hoe het gebouwd is

Eén `index.html` zonder build-stap, geen server en geen database. De app draait volledig in de browser en werkt zonder netwerk.

| Bestand | Rol |
|---|---|
| `index.html` | de hele app |
| `data.js`, `plan.js` | standenlijst en grondplan, gegenereerd uit de publieke gegevens van de beurs; niet met de hand bewerken |
| `sw.js`, `manifest.json`, iconen | zodat de pagina zonder netwerk opent en zich als app gedraagt; verhoog het versienummer in `sw.js` bij elke wijziging |
| `logos/` | logo's van de standhouders, verkleind |
| `jsqr.min.js`, `fflate.min.js`, `league-spartan.woff2` | materiaal van derden |

## Licentie en materiaal van derden

De code is van Bosh & Bordon en alle rechten zijn voorbehouden, zie [LICENSE](LICENSE). De logo's van standhouders, het vloerplan en de meegeleverde bibliotheken zijn van hun eigenaars, zie [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

Staat uw bedrijfslogo hier en wilt u dat niet? Eén bericht volstaat en het is weg.

## Contact

Bosh & Bordon, Gent · aime@boshandbordon.be · een beveiligingsprobleem melden: zie [SECURITY.md](SECURITY.md)
