import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            count : 1,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1,
            }
        })
    }
    
    render() {
        const styles = {
            marginLeft: 40,
            fontSize: 40,
        }
        const buttons = {
            backgroundColor: "#FFFFFF",
            border: "solid",
            borderColor: "#A9A9A9",
            color: "black",
            padding: "15px 32px",
            margin: "auto",
            display: "block",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: 16,
        }
        return (
            <div>
                <h3 style={styles}>{this.state.count}</h3>
                <button style={buttons} onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}

export default App