import readerly from "../images/Readerly.png"
import danger from "../images/dangerzones3.png"
import Header from "../components/Header"

const Main = props =>{
    return(
        <div>
            <Header></Header>
            <div className = "bubble-wrap">
                <div className = "bubble"></div>
            </div>
            
            <div className = "about">
                <h4>Summary</h4>
                <p>I am a full stack developer and former operational analyst with a passion for correcting inefficiencies within business systems. By applying a rational and detail-oriented focus to my work, I seek to understand how small changes can lead to massive improvements at every level.  Regardless of industry, I have applied this approach to improve productivity through automation in every step of my career. With the additional knowledge from a recent coding bootcamp, I have combined my passion for detail-oriented optimization with the technical skills of web development in pursuit of creating better business applications. </p>
            </div>
            {/* <div className = 'skills'>
                
            </div> */}
            <div className = 'projects d-flex'>
                <div className = 'projectBox m-2'>
                    <h4><a href = 'http://52.14.198.71/'>Readerly</a></h4>
                    <img src = {readerly} alt = "Readerly" className = 'proj-img'></img>
                    <p>Readerly is a Python-based application inspired by a love of reading and sites such as GoodReads. Developed by a team of three, users can save their favorite books and share them with fellow book-lovers.  With the embedded book viewer from Google Books, users can even preview their favorite books.</p>
                    <h6 className = 'tech text-left'>Tech Used:</h6>
                    <ul className = 'tech text-left'>
                        <li><span className = 'font-weight-bold'>Backend:</span> Python, Django</li>
                        <li><span className = 'font-weight-bold'>Frontend:</span> HTML, CSS, JavaScript, GoogleBooks API, SASS</li>
                        <li><span className = 'font-weight-bold'>Database:</span> SQL</li>
                    </ul>
                    <a href = 'http://www.github.com/jrait/readerly2'>View code on GitHub</a>
                </div>
                <div className = 'projectBox m-2'>
                    <h4>DangerZones</h4>
                    <img src = {danger} alt = "DangerZones" className = 'proj-img'></img>
                    <p>DangerZones is a JavaScript-focused application inspired by my interest in data and specifically how population density influences the current spread of the SARS-CoV-2 virus.  The application provides detailed information for each county, headlined by a risk factor based on the current active cases in a particular region as well as its population density.</p>
                    <h6 className = 'tech text-left'>Tech Used:</h6>
                    <ul className = 'tech text-left'>
                        <li><span className = 'font-weight-bold'>Backend:</span> Express, Node, Mongoose</li>
                        <li><span className = 'font-weight-bold'>Frontend:</span> React </li>
                        <li><span className = 'font-weight-bold'>Database:</span> MongoDB</li>
                    </ul>
                    <a href = 'http://www.github.com/jrait/danger-zones'>View code on Github</a>
                </div>
            </div>
            <div className = 'contact'>
                <h4>Contact Me: </h4>
                <address>
                <ul className = 'contactInfo d-flex justify-content-center'>
                    <li>Phone: (330) 461-4898</li>
                    <li>|</li>
                    <li>Email: <a href = "mailto:joshraitano@gmail.com">joshraitano@gmail.com</a></li>
                    <li>|</li>
                    <li><a href = 'https:\\www.linkedin.com/in/joshua-raitano/'>LinkedIn</a></li>
                    <li>|</li>
                    <li><a href = 'https:\\www.github.com/jrait'>Github</a> </li>
                </ul>
                </address>

            </div>
        </div>
    )
}
export default Main