import { React } from "react";
import Home  from "./home.js";
import Contact from "./contact-page"
import "./styles/container.css"

const PageContainer = ()=>{
    return(
        <div class="main_container">
            <Home color="red"></Home>
            <Contact></Contact>
            <Home color="blue"></Home>
        </div>
    )
}

export default PageContainer;