import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
// import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi, My Name Is Sameep Sharma</p>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
            <img
            src="https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png"
            alt="person_image"
            />
            </div>
        </div>
    )
};

export default Home;
