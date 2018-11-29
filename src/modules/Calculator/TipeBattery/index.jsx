import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
  Col,
  Row,
} from 'reactstrap';

const getSuggestions = (value, batteryType) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : [...batteryType].filter(([key, value]) => key.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion['0'];

// Use your imagination to render suggestions.
const renderSuggestion = suggestions => (
  <div>
    {suggestions['0']}
  </div>
);

class Component extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    // eslint-disable-next-line
    const { stores: { calculator: { handleBatteryTypeChange, handleBatteryCdc } } } = this.props;
    this.setState({
      value: newValue,
    });
    handleBatteryTypeChange(newValue);
    handleBatteryCdc(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    // eslint-disable-next-line
    const { stores: { calculator: { calculatorState: { batteryType } } } } = this.props;
    this.setState({
      suggestions: getSuggestions(value, batteryType),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Tipe battery kamu ?',
      value,
      onChange: this.onChange,
    };

    return (
      <Row className="calcRow">
        <Col xs="12" md="12" lg="12">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </Col>
      </Row>
    );
  }
}


export default Component;
