import { Component } from 'react';
export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.pereventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Enter your request');
      return;
    }
    this.props.onSubmit(this.state.inputValue.trim());
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              onChange={this.handleInputChange}
              value={this.state.inputValue}
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
