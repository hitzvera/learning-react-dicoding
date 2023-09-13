/* eslint-disable react/prop-types */
import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChange(name) {
    this.setState({ name });
  }
  onUsernameChange(username) {
    this.setState({ username });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={(e) => this.onNameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.usernmae}
          onChange={(e) => this.onUsernameChange(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
