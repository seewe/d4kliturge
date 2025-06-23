import React from "react";

const ConfidentialiteText = () => {
  return (
    <div className="space-y-4 text-base leading-relaxed">
      <p>
        <strong>Liturge</strong> est developpé par{" "}
        <strong>Data for Know.</strong>
      </p>
      <p>
        Le terme Application s'applique à l'application pour mobile ou tablette
        Android nommée « Liturge ».
      </p>
      <p>
        Nos règles de confidentialité expliquent quelles données nous collectons
        depuis l'Application et les raisons de cette collecte, comment nous
        utilisons/traitons ces informations et à quels tiers nous pourrions
        éventuellement les divulguer.
      </p>
      <h3>Données personnelles</h3>
      <p>
        Depuis notre Application, nous ne collectons aucune donnée personnelle
        (par exemple: les noms, les adresses, les numéros de téléphone, les
        adresses de courrier électronique ou les adresses IP complètes).
      </p>
      <h3>Données relatives à la communication</h3>
      <p>
        Lorsque vous utilisez notre Application, nous ne conservons aucune
        donnée.
      </p>
      <h3>Permissions demandées par l'Application</h3>
      <h4>Utilisation de la camera</h4>
      <p>
        L'Application n'utilise jamais votre camera et elle ne demande aucune
        permission pour y avoir accès.
      </p>
      <h4>Utilisation de la liste des contacts</h4>
      <p>
        L'Application n'utilise aucune liste de contact pour son fonctionnement
        et ne demande jamais accès à vos contacts.
      </p>
      <h4>Utilisation de la gallerie des photos</h4>
      <p>
        L'Application n'utilise aucune de vos photos et ne demande jamais
        d'accéder à votre gallerie photo.
      </p>
      <h3>Données personnelles non collectées automatiquement</h3>
      <p>
        1. L'Application
        <strong>
          {" "}
          ne collecte aucune données personnelles qui permettent d'identifier
          les utilisateurs
        </strong>
        .
      </p>
      <p>
        2. L'Application{" "}
        <strong>
          ne vend, n'échange ou ne partage aucune données des utilisateurs
        </strong>
        avec des compagnies tiers ou toutes autres organisation.
      </p>
      <p>
        Nous restons disponible pour toutes les questions que vous pourrez avoir
        au sujet de la sécurité de vos données pendant l'utilisation de
        l'Application.
      </p>

      <span className="mb-0 p-1 d-flex justify-content-center ">
        <img
          alt=""
          src="../../src/assets/d4kico.png"
          width="100"
          height="100"
          className="shadow rounded-circle"
        />
      </span>
    </div>
  );
};

export default ConfidentialiteText;
