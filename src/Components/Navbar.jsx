const Navbar=({setcategory})=> {

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setcategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={()=>setcategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setcategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setcategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setcategory("sport")}>Sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setcategory("entertainment")}>Entertainment</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
