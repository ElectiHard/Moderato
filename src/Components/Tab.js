import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
    constructor(props) {
      super(props);
      this.state={LID:1}
   }
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
        },
      } = this;
  
      let className = 'tab-list-item';
    
  
      if (activeTab === label) {
        className += ' tab-list-active';
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
          id={this.test(this.LID)}
        >
          {label}
        </li>
      );
    }
  }
  
  export default Tab;