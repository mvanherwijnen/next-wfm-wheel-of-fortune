import Head from 'next/head'
import { WheelComponent } from '@components/WheelOfPrizes'

import Footer from '@components/Footer'

export default function Success() {
  const segments = [
    'better luck next time',
    'won 70',
    'NEXT WFM Scan',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }

  return (
    <div className="container">
      <Head>
        <title>Next WFM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Gegevens ontvangen!</h1>
        <p>Draai nu aan het rad en maak vrijblijvend kans op een NEXT WFM scan!</p>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily='Arial'
      />
      </main>

      <Footer />
    </div>
  )
}
