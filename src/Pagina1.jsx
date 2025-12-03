
function Pagina1() {
  return (
    <>
      <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="src\assets\286053-Sepik.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="src\assets\881478.png" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="src\assets\2123485-3840x2160-desktop-4k-mario-background.jpg" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item"><a href="#" class="page-link">Previous</a></li>
            <li class="page-item"><a class="page-link" href="/pagina1">1</a></li>
            <li class="page-item"><a class="page-link" href="/pagina2">2</a></li>
            <li class="page-item"><a class="page-link" href="/pagina3">3</a></li>
            <li class="page-item"><a class="page-link" href="/">Pag Principal</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagina1