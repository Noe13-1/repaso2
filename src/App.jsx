
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Principal from './Principal'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'
import Pagina1 from './Pagina1'

function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Prin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/pagina1">Pagina1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/pagina2">Pagina2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/pagina3">Pagina3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path='/' element={<Principal></Principal>}></Route>
      <Route path='/pagina1' element={<Pagina1></Pagina1>}></Route>
      <Route path='/pagina2'element={<Pagina2></Pagina2>}></Route>
      <Route path='/pagina3' element={<Pagina3></Pagina3>}></Route>

    </Routes>
    </>
  )
}

export default App
