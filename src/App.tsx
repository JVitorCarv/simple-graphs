import CyProvider from './providers/CyProvider'
import { DirectionProvider } from './providers/DirectionProvider'
import { NodeLabelProvider } from './providers/NodeLabelProvider'
import GlobalStyles from './GlobalStyles'
import NetworkGraph from './components/NetworkGraph/NetworkGraph'

function App() {
  return (
    <>
      <GlobalStyles/>
      <NodeLabelProvider>
        <DirectionProvider>
          <CyProvider>
            <NetworkGraph />
          </CyProvider>
        </DirectionProvider>
      </NodeLabelProvider>
    </>
  )
}

export default App
