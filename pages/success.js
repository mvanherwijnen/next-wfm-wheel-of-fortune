import Head from 'next/head'
import { WheelComponent } from '@components/WheelOfPrizes'

import Footer from '@components/Footer'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

export default function Success() {
  const [prize, setPrize] = useState('');
  const [dealId, setDealId] = useState('');
  const searchParams = useSearchParams();
  const dealIdSearchParam = searchParams.get('dealId');
  const segments = [
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Tweede deelnemer gratis bij deelname aan training',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    '20% op een complete WFM scan',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    '20% korting op een assessment',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    '10% korting op een assessment',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    '20% op een complete WFM scan',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    'Helaas geen prijs',
    'Gratis koffie uurtje sparren',
    '15% korting op een training',
    'Helaas geen prijs',
  ]
  const segColors = [
    '#3C5270',
    '#F36F21',
  ]

  console.log(dealIdSearchParam);
  useEffect(() => {dealIdSearchParam && setDealId(dealIdSearchParam)}, [dealIdSearchParam])
  const onFinished = (prize) => {
    console.log(dealId)
    setPrize(prize)
  }

  useEffect(() => {
    const doThing = async () => prize && await fetch("/.netlify/functions/prize", {method: 'POST', body: JSON.stringify({ dealId, prize })});
    console.log(dealId, prize)
    doThing();
  }, [dealId, prize])

  return (
    <div className="container">
      <Head>
        <title>Next WFM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{position: 'relative'}}>
        {prize && <div style={{position: 'absolute', backgroundColor: 'white', fontSize: "32px", padding: "32px 16px", borderRadius: "8px", width: "800px", textAlign: "center", opacity: "95%"}}>{`${prize === "Helaas geen prijs" ? "😭😭" : "🎉🎉"} ${prize} ${prize === "Helaas geen prijs" ? "😭😭" : "🎉🎉"}`}</div>}
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(prize) => onFinished(prize)}
        primaryColor='#484749'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={true}
        size={600}
        upDuration={234}
        downDuration={442}
        fontFamily='Arial'
      />
      <h1>Gegevens ontvangen!</h1>
        <p>Draai nu aan het rad en maak vrijblijvend kans op een NEXT WFM scan!</p>
      </main>

      <Footer />
    </div>
  )
}
