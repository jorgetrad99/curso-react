import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList.jsx';

import api from '../api';

class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    console.log(`3. componentDidMount()`);
    this.fetchData();
  }

  fetchData = async () => {
    console.log(`fetchData();`);
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch(error) {
      this.setState({ loading: false, error: error });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`5. componentDidUpdate()`);
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state
    })
  }

  componentWillUnmount() {
    console.log(`6. componentWillUnMount()`);
    clearTimeout(this.timeOutId);   //Liberamos memoria al cerrar la función acincrona cuando el componente sale de escena
  }

  render() {
    console.log(`2 / 4. Render`);
    if(this.state.loading === true){
      return 'Loading...'
    }
    if(this.state.error){
      return `Error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;