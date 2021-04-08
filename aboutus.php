<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persnoal website</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://kit.fontawesome.com/7786d4e471.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
 
</head>
<body>
   
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"> <a href="#"> MyTrav<span>el.</span></a></div>

            

            <ul class="menu">
                
                <li><a href="index.html">Home</a></li>
                <li><a href="cameroon.html">Cameroon</a></li>
                <li><a href="mauritius.html">Mauritius</a></li>
                <li><a href="unitedkingdom.html">UK</a></li>
                <li><a href="aboutus.php">About Us</a></li>
            </ul>

            <div class="menu-btn">
          <i class="fas fa-bars"></i>
            </div>
        </div>

    </nav>





    <!--- Home section-->

    <section class="home" id="home">

        <div class="max-width">

       <div class="home-content">

        <div class="text-1">Proving you with live </div>
        <div class="text-2">Travel information</div>
        <div class="text-3">for <span class="typing"></span></div>
       </div>
        </div>
    </section>



    <!-- about section start-->

    <section class="about" id="about">
             <div class="max-width">

<h2 class="title">  Background</h2>
                <div class="about-content">

                    <div class="column left">
                        <img src="./images/IMG-20210130-WA0034.jpg" alt="    ">
    
                    </div>


                    <div class="column right">


                        <div class="text">Liyeuk Reynald is a <span class="typing-2"></span></div>

                        <p> He schools at the African Leadership College in Mauritius.<br> 
                            He majors in Computing and has a keen interest in data science, data streaming and analytics.<br>
                            He enjoys writing backend code and loves building data and machine learning piplelines.<br>
                            He codes primarily in Scala , Java and is a fan of functional programming.
                        </p>
                    </div>
                </div>
             </div>



    </section>



<!-- tech stack-->

<section class="tech" id="tech">
    <div class="max-width">
        <h2 class="title">Tech Stack</h2>
        <div class="carousel owl-carousel">
            <div class="card">
                <div class="box">
                    <img src="images/php.png" alt="">
                    <div class="text">PHP</div>
                    <p>Used to communicate with the database. Messages sent by visitors are sent to the database.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="images/jquery.png" alt="">
                    <div class="text">jQuery</div>
                    <p>Used to manipute the DOM,for interactivity</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="images/chart.png" alt="">
                    <div class="text">Chart js</div>
                    <p>used to visualize the data collected from APIs</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="images/balsamiq_logo.jpeg" alt="">
                    <div class="text">Balsamiq</div>
                    <p>Used to design the wireframes of the website</p>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="images/ht.png" alt="" >
                    <div class="text">HTMl,JS & CSS</div>
                    <p>Used to build the website, validate form, style it, makimg it responsive and to manipulate the DOM</p>
                </div>
            </div>
                <div class="card">
                    <div class="box">
                        <img src="images/MySQL-Logo.jpeg" alt="">
                        <div class="text">MySQL</div>
                        <p>Used to store messages and details of visitors of the site</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/bootstrap.jpeg" alt="">
                        <div class="text">Bootstrap</div>
                        <p>will use it</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="images/d3JS.jpeg" alt="">
                        <div class="text">D3.js</div>
                        <p>Used it to read data from a local csv file</p>
                    </div>
                </div>
        </div>
    </div>
</section>

 <!-- contact section start -->
 <section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">Contact Us</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">How to find us</div>
                <p>Do you have any queries? Do well to send them in. 
                    <br>We are very responsive and would reply all messages within 2 business days.<br> 
                    You can also pass by our office and we will attend to all your needs
                 </p>
                <div class="icons">
                    <div class="row">
                        <i class="fas fa-mail-bulk"></i>
                        <div class="info">
                            <div class="head">Zip Code</div>
                            <div class="sub-title">21001</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="info">
                            <div class="head">Address</div>
                            <div class="sub-title"> Pamplemousses Mauritius</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <div class="head">Email</div>
                            <div class="sub-title">mytravel@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">Contact Us</div>
                <form action="contactus.php" method="POST">
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" required name="name">
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" required name="eAddress">
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required name="subject">
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required name="message"></textarea>
                    </div>
                    <div class="button">
                        <button type="submit" name="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <?php

    if(isset($_GET['success'])){
        $mes=" Thank your for contacting us. We will reply to your message within 2 business days";
    echo '<div class="success">'.$mes. '</div>';
    }

    ?>
</section>




<!-- start of footer-->

<footer>
    <div class="container">
    
                                                            <div class="sec  aboutus">
                                                                <h2>About Us</h2>
                                                                <p>
                                                                    We designed this web application to provide travellers with live and relevant information.
                                                                    
                                                                </p>
                                                            
                                                        <ul class="sci">
                                                        
                                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                        
                                                        </ul>
                                                            
                                                        </div>
                                     <div class=" sec quickLinks">
                                    <h2> Quick Links </h2>
                                    <ul >
                                        <li><a href="#"> Privacy Policy</a></li>
                                        <li><a href="unitedkingdom.html"> United Kingdom</a></li>
                                        <li><a href="cameroon.html"> Cameroon</a></li>
                                        <li><a href="mauritius.html"> Mauritius</a></li>
                                        <li><a href="#"> Terms and Conditions</a></li>
                                    </ul>
                                </div>
    <div class="sec contacts">
                    <h2> Contact Info</h2> 
            <ul class="info">
    
                    <li>
                        <span><i class="fa fa-map-marker"></i></span>
                        <span> Beau Plan<br>
                            Pamplemousses<br> Mauritius</span>
                    </li>
                    <li>
                        <span> <i class="fa fa-phone"></i></span>
                        <p><a href="tel:1234567"> 12345654</a></p>
                    </li>
                    <li>
                        <span> <i class="fa fa-phone"></i></span>
                        <p><a href="tel:1234567"> 16907565</a></p>
                        
                    </li>
                    <li>
                            <span> <i class="fa fa-envelope"></i></span>
                            <p><a href="mailto:mytravel@gmail.com">mytravel@gmail.com</a></p>
                        </li>
             </ul>
    
    </div>
    <!-- start of sec aboutus-->
    </div>
    
</footer>
    <!-- end of footer-->
    <div class="copyrightText">
    
        <p>Copyright @2021 MyTravel Inc. All rights reserved</p>
    </div>

    <!-- add jquery before script file because script file makes use of jquery-->
<script src="javascript/jquery-3.6.0.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"  crossorigin="anonymous"></script>
<!-- adding script file here aids usability of site-->
<script src="javascript/d3.min.js"></script>



<script src="javascript/common.js"></script>
<script>
    // typing text animation script
var typed = new Typed(".typing", {
    strings: ["Mauritius", "Cameroon", "United Kingdom"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
}); 

var typed = new Typed(".typing-2", {
    strings: ["Scala Developer", "Java Developer", "DSC Co-Lead", "Kotlin Develoer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

</script>

</body>
</html>