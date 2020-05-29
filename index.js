'use strict'

let osoba1 = {
  jmeno: 'Alena',
  uspory: 5300
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const vyletHavaj = (osoba1, osoba2) => {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      return `Kamarádky mají dohromady alespoň 100000 Kč, každá má alespoň 50 000 Kč, a můžou jet na Havaj.`;
    } else if (osoba1.uspory < 50000) {
      return `Kamarádky majídohromady alespoň 100000 Kč, ale ${osoba1.jmeno} má pouze ${osoba1.uspory} Kč, tudíž bude dlužit kamarádce ${(50000 - osoba1.uspory)} Kč, na Havaj holky odjet můžou.`;
    } else {
      return `Kamarádky mají dohromady alespoň 100000 Kč, ale ${osoba2.jmeno} má pouze ${osoba2.uspory} Kč, tudíž bude dlužit kamarádce ${(50000 - osoba2.uspory)} Kč, na Havaj holky odjet můžou.`;
    }

  } else if (osoba1.uspory < 50000 && osoba2.uspory < 50000) {
    return `Kamarádky musí dohromady našetřit ${(100000 - osoba1.uspory - osoba2.uspory)} Kč, aby měly 100000 Kč, a mohly odjet na Havaj. ${osoba1.jmeno} musí našetřit alespoň ${(50000 - osoba1.uspory)} Kč a ${osoba2.jmeno} musí našetřit alespoň ${(50000 - osoba2.uspory)} Kč.`;
  } else if (osoba1.uspory < 50000) {
    return `${osoba1.jmeno} má našetřeno ${osoba1.uspory} Kč a ${osoba2.jmeno} ${osoba2.uspory} Kč, tudíž na Havaj ještě jet nemůžou. ${osoba1.jmeno} musí našetřit alespoň ${(100000 - osoba1.uspory - osoba2.uspory)} Kč, aby mohly jet, a bude dlužit kamarádce ještě ${(osoba2.uspory - 50000)} Kč.`;
  } else {
    return `${osoba1.jmeno} má našetřeno ${osoba1.uspory} Kč a ${osoba2.jmeno} ${osoba2.uspory} Kč, tudíž na Havaj ještě jet nemůžou. ${osoba2.jmeno} musí našetřit alespoň ${(100000 - osoba2.uspory - osoba1.uspory)} Kč, aby mohly jet, a bude dlužit kamarádce ještě ${(osoba1.uspory - 50000)} Kč.`;
  }
}