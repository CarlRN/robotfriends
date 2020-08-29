import React from 'react';
import './App.css';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//import {robots} from './robots';

//redux implementation...
import { connect } from 'react-redux'; //instead using redux subscript, connect is an optimized way
import { setSearchField, requestRobots } from '../actions.js';

 //set the props that App will use that comes from the store(through the reducer). AS PROPS
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//set the action that will be dispatch for this component. AS PROPS
//obs.: dispatch comes from redux
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) //thunk middleware tricky here. It need a function return to do his work
  }
}

class App extends React.Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchFieldChange,robots, isPending} = this.props //this props are defined in mapStateToProps and mapDispatchToProps
    const robotsFiltered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    //implementation 1: original
   
      return isPending ? <h1 className='tc'>Loading...</h1> :   
       ( 
        <div className="tc">
          <h1 id='title' className='f1'>RoboFriends</h1>        
          <SearchBox onSearchFieldChange={onSearchFieldChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={robotsFiltered} />
            </ErrorBoundry>
          </Scroll>
        </div>
      ); 
     

    //implementation 2: alternative...
  //  return this.getCardListView(robotsFiltered);

  }

  //example of how to use if condition 'inside JSX'
  getCardListView = (robotsFiltered) => {

    return (
      <div className="tc">
        <h1 id='title' className='f1'>RoboFriends</h1>        

        { /* IIFE  */ }  
        {(() => {
          if(this.props.isPending){
            return <h1>Loading...</h1>      
          }else{
            return (
              <div>
                <SearchBox onSearchFieldChange={this.props.onSearchFieldChange}/>
                <Scroll>
                  <ErrorBoundry>
                    <CardList robots={robotsFiltered} />
                  </ErrorBoundry>
                </Scroll>  
              </div>)          
          }
        })()}     
      </div> 
    )
  } 
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App); //obs.: connect is a high order function (a function that return another function)
                                                                  //connect tells to this component (App) to subscript to the redux store, specifically
                                                                  //in what states are interested in
