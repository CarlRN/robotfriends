import React, { Component } from 'react';
//import CounterButton from './CounterButton';

class Header extends Component{

    //react cicle hook
    shouldComponentUpdate(nextProps, nextState){
        return false; //to avoid unnecesary render...
    }


    render(){
        console.log('Header')
        return (
            <div>
                <h1 id='title' className='f1'>RoboFriends</h1>
            { /*   <CounterButton color = {'red'} /> */}
            </div>
        )
    }
}

export default Header;