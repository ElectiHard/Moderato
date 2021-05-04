import React, { Component } from 'react';
import PropTypes from 'prop-types';

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


    test=(e)=>{
      let {LID} = this.state;
      this.setState({LID:LID+1})
      
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
      }
  
      return (
        <div
          className={className}
          onClick={onClick}
          id={id}
        >
          {label}
        </div>
      );
    }
  }
  
  export default Tab;