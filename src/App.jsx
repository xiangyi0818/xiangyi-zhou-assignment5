import React from 'react';
import Square from './Square'
import './App.css';

export default class App extends React.Component {
     constructor(props){
         super(props);
         this.state={
             counter:0     
         }
     }
    changeCounter  =(backgroundColor)=>{
        if(backgroundColor === "black"){
            this.setState({counter: this.state.counter-1});     
        }
        else if (backgroundColor === "white"){
            this.setState({counter: this.state.counter+1});     
        }
}
    render(){
        return (
            <div>
                Counter:{this.state.counter}
                <div class="container">
                <Square changeCounterFunc={this.changeCounter}/>
                <Square changeCounterFunc={this.changeCounter}/>
                <Square changeCounterFunc={this.changeCounter}/>
                <Square changeCounterFunc={this.changeCounter}/>
                </div>
            </div>
        )
    }   
    }
    

