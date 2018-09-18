import React, { Component } from 'react'

import './App.css'
import New_component1 from './New_component1.js'
export default class CreateGame extends Component {

  constructor (props) {
  		super(props);
      this.state={ball:0};
      this.state = {value:10};
      this.increment=this.increment.bind(this)

  	}

    increment(sum) {
	     this.setState({ball:sum});
    }

     decrement() {
       this.setState({value: this.state.value - 1});
       if(this.state.value <= 0) {
         alert("start again !!! ");
    	   window.location.reload();
       }
     }

     componentDidMount() {
       setInterval(() => this.decrement(), 1000);
     }

     display() {
         let carent = <h1 className="name1"> Набери 7 кликов , Осталось: {this.state.value} секунд </h1>
         return carent;
     }

     winner() {
       let win;
       if(this.state.ball >= 7) {
         win = <h1 className="name2"> Ez win !!! </h1>
         return win;
       }
     }

     number_of_points() {
       let newPoint = <h1 className="name3"> Click : {this.state.ball}</h1>
       return newPoint;
     }

     render() {
       return(
		     <div>
			      {this.display()}
			      <New_component1 onClick={this.increment} />
            {this.number_of_points()}
            {this.winner()}
		    </div>
          );
    }
}
