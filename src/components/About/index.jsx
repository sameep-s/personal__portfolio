import "./style.css";

const About = () => {
    return (
        <div>
            <p>
                I am a Computer Science Engineering student from Jammu, India. Some of my interests include web apps development, Actions for Google Assistant, etc. I'm looking to improve my knowledge in these fields through personal projects, internships and workshops
            </p>
            
            <div className="projects">
                <h1>Projects</h1>
                <div className="contents">

                    <div className="temp">
                        <h3>Blabbering-Bananna</h3>                        
                        <a href="https://upbeat-kirch-98b91a.netlify.app/" type="Button" className="btn btn-primary">Demo</a>
                        <a href="https://github.com/sameep-s/PigBlabber" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>Todo App</h3>
                        <a href="https://gracious-davinci-b0091e.netlify.app/" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/TodoApp" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>Talk2Minions</h3>
                        <a href="https://cocky-booth-883706.netlify.app/" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/talkMinnions" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>Emoji</h3>
                        <a href="https://goofy-meninsky-69cd6b.netlify.app/" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/emojiSelector" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>HowMuchYouKnowMe</h3>
                        <a href="https://replit.com/@sameepsharma98/HowMuchYouKnowME" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/HowMuchyouKnowME" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>HowMuchYouKnowIndia</h3>
                        <a href="https://replit.com/@sameepsharma98/howWellYouKnowCricket#index.js" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/HowMuchYouKnowIndia" type="Button">Code</a>
                    </div>

                    <div className="temp">
                        <h3>ExerciseRecommender</h3>
                        <a href="https://youthful-pasteur-dfa2fb.netlify.app/" type="Button">Demo</a>
                        <a href="https://github.com/sameep-s/exerciseRecommender" type="Button">Code</a>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default About;
