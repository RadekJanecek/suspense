import './App.css'
import IPFetcher from './components/IPFetcher'
import { Suspense } from 'react'

function App() {

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <IPFetcher ip="37.205.13.13" />
    </Suspense>
  )
}

export default App
