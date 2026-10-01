// De beurzen die de app kent. De keuze bovenaan de lijst wisselt ertussen.
// oud: true = Empack, van vóór de keuze: bestanden in de root, opslag en back-up zonder voorvoegsel.
// Elke nieuwe beurs heeft een eigen map, een eigen opslag op het toestel en een eigen map in de back-up.
window.BEURZEN = [
  { slug: "empack-gent-2026", titel: "Empack Gent 2026", van: "2026-09-22", tot: "2026-09-23", map: ".", oud: true },
  { slug: "abiss-kortrijk-2026", titel: "Abiss Kortrijk 2026", van: "2026-10-08", tot: "2026-10-08", map: "beurzen/abiss-kortrijk-2026" },
  { slug: "bilt-gent-2026", titel: "Bilt Gent 2026", van: "2026-10-10", tot: "2026-10-18", map: "beurzen/bilt-gent-2026" },
  { slug: "bcd-brugge-2026", titel: "Bedrijvencontactdagen Brugge 2026", van: "2026-10-28", tot: "2026-10-29", map: "beurzen/bcd-brugge-2026" }
];
