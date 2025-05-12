# Overall chant data
chants_tabmat_data <- list(
  `01 - salutation` = 1:config::get("salutation_chant"),
  `02 - adoration` = (config::get("salutation_chant") + 1):config::get(
    "adoration_chant"
  ),
  `03 - répentance` = (config::get("adoration_chant") + 1):config::get(
    "repentance_chant"
  ),
  `04 - parole de grâce` = (config::get("repentance_chant") + 1):config::get(
    "parole_grace_chant"
  ),
  `05 - loi de Dieu` = (config::get("parole_grace_chant") + 1):config::get(
    "loi_de_Dieu_chant"
  ),
  `06 - confession de foi` = (config::get("loi_de_Dieu_chant") + 1):config::get(
    "confession_foi_chant"
  ),
  `07 - avent de noël` = (config::get("confession_foi_chant") + 1):config::get(
    "avent_noel_chant"
  ),
  `08 - passion de paques` = (config::get("avent_noel_chant") + 1):config::get(
    "passion_paques_chant"
  ),
  `09 - ascension et pentecôte` = (config::get("passion_paques_chant") +
    1):config::get("ascension_pentecote_chant"),
  `10 - sainte cène` = (config::get("ascension_pentecote_chant") +
    1):config::get("sainte_cene_chant"),
  `11 - louanges divers` = (config::get("sainte_cene_chant") + 1):config::get(
    "louange_divers_chant"
  ),
  `12 - offrande` = (config::get("louange_divers_chant") + 1):config::get(
    "offrande_chant"
  ),
  `13 - chants nuptiaux` = (config::get("offrande_chant") + 1):config::get(
    "chant_nuptiaux"
  )
)
