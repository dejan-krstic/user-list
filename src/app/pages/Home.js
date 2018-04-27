import React, { Component } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import UsersList from '../users/UsersList';
import userService from '../../services/UserService';
import Search from '../partials/Search';
import LoadingAnimation from '../partials/LoadingAnimation';
import Message from '../partials/Message';
import calculateUpdateDuration from '../../shared/helperFunctions'
// import User from '../entities/User.js';    //recreating User objects after JSON.stringify/parse so they could have methods - abandoned solution


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userArr: [],
      userGrid: (localStorage.getItem('grid') === "true"),
      searchText: 'Search users here',
      loading: false,
      lastUpdateTime: Date.now(),
      updateDuration: 'Last update: just now',
      male: -1,
      female: -1
    }

    this.freshView = this.freshView.bind(this)
    this.changeView = this.changeView.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.componentMount = this.componentMount.bind(this)
    this.genderStats = this.genderStats.bind(this)
    this.changeState = this.changeState.bind(this)
    this.maleFemaleDiv = this.maleFemaleDiv.bind(this)
  }

  changeState(value) {
    console.log(value)
    this.setState({
      updateDuration: value
    })
    console.log(this.state.updateDuration);
  }

  freshView = () => {
    this.setState({ loading: true })
    userService.getData().then((res) => {
      this.setState((prevState, props) => {
        localStorage.setItem('userArr', JSON.stringify(res));
        let currentTime = Date.now();
        localStorage.setItem('lastUpdateTime', currentTime);
        return {
          userArr: res,
          users: res,
          loading: false,
          lastUpdateTime: currentTime,
          updateDuration: 'Last update: just now'
        }
      })
      })
      // .then(() =>{ this.genderStats()
      // console.log(this.state.maleFemale)})
}

  componentMount() {
    setInterval(() => { calculateUpdateDuration(this.state.lastUpdateTime, this.changeState) }, 60000);
    if (localStorage.getItem('userArr')) {
      const userTemp = JSON.parse(localStorage.getItem('userArr'))
      this.setState((prevState, props) => {
        return {
          userArr: userTemp,
          user: userTemp,
        }
      })
    } else {
      this.freshView()
    }
  }
  componentDidMount() {
    this.componentMount();
  }

  searchHandler(event) {
    const etv = event.target.value.toLowerCase();
    this.componentMount();
    if (event.target.value) {
      this.setState((prevState, props) => {
        return {
          userArr: prevState.userArr.filter(e => e.fullName.toLowerCase().includes(etv)),
        }
      })
    }
  }

  changeView() {
    localStorage.setItem('grid', !this.state.userGrid);
    this.setState((prevState, props) => {
      return {
        userGrid: !(prevState.userGrid),
      }
    })
  }


  noResults() {
    if (!this.state.userArr.length) {
      return <Message />
    }
  }
  
  genderStats(){
    const isFemale = (acc, user) => {
      (user.gender === "female") ?
        acc.female++ :
        acc.male++
    }
    const stats = this.state.userArr.reduce((a, e) => {
      isFemale(a, e);
      return a;
    },{female: 0, male: 0})
    // this.setState({female, male})
    return stats;
  }
  //  femaleMale = this.state.userArr.reduce(({}, e) => {

  maleFemaleDiv() {
    const mf = this.genderStats();
    return <p className="right">{`Male: ${mf.male} Female: ${mf.female}`}</p>
  }

  waitingToLoad() {
    if (this.state.loading) {
      return <LoadingAnimation />
    }
    return (
      <React.Fragment>
        <Search changeHandler={this.searchHandler} maleFemaleDiv = {this.maleFemaleDiv} />
        {this.noResults()}        
        <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header action={this.changeView} grid={this.state.userGrid} fresh={this.freshView} />
        {this.waitingToLoad()}
        <Footer updateDuration={this.state.updateDuration} />
      </React.Fragment>
    );
  }
}

export default Home;