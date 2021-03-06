import { ReactDOM } from 'react-dom';
import React, { Component, PropTypes } from 'react';

//import { filterList } from '../actions/listActionCreator';
//import { filterArray as filter } from '../utils/filters';

export default class SearchBar extends React.Component {

  static get defaultProps () {
    return {
      placeholder: '搜索课程名称...',
      autoFocus: false
    };
  }

  static get propTypes () {
    return {
      inputName: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      autoFocus: React.PropTypes.bool,
      onKeyChange: React.PropTypes.func,
      onSearchClick: React.PropTypes.func,
      onClearClick: React.PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      focused: true,
      //show: flase,
      //items: []
    };
  }

  /*componentWillReceiveProps(nextProps){
    if(this.props.items != nextProps.items){
      this.setStaet({ items: nextProps.items });
    }
  }*/
  componentDidMount() {
    if(this.props.autoFocus) { this.focusInput(); }
  }


  /*focusInput() {
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = ' ';
    ReactDOM.findDOMNode(this.refs.searchInput).value = ' ';
    setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).focus();
    }, 100);
  }

  handleInputBlur (e) {
    const { placeholder } = this.props;
    //ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = placeholder;
    this.setState({ focused: false  });
  }

  handleInputFocus (e) {
    this.focusInput();
    this.setState({ focused: false  });
  }

  handleInputClick (e) {
    this.focusInput();
    this.setState({ focused: false  });
  }

  handleKeyChange (e) {
    const { searchValue } = this.state;
    this.setState({ searchValue: this.refs.searchInput.value }, () => {
      if (this.props.onKeyChange !== undefined) {
        this.props.onKeyChange(searchValue);
      }
    });
  }

  filterList(e){
    let filteredList = this.props.offers.list;
    filteredList = filter(filteredList,e.target.value);
    this.props.dispatch(filterList(filteredList));
  }
*/


  handleSearchClick() {
    const { searchValue } = this.state;
    if (this.props.onSearchClick !== undefined) {
      this.props.onSearchClick(searchValue);
    }
    /*if(this.keyCode == '13'){
      const params = {
        q: this.state.searchValue
      };
      searchValue && searchValue(params);
    }*/
  }

  handleClearClick() {
    const { searchValue } = this.state;
    this.refs.searchInput.value = '';
    this.setState({ searchValue: '' }, () => {
      if (this.props.onClearClick !== undefined) {
        this.props.onClearClick(searchValue);
      }
    });
  }

  /*renderSearchInput(){
    const { inputName, placeholder } = this.props;
    const { focused } = this.state;

    let wrapperClass = focused ? 'search__wrapper search__focus' : 'search__wrapper';
    let submitClass = focused ? 'search__submit search__focus' : 'search__submit';
    let clearClass = focused ? 'search__clear search__focus' : 'search__clear';*/
    render(){
      const { inputName, placeholder } = this.props;
      const { focused } = this.state;

      let wrapperClass = focused ? 'search__wrapper search__focus' : 'search__wrapper';
      let submitClass = focused ? 'search__submit search__focus' : 'search__submit';
      let clearClass = focused ? 'search__clear search__focus' : 'search__clear';
      return(
        <div className={wrapperClass}>
          <input className="search__input"
                 name={inputName}
                 type="text"
                 maxLength="100"
                 ref='searchInput'
                 //onChange={this.handleInput}
                 placeholder={placeholder}
                 onKeyUp={()=>this.handleSearchClick()}
                 value={this.state.searchValue}
                  />
          <span className={clearClass}
                onClick={() => this.handleClearClick()} />
          <span className={submitClass}
                onClick={() => this.handleSearchClick()} >
            <svg viewBox='0 0 24 24' height='100%' width='100%' preserveAspectRatio='xMidYMid meet'><g><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path></g></svg>
          </span>
        </div>
      );
    }
  }
  /*render(){
    const { items } = this.state;
    return(
      <div>
          { this.renderSearchInput() }
          { items.length > 0 && <ListItem items={items} />}
      </div>
    );*/
