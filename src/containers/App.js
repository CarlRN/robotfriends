import React from 'react';
import './App.css';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//import {robots} from './robots';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots:users}))
    .catch(err => console.log(err))
  }

  onSearchFieldChange = (event) => {
    this.setState( {searchField:event.target.value} );
  }


  render() {
    const {robots, searchField} = this.state;
    const robotsFiltered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    //implementation 1: original
   
   /*   return !robots.length ? <h1 className='tc'>Loading...</h1> :   
       ( 
        <div className="tc">
          <h1 id='title' className='f1'>RoboFriends</h1>        
          <SearchBox onSearchFieldChange={this.onSearchFieldChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={robotsFiltered} />
            </ErrorBoundry>
          </Scroll>
        </div>
      ); 
     */

    //implementation 2: alternative...
    return this.getCardListView(robotsFiltered);

  }

  //example of how to use if condition 'inside JSX'
  getCardListView = (robotsFiltered) => {

    return (
      <div className="tc">
        <h1 id='title' className='f1'>RoboFriends</h1>        

        { /* IIFE  */ }  
        {(() => {
          if(this.state.robots.length === 0){
            return <h1>Loading...</h1>      
          }else{
            return (
              <div>
                <SearchBox onSearchFieldChange={this.onSearchFieldChange}/>
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

export default App;
