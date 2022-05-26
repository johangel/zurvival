import type { NextPage } from 'next'
import Head from 'next/head'
import Player, { PlayerProfessions } from '../data/player';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zurvival</title>
        <meta name="description" content="A survival RPG made with nextjs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello, Zurvivor!</div>
    </div>
  )
}

export default Home
