import React from 'react'
import { heroapi, toprateslaes, highlight, sneaker } from '../data/data';
import Hero from '../components/Hero'
import Stories from '../components/Popular'
import Sales from '../components/Sales'
import FlexContent from '../components/FlexContent'

const Home = () => {
  return (
    <React.Fragment>
        
        <main className='flex flex-col gap-16 relative'>
            <Hero heroapi={heroapi} />
            <Stories  toprateslaes={toprateslaes} />
            <Sales endpoint={toprateslaes}  ifExists />
            <FlexContent  endpoint={highlight}  />
            <Sales endpoint={toprateslaes}  />
            <FlexContent endpoint={sneaker} />
        </main>
    </React.Fragment>
  )
}

export default Home