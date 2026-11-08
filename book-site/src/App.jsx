import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Step_Bible } from './pages/Step_Bible'
import { Layout } from './components/Layout'



function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/step_bible" element={<Step_Bible />} />
                <Route path="*" element={<p>Page not found...</p>} />
            </Route>
        </Routes>
    )

}

export default App
