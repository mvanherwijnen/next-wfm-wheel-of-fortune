export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hoi 👋! <br/>
        Laat je gegevens achter en maak kans op korting op jouw WFM scan ter waarde van €5.000,-!
       </p>
       <p><em>Hoe werkt het?</em></p>
       <ol>
        <li>Vul je naam en e-mailadres in.</li>
        <li>Draai aan het (digitale) rad van fortuin.</li>
        <li>Zie meteen het resultaat!</li>
       </ol>
    </>
  );
}
