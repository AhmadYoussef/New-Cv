import React from 'react';
import './AlertMessage.scss';

class alertMessage extends React.Component {
    state={
        showClass : ""
    }
    componentDidMount(){
        this.timerHandle = setTimeout(()=> this.setState({showClass: "show"}),3000);
    }
    componentWillUnmount(){
        if(this.timerHandle){
        clearTimeout(this.timerHandle);
        this.timerHandle = 0;
    } 
    }
    render(){
        let animateLoader ="checker animate error";
        if(this.props.sent){
            animateLoader = "checker animate success"
        }
        return(
            <div className="alertMessage">
                <div className="alert">
                    <div className="headLoader">
                        <button onClick={this.props.click}>X</button>
                    </div>
                    <div className="loadingContainer">
                        <div className={animateLoader}></div>
                        <p className={this.state.showClass}>{this.props.message}</p>
                    </div>
                    <button className="close" onClick={this.props.click}>Close</button>
                </div>
                <div className="blackGround" onClick={this.props.click} />
            </div>
        );
    }
}
export default alertMessage;