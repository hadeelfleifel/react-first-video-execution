import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0,
        // imageUrl:"https://www.cyberport.hk/files/imagecache/483x362_4f4f30bfe4de6739197206_14_%E5%A4%A2%EF%BC%8E%E9%A4%90.jpg"
    tags:['tag1','tag2','tag3']
    }
    // constructor(){
    //     super();
    //    this.handleClick=this.handleClick.bind(this);

    // }
    // styles={
    //     fontSize:25,
    //     fontWight:'bold',
    //     color:'red'
    // }

    handleClick=(producte)=>{
   console.log(producte)
   this.setState({count :this.state.count+1})
 }
 dohandleClick=()=>{
    this.handleClick({id:1})
 }
    renderTags(){
        if (this.state.tags.length == 0) return <p>there is no tag</p>;
       return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() { 
        let classes = this.newMethod();
        return(
        <React.Fragment>
            {/* <img src={this.state.imageUrl} alt=''></img> */}
            <span className={this.newMethod()}>{this.state.count}</span>
            <button onClick={this.dohandleClick} style={{fontSize:50}} className='btn btn-outline-secondary btn-sm'>hellloooooo</button>
            {/* <div>{this.renderTags()}</div> */}
    <br></br>
        </React.Fragment>) 

    }

    newMethod() {
        let classes = 'badge m-c badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;