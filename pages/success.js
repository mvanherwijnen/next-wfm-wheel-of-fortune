import Head from 'next/head'
import { WheelComponent } from '@components/WheelOfPrizes'

import Footer from '@components/Footer'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

export default function Success() {
  const [prize, setPrize] = useState('');
  const [dealId, setDealId] = useState('');
  const [rand, setRand] = useState(0);
  const searchParams = useSearchParams();
  const dealIdSearchParam = searchParams.get('dealId');
  const segments = [
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Bij deelname aan een training, is de tweede deelnemer gratis',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'De gratis WFM scan',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    '20% korting op een assessment',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    '10% korting op een assessment',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    '20% korting op een WFM scan',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
    'Helaas geen prijs',
    'Gratis uurtje sparren',
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

  const { width, height } = useWindowSize();

  useEffect(() => {
    setRand(Math.random() * 400)
  }, [])
  console.log(rand);
  return (
    <div className="container">
      {prize && <ReactConfetti width={width} height={height}/>}
      <Head>
        <title>Next WFM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{position: 'relative', display: "flex", alignItems: "center", flexDirection: "row"}}>
        {prize && <div style={{position: 'absolute', backgroundColor: 'white', fontSize: "32px", padding: "0px 16px 12px", marginLeft: "-132px", borderRadius: "8px", width: "800px", textAlign: "center", opacity: "95%"}}>{`${prize === "Helaas geen prijs" ? "😭😭" : "🎉🎉"} ${prize} ${prize === "Helaas geen prijs" ? "😭😭" : "🎉🎉"}`}</div>}
      {rand && <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(prize) => onFinished(prize)}
        primaryColor='#484749'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={true}
        size={height > width ? width / 2.1 : height / 2.1}
        upDuration={56 + rand}
        downDuration={112 + rand}
        fontFamily='Arial'
        fontSize='1.5em'
      />}
      <div style={{width: "400px", marginLeft: "24px"}}>
        <h1>Gegevens ontvangen!</h1>
        <p>Draai nu aan het rad en maak vrijblijvend kans op een NEXT WFM scan!</p>
      </div>
      
      </main>

      <Footer />
    </div>
  )
}
