'use strict'

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const vyletHavaj = (osoba1, osoba2) => {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    return `Holky mají dohromady naspořeno alespoň 100 000 Kč a můžou jet na Havaj.`;
  } else {
    return `Holky nemají dohromady naspořeno 100 000 Kč a na Havaj jet nemůžou.`;
  }
}




/*
if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
  return `Holky mají každá naspořeno alespoň 50 000 Kč a můžou jet na Havaj.`;
} else {
  if (osoba1.uspory < 50000) {
  return `Holky můžou jet na Havaj, ale ${osoba1.jmeno} bude dlužit kamarádce ${50000 - osoba1.uspory} Kč.`;
} else {  ((osoba1.uspory <= 50000) && (osoba2.uspory >= 50000)) {
  return `Holky můžou jet na Havaj, ale ${osoba1.jmeno} bude dlužit ${50000 - osoba1.uspory} Kč ${osoba2.jmeno}.`;
}
} else if ((osoba1.uspory <= 50000) && (osoba2.uspory <= 50000)) {
return `Žádná Havaj. Holky musí dohromady našetřit ještě ${100000 - osoba1.uspory - osoba2.uspory}, aby mohly na Havaj odjet. ${osoba1.jmeno} musí našetřit ${50000 - osoba1.uspory}, ${osoba2.jmeno} musí našetřit ${50000 - osoba2.uspory}.`;
} else if (osoba1.uspory >= 50000) {
return `Žádná Havaj. Holky musí dohromady našetřit ještě ${100000 - osoba1.uspory - osoba2.uspory}, aby mohly na Havaj odjet. ${osoba2.jmeno} musí našetřit ${50000 - osoba2.uspory}, ${osoba1.jmeno} už má našetřeno a může kamarádce půjčit ${osoba1.uspory - 50000}.`;
} return `Žádná Havaj. Holky musí dohromady našetřit ještě  ${100000 - osoba1.uspory - osoba2.uspory}, aby mohly na Havaj odjet. ${osoba1.jmeno} musí našetřit ${50000 - osoba1.uspory}, ${osoba2.jmeno} už má našetřeno a může kamarádce půjčit ${osoba2.uspory - 50000}.`;
};

*/