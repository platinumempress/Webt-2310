<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coral Reefs</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&amp;display=swap" 
    rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">    
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Coral Reefs Of The World</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Reefs.html" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Reefs 
                </a>    
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Reefs.html">Reefs</a></li>
                  <li><a class="dropdown-item" href="https://www.noaa.gov/education/resource-collections/marine-life/coral-reef-ecosystems">National Oceanic and Atmospheric Administration (.gov)</a></li>
                  <li><a class="dropdown-item" href="https://www2.gbrmpa.gov.au/">Reef Authority</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
                Community 
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Community.html">Community</a></li>
                  <li><a class="dropdown-item" href="https://www.floridareef.org/">Florida Friends</a></li>
                  <li><a class="dropdown-item" href="https://www.barrierreef.org/">Aussie Friends</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
               View
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Video.html">Video</a></li>
                  <li><a class="dropdown-item" href="https://www.youtube.com/watch">ABC Science</a></li>
                  <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=ZiULxLLP32s">National Geographic</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
                News
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Chairity.html">Contact</a></li>
                  <li><a class="dropdown-item" href="https://www.worldwildlife.org/pages/everything-you-need-to-know-about-coral-bleaching-and-how-we-can-stop-it">WorldWildlife.Org</a>
                  </li>
              </ul>
             </li> 
            </ul>
            <a href="Video.html" class="btn btn-outline-light rounded-0 mx-auto d-block mt-3">Donate</a>
         </div> 
      </div>         
    </nav>
    </div>
    <div class="container">
    <div id="header_img" class="p-5 mb-4 bg-dark rounded-0">
      <div class="container-fluid py-5">
       <img id="header_img" class="d-block mx-auto text-center">
        <div class="text-center">
        <a href="Community.html" class="btn btn-outline-light btn-sm rounded-0 mt-3 ">Learn More</a>
      </div>
     </div>
     </div> 
     <hr>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Sign-in</button>
     <!-- Modal -->
     <div id="modal-container">
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
             <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">Sign-in</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
               <form>
                 <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                 </div>
                 <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Password</label>
                   <input type="password" class="form-control" id="exampleInputPassword1">
                 </div>
                 <div class="mb-3 form-check">
                   <input type="checkbox" class="form-check-input" id="exampleCheck1">
                   <label class="form-check-label" for="exampleCheck1">Check me out</label>
                 </div>
               </form> 
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-outline-primary">Submit</button>
             </div>
           </div>
         </div>
       </div>
     </div>
     <hr>
     <div class="container">
         <div class="row row-cols-md-6 row-cols-lg-4 mb-4">
             <div class="card


             from start1
             <div id="header_img" class="bg-dark rounded-0">
                <div class="container-fluid py-5">
                  <img id="header" class="d-block mx-auto img-fluid" src="images/Ciprini.svg" 
                  alt="Coral logo">
                  <a href="Community.html" class="btn btn-light rounded-0 mx-auto d-block mt-3">Learn More</a>  
                </div>
              </div> 
              <hr>
              <div class="row">
                 <div class="col-md-6 col-lg-4">
                    <h2 class="text-center">Coral</h2>
                    <img class="img-fluid my-3 rounded-4" src="images/most_coral.jpeg" alt="pinkcoral"> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates at labore ipsum ad voluptas velit 
                            beatae illo maiores accusamus nulla? Laboriosam nihil officia nesciunt ullam odit sapiente quidem 
                            obcaecati harum.</p>  
                            
                            
            <div id="header_img" class="bg-dark rounded-0">
                <div class="container-fluid py-5">
                  <img id="header" class="d-block mx-auto img-fluid" src="images/Ciprini.svg" 
                  alt="Coral logo">
                  <a href="Community.html" class="btn btn-light rounded-0 mx-auto d-block mt-3">Learn More</a>  
                </div>
            </div> 
            
            <a href="Community.html" class="btn btn-light rounded-0 mx-auto d-block mt-3">Learn More</a>  
            
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a short card.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body ">
                        <div class="text-bg-light p-3">Light with contrasting color</div>
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>            




              <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coral Reefs</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&amp;display=swap" 
    rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">    
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Coral Reefs Of The World</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Reefs.html" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Reefs 
                </a>    
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Reefs.html">Reefs</a></li>
                  <li><a class="dropdown-item" href="https://www.noaa.gov/education/resource-collections/marine-life/coral-reef-ecosystems">National Oceanic and Atmospheric Administration (.gov)</a></li>
                  <li><a class="dropdown-item" href="https://www2.gbrmpa.gov.au/">Reef Authority</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
                Community 
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Community.html">Community</a></li>
                  <li><a class="dropdown-item" href="https://www.floridareef.org/">Florida Friends</a></li>
                  <li><a class="dropdown-item" href="https://www.barrierreef.org/">Aussie Friends</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
               View
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Video.html">Video</a></li>
                  <li><a class="dropdown-item" href="https://www.youtube.com/watch">ABC Science</a></li>
                  <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=ZiULxLLP32s">National Geographic</a>
                  </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle=
              "dropdown" aria-expanded="false">
                News
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Chairity.html">Contact</a></li>
                  <li><a class="dropdown-item" href="https://www.worldwildlife.org/pages/everything-you-need-to-know-about-coral-bleaching-and-how-we-can-stop-it">WorldWildlife.Org</a>
                  </li>
              </ul>
             </li> 
            </ul>
            <a href="Video.html." class="btn btn-outline-light rounded-0 mx-auto d-block mt-3">Donate</a>
         </div> 
      </div>         
    </nav>
    </div>
    <div class="container">
    <div id="header_img" class="p-5 mb-4 bg-dark rounded-0">
      <div class="container-fluid py-5">
       <img id="header_img" class="d-block mx-auto" class="text-center">
        <div class="text-center">
        <a href="Community.html" class="btn btn-outline-light btn-sm rounded-0 mt-3 ">Learn More</a>
      </div>
     </div>
     </div> 
     <hr>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Sign-in</button>
     
     <!-- Modal -->
     <div id="modal-container">
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
             <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">Sign-in</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
               <form>
                 <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                 </div>
                 <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Password</label>
                   <input type="password" class="form-control" id="exampleInputPassword1">
                 </div>
                 <div class="mb-3 form-check">
                   <input type="checkbox" class="form-check-input" id="exampleCheck1">
                   <label class="form-check-label" for="exampleCheck1">Check me out</label>
                 </div>
               </form> 
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-outline-primary">Submit</button>
             </div>
           </div>
         </div>
       </div>
     <hr>
     <div class="container">
         <div class="row row-col-md-6 row-col-lg-4 mb-4">
             <div class="card text-bg-dark h-100">
                         <img src="images/most_coral.jpeg" class="card-img" alt="pinkcoral">
                         <div class="card-img-overlay">
                             <h3 class="card-title">Coral Bioluminescence</h3>
                             <p class="card-text">Bioluminescence in coral is when corals emit light 
                               through chemical reactions. This glow can attract prey, deter predators, or aid symbiotic relationships. These light displays enhance reef beauty and play a crucial role in their ecological dynamics.</p>
                         </div>
                     </div>
      </div>
         <div class="row row-col-md-6 row-col-lg-4 mb-4">
               
                 <div class="card text-bg-dark h-100">
                     <img src="images/light2.png" class="card-img" alt="purple coral">
                     <div class="card-img-overlay">
                         <h3 class="card-title">Around the World</h3>
                         <p class="card-text">Coral reefs are found in tropical and subtropical oceans worldwide, from Australia's Great Barrier Reef to the Maldives' atolls. These vibrant underwater cities host diverse marine life, providing shelter, food, and breeding grounds for countless species.</p>
                      </div>
                 </div>
             </div>
                <div class="row row-col-lg-4 mb-4"></div>
                     
                        <div class="card text-bg-dark h-100">
                            <img src="images/GBReefPark.jpeg" class="card-img" alt="clam coral">
                            <div class="card-img-overlay">
                                <h3 class="card-title">Reefs as a Habitat</h3>
                                <p class="card-text">Often called the "rainforests of the sea," coral reefs boast rich biodiversity. They provide essential habitats for many marine organisms, offering protection, breeding sites, and abundant food resources, crucial for the survival of numerous species.</p>
                            </div>
                        </div>
                    </div>
                </div>
              <hr>
              <div class="row"> 
                  <div class="col-lg-12">
                      <a href="News.html" class="btn btn-outline-light rounded-0 mx-auto d-block mt-3">More News</a>
                  </div>
              </div>
              <hr>
     
     
    <div id="Welcome" class="p-5 mb-4 bg-light rounded-0">
      <div id="panel_bg" class="container-fluid py-5 bg-translucent bg-opacity-75 rounded-4">
        <h3>Coral Reefs' Function in the World</h3>
        <p>Coral reefs are vital for our planet's health. They protect coastlines from erosion, support local economies 
           through tourism and fishing, contribute to global biodiversity, and are sources of new medicines. Their ecological services are invaluable, highlighting the need for conservation.</p>                 
        <a href="Reefs.html" class="btn btn-light rounded-0 mt-3 w-auto">Learn More</a>                      
       </div>
      </div>
      <hr>
    <div id="W2pg1" class="p-5 mb-4 bg-light rounded-0">
      <div id="panel_bg2" class="container-fluid py-5 bg-translucent bg-opacity-75 rounded-4">
        <h3>Dangers to the Coral Reefs</h3>
        <p>Coral reefs are under severe threat from climate change, pollution, overfishing, and destructive practices.
           Rising sea temperatures and ocean acidification cause widespread coral bleaching, while plastic pollution and chemical 
           runoff cause further harm. The loss of coral reefs would devastate marine life and human communities. To help protect 
           these vital ecosystems, please consider donating to coral reef conservation organizations. Your support can preserve 
           these underwater treasures. Donate now to save our coral reefs!</p>
        <a href="https://www.worldwildlife.org/pages/everything-you-need-to-know-about-coral-bleaching-and-how-we-can-stop-it" class="btn btn-light rounded-0 mt-3 w-auto">Donate</a>                
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-lg-12 py-4 text-center">
            <footer>&copy; 2024 Coral Reefs Of The World</footer>
        </div>
        <hr>    
        <div class="row">       
            <div class="col-lg-12 py-4 text-center">
                <i class="fa-brands fa-x-twitter fs-3 p-2"></i> 
                <i class="fa-brands fa-tiktok fs-3 p-2"></i> 
                <i class="fa-brands fa-facebook fs-3 p-2"></i>
                <i class="fa-brands fa-instagram fs-3 p-2"></i>
                <i class="fa-brands fa-youtube fs-3 p-2"></i>  
            </div>    
        </div>
    </div>
</body>

</html>