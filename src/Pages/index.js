import Header from './Components/Header'
import Aside from './Components/Aside'
import Footer from './Components/Footer'

// Componentes que renderizam com Side Server Rendering
export default function HomePage() {
    return(
        <div>
            <Header />
            <Aside />
            <Footer />
        </div>
    )
}