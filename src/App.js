import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  return (
    <><header>Dex Gabriel Jayona Portfolio</header>
      <body>
        <link rel='stylesheet' href="path/to/animate.css" />
          <div id='topbar'>
            <h1 id='topleft'>Dex Jayona</h1>
            <ul id='sections'>
                <li id='out'><a href='#about'>About</a></li>
                <li id='out'><a href='#skills'>Skills</a></li>
                <li id='out'><a href='#Projects'>Projects</a></li>
              
                <li><a href='#contacts'>Contacts</a></li>
            </ul>
          </div>
          <button id='scrollToTop' onClick={scrollToTop}>^</button>
        <section id='welcome'>
          <div id='welcoming' className='typewriter'>
            <p id='htmlpart'>&lt;html&gt;</p>
            <p id='divpart'>&lt;div&gt;</p>
            <p id='welcomepart'></p>
            <p id='divpart2'>&lt;/div&gt;</p>
            <p id='htmlpart2'>&lt;/html&gt;</p>
          </div>
          <div id='titles'>
            <h1 id='welcometitle'>Dex Jayona</h1>
            <h2 id='jobtitle'>Software Developer, Web Designer</h2>
          </div>
          <div id='welcomeImages'>
            <img id='welcomePic' src={require('./assets/images/Hack.jpg')} alt='home' />
           
          </div>
        </section>
        <section id='about'>
          <div id='abttext'>
            <h1>About</h1>
            <p id='descrip'>
            Results-driven professional with excellent soft skills: communication,
             teamwork, leadership, adaptability, emotional intelligence, customer service. 
             Experienced with various tools: Microsoft Office, Google Suite, 
             Adobe Creative Cloud, Salesforce, and project management software.
            </p>
            <p> </p>
          </div>
          <img id='dsicon' src={require('./assets/images/DataScienceIcon.png')} alt='Data Science'/>
        </section>
        <section id='skills'>
          <div id='skillCarousel'>
            <h1>Skills</h1>
            <Carousel responsive={responsive} infinite={true} swipeable={true} 
            containerClass='carouselcontainer' itemClass='carousel'>
              <div id='item'>
              <img id='itempic' src={require('./assets/images/JavaScriptIcon.png')} alt='JavaScript Icon' />
              <h2>JavaScript</h2>
              </div>
              <div id='item'>
                <img id='itempic' src={require('./assets/images/JavaIcon.png')} alt='Java Icon' />
                <h2>Java</h2>
              </div>
              <div id='item'>
                <img id='itempic' src={require('./assets/images/HTMLIcon.png')} alt='HTML Icon' />
                <h2>HTML</h2>
              </div>
              <div id='item'>
                <img id='itempic' src={require('./assets/images/ReactIcon.png')} alt='React Icon' />
                <h2>React</h2>
              </div>
              <div id='item'>      
                    
              </div>
              <div id='item'>
                <img id='itempic' src={require('./assets/images/NodeIcon.png')} alt='Node.js Icon' />
                <h2>Node.js</h2>
              </div>
              <div id='item'>
                
           
              </div>
              <div id='item'>
                
              </div>
            </Carousel>
          </div>
          <h1 id='develophead'>Developer Tools</h1>
          <div id='tools'>
            
            <div id='card'>
              <img src={require('./assets/images/VSCIcon.png')} alt='VSC'/>
              <h2>Visual Studio Code</h2>
            </div>
            <div id='card'>
              <img src={require('./assets/images/GitHubIcon.png')} alt='GH'/>
              <h2>GitHub</h2>
            </div>
            
          </div>
        </section>
        <section id="Projects">
  <h1>Projects</h1>
  <div class="Projects">
    <h2>React.js Portfolio</h2>
    <p>Developed a personal portfolio page using JavaScript, HTML, CSS, Node.js, and React. This project showcases my skills and work, providing a dynamic and responsive interface.</p>
  </div>

  <div class="Projects">
    <h2>Artificial Intelligence and Machine Learning Research</h2>
    <p>Currently exploring the field of AI through machine learning, using Python libraries such as Scikit-Learn, TensorFlow, and Keras. This project focuses on developing an AI-powered math tutoring application.</p>
  </div>

  <div class="Projects">
    <h2>Java Algorithm Programs</h2>
    <ul>
      <li><strong>Online Library Management System:</strong> Simulated library operations, including managing books, users, and borrowing/returning books, using various data structures such as LinkedLists, Stacks, and Queues.</li>
      <li><strong>To-Do List Application:</strong> Developed a task management app with features like task addition, updating, and file saving, applying OOP principles and ensuring data persistence between sessions.</li>
    </ul>
  </div>
</section>
        
        <section id='contacts'>
          <div id='contactcards'>
            <h1>Contact Me!</h1>
            <div id='card2'>  
              <img id='item2' src={require('./assets/images/MailIcon.png')} alt='email'/>
              <h2>Email: dexgabrielj@gmail.com</h2>
            </div>
            <div id='card2'>
              <img id='item2' src={require('./assets/images/CallIcon.png')} alt='call'/>
              <h2>Phone:(63) 9919660549 </h2>
            </div>
            
            <div id='card2'>
              <img id='item2' src={require('./assets/images/GitHubIcon.png')} alt='github'/>
              <h2><a href='https://github.com/DexLuz' target='_blank'>GitHub: dex</a></h2>
            </div>
          </div>
          <img id='programmer' src={require('./assets/images/Programmer2.jpg')} alt='programmer' />
        </section>
      </body>
    </>
  );
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: {max:4000, min:3000}, items: 5
  },
  desktop: {
    breakpoint: {max:3000, min:1024}, items: 3
  },
  tablet: {
    breakpoint: {max:1024, min:600}, items: 2
  },
  mobile: {
    breakpoint: {max:600, min: 0}, items: 1
  }
};


 export default App;