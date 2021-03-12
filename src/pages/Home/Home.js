import BackImg from '../../assets/images/back.jpg'


import './main.scss'
const Home = ()=>{
    return(
        <div className="salo">

        <div className="text">
            
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Coming Soon!</h2>
        </div>
            <div className="video">
                <img src={BackImg} alt=""/>
            </div>
        </div>
    )

}

export default Home;