import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "./components/image";
import logo from "./img/logo.png"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            helpText : "Help text!",
            userData : ""
        }

        this.inputClick = this.inputClick.bind(this)
    }
    
    inputClick(){
        this.setState({helpText : "Changed"})
        console.log("Clicked")
    }
    mouseOver(){console.log("Mouse Over")}

    render() { 
        return(
            <div className="name">
                <Header title="This is header title"/>
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input 
                    placeholder={this.state.helpText}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}
                    onChange = {event => this.setState({userData : event.target.value})}
                />
                
                <p>{this.helpText == "Help text!" ? "Yes" : "No"}</p>
                <Image image={logo}/>
                <Footer />
            </div>
        )   
    }   
}

export default App;