import '../assets/index.scss'
import FeedbackList from '../widgets/FeedbackList'
import AppRouter from './router/AppRouter'

function App() {
  return ( <>
    <AppRouter />
    <FeedbackList updateModalData={() => {}} />
  </>
  
  )
}

export default App
