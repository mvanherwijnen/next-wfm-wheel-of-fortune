export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hoi 👋! <br/>
        Laat je gegevens achter en maak kans op kortin op jouw WFM scan ter waarde van 5000 euro!
       </p>
       <p><em>Hoe werkt het?</em></p>
       <ol>
        <li>Vul je naam en email adres in.</li>
        <li>Draai aan het (digitale) rad van fortuin.</li>
        <li>Zie meteen het resultaat!</li>
       </ol>
    </>
  );
}
