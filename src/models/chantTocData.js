import { EmojiSmile } from "react-bootstrap-icons";

// Simulated config object (replace these with actual values or config access)
const config = {
  number_chant: 208,
  salutation_chant: 35,
  adoration_chant: 65,
  repentance_chant: 85,
  parole_grace_chant: 120,
  loi_de_Dieu_chant: 143,
  confession_foi_chant: 151,
  avent_noel_chant: 164,
  passion_paques_chant: 174,
  ascension_pentecote_chant: 178,
  sainte_cene_chant: 182,
  louange_divers_chant: 196,
  offrande_chant: 202,
  chant_nuptiaux: 208,
};

// Helper function to generate number ranges like R's x:y
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Building the chants_tabmat_data object

const chantTocData = {
  "01 - salutation": range(1, config.salutation_chant),
  "02 - adoration": range(config.salutation_chant + 1, config.adoration_chant),
  "03 - répentance": range(config.adoration_chant + 1, config.repentance_chant),
  "04 - parole de grâce": range(
    config.repentance_chant + 1,
    config.parole_grace_chant
  ),
  "05 - loi de Dieu": range(
    config.parole_grace_chant + 1,
    config.loi_de_Dieu_chant
  ),
  "06 - confession de foi": range(
    config.loi_de_Dieu_chant + 1,
    config.confession_foi_chant
  ),
  "07 - avent de noël": range(
    config.confession_foi_chant + 1,
    config.avent_noel_chant
  ),
  "08 - passion de paques": range(
    config.avent_noel_chant + 1,
    config.passion_paques_chant
  ),
  "09 - ascension et pentecôte": range(
    config.passion_paques_chant + 1,
    config.ascension_pentecote_chant
  ),
  "10 - sainte cène": range(
    config.ascension_pentecote_chant + 1,
    config.sainte_cene_chant
  ),
  "11 - louanges divers": range(
    config.sainte_cene_chant + 1,
    config.louange_divers_chant
  ),
  "12 - offrande": range(
    config.louange_divers_chant + 1,
    config.offrande_chant
  ),
  "13 - chants nuptiaux": range(
    config.offrande_chant + 1,
    config.chant_nuptiaux
  ),
};

export default chantTocData;
