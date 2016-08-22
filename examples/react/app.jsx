var App = React.createClass({
  getInitialState: function() {
    return {
      prClockFormat: '24h',
      prRadioGroupSelected: 'Second',
      prDropdownValue: 'Second',
      prSliderValue: 10,
    };
  },

  componentDidMount: function() {
    this.refs['pr-radio-group']
      .addEventListener('selected-changed', function(event) {
        this.setState({ prRadioGroupSelected: event.detail });
      }.bind(this));

    this.refs['pr-slider']
      .addEventListener('value-changed', function(event) {
        this.setState({ prSliderValue: event.detail.value });
      }.bind(this));

    this.refs['pr-dropdown']
      .addEventListener('value-changed', function(event) {
        this.setState({ prDropdownValue: event.detail.value });
      }.bind(this));
  },

  clockClickHandler: function() {
    this.setState({ prClockFormat: this.state.prClockFormat === '24h' ? '12h' : '24h' });
  },

  render: function() {
    return (
      <div>
        <h1>Polymer in React</h1>
        <pr-clock format={this.state.prClockFormat} onClick={this.clockClickHandler}>Click to change format:</pr-clock>

        <pr-slider value={this.state.prSliderValue} ref="pr-slider"></pr-slider>
        Slider value: {this.state.prSliderValue}

        <br />

        <pr-dropdown label="Some items:" ref="pr-dropdown" value={this.state['prDropdownValue']}>
          { [ 'First', 'Second', 'Third' ].map(function(i) {
            return <pr-dropdown-row value={i} key={i}>{i} Row</pr-dropdown-row>
          }) }
        </pr-dropdown>

        <br />

        <pr-radio-group selected={this.state.prRadioGroupSelected} ref="pr-radio-group">
          { [ 'First', 'Second', 'Third' ].map(function(i) {
            return <pr-radio value={i} key={i}>{i}</pr-radio>
          }) }
        </pr-radio-group>

        <br />

        Selected: {this.state.prRadioGroupSelected}
      </div>
    );
  }
});

