import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "./components/image";
import logo from "./img/logo.png"

class App extends React.Component {
    helpText = "Help text!"
    inputClick(){console.log("Clicked")}
    mouseOver(){console.log("Mouse Over")}

    render() { 
        return(
            <div className="name">
                <Header title="This is header title"/>
                <h1>{this.helpText}</h1>
                <input 
                    placeholder={this.helpText}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}
                />
                <p>{this.helpText == "Help text!" ? "Yes" : "No"}</p>
                <Image image={logo}/>
                <Footer />
            </div>
        )   
    }   
}

export default App;