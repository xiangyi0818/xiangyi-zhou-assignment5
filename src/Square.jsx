import React from 'react';
export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            backgroundColor:"white"
            
        }
    }

        changeColor =()=>{
            if(this.state.backgroundColor === "white"){
                this.setState({
                    backgroundColor:"black" 
                })
            }
            else if (this.state.backgroundColor === "black"){
            this.setState({
                backgroundColor:"white" 
            })
        }
        }
        render(){
            return (
                <div class="box" style={{width:"100px", height:"100px",
                backgroundColor:this.state.backgroundColor,border:"1px solid grey"}} 
                onClick={()=>{this.changeColor(); this.props['changeCounterFunc'](this.state.backgroundColor);}}>
                </div>
            )
            }
    }