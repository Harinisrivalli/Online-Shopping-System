import "../css/home.css";
import Happy from "../img/happy.png";
function Home(){
    return(
        <div id="home">
            <div id="part1">
                <p style={{padding:"10px"}}>Discover a smarter way to shop online! ShoppyGlobe brings the world’s best products to your fingertips — from fashion and electronics to home essentials and more. Enjoy a seamless shopping experience with easy navigation, secure payments, fast delivery, and unbeatable deals. Shop anytime, anywhere, and let ShoppyGlobe make your online shopping simple, safe, and satisfying! </p>
            </div>
            <div id="part2">
                <img src={Happy} height="300px" width="300px" alt="Happy Shopping faces"></img>
            </div>
        </div>
    )
}
export default Home;