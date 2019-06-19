import React, { Component } from 'react';
import Price from './price';
import ItemDesc from './itemDesc';
import Wpin from './wPin';



const cardStyle = {
    width: '13%',
    height:'43vh',
    backgroundColor: 'white',
    position: 'relative',
    boxShadow: '5px 5px #888888',
    border: '1.5px solid black',
}

class Card extends Component {
    constructor(props){
        super(props);

        this.state = {hoverStyle:false};
        this.hovChange = this.hovChange.bind(this);
        // this.changeStyle = this.changeStyle.bind(this);
    };
    
    hovChange(){
        this.state.hoverStyle === true ? this.setState({
            hoverStyle: false
        }) : this.setState({
            hoverStyle: true
        });
    }
    
    // changeStyle(){
    //     this.state.hoverStyle === true  ? this.setState({hoverStyle: false})  : this.setState({hoverStyle: true});
    // }

    render(props){
        return (
            <div style={cardStyle} onMouseOver={this.hovChange} onMouseOut={this.hovChange}>
                {this.props.childen}
                <Price hoverStyle={this.state.hoverStyle}></Price>
                <ItemDesc hoverStyle={this.state.hoverStyle}></ItemDesc> 
                <Wpin hoverStyle={this.state.hoverStyle}></Wpin>       
            </div>
        );
    };   
};

export default Card;