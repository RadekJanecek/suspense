import './App.css'
import DelayDisplay from './components/DelayDisplay'
import IPFetcher from './components/IPFetcher'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <IPFetcher ip="37.205.13.13" />
      </Suspense>
      <Suspense fallback={<p>loooooading ...</p>}>
        <DelayDisplay />
      </Suspense>
    </>	
  )
}

export default App
