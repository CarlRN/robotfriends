import React from 'react';

class CounterButton extends React.Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    //react life cycle hook, in this case used to avoid unnecesary render of the component
    shouldComponentUpdate(nextProps, nextState){

        //render only if state was changed...
        if(this.state.count !== nextState.count) 
            return true
        else
            return false    
    }

    updateCount = () => {

       // this.setState({count: this.state.count + 1})

       //this is a secure way to update a value from (or it's depend on) a state, due setState is async, so 
       //this way we can avoid unexpected results than could come from async actions...
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render(){
        console.log('CounterButton')
        return <button color = {this.props.color} onClick = {this.updateCount} >Count: {this.state.count} </button>
    }


}

export default CounterButton;