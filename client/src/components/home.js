import { React } from "react";
import "./styles/home.css"

const Home = ({color})=>{

    return(
        <div class="home_container">
            <h1 >{color}</h1>
        </div>
    )
}
export default Home;