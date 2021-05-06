import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from 'react-ripples'

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
    
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }

    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
          id,
        },
      } = this;
  
      let className = 'tab-list-item';
      if (activeTab === label) {
        className += ' tab-list-active';
      }else {className+= ' tab-list-inactive'}
  
      return (
        <Ripple during={1300} color={'rgba(200,200,200,0.1)'}
        className={className}
        onClick={onClick}
        id={id}>
          {label}
        </Ripple>
      );
    }
  }
  
  export default Tab;