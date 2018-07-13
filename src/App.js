import React, { Component } from "react";
import classNames from "classnames";
import "metaui/dist/cocoa.css";
import "./App.css";
import {
  Card,
  Window
} from "./components/Layouts";
import {
  Button,
  Text,
  Radio,
  Checkbox,
  Slider
} from './components/Inputs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValues: {},
      radios: "two",
      checkbox1: false,
      checkbox2: true,
      checkbox3: false
    };
  }

  onCheckboxChange = event => {
    this.setState({ [event.target.value]: !this.state[event.target.value] });
  };

  onRadioChange = event => {
    this.setState({ radios: event.target.value });
  };

  onTextChange = (event, field) => {
    this.setState({ textValues: { [field]: event.target.value } });
  };

  isRadioSelected = val => {
    return this.state.radios === val;
  };

  render() {
    return (
      <div className="App">
        <Window
          className="metaui-container"
          title="MetaUI for React"
          onMinimize={() => { }}
          onMaximize={() => { }}
          onClose={() => { }}
        >
          <Card>
            <Slider />
            <Slider name="slider1" label="Slider 1" isVertical={true} />
          </Card>
          <Card>
            <Radio
              name="group1"
              label="One"
              value="one"
              checked={this.isRadioSelected("one")}
              onChange={this.onRadioChange}
              isInline={false}
            />
            <Radio
              name="group1"
              value="two"
              checked={this.isRadioSelected("two")}
              onChange={this.onRadioChange}
            >
              Two
            </Radio>
            <Radio
              name="group3"
              label="Three"
              value="three"
              checked={this.isRadioSelected("three")}
              onChange={this.onRadioChange}
              disabled={true}
            />
          </Card>
          <Card>
            <Checkbox
              name="check1"
              label="One"
              value="checkbox1"
              checked={this.state.checkbox1}
              isInline={false}
              onChange={this.onCheckboxChange}
            />
            <Checkbox
              name="check2"
              value="checkbox2"
              checked={this.state.checkbox2}
              onChange={this.onCheckboxChange}
            >
              Two
            </Checkbox>

            <Checkbox
              name="check3"
              label="Three"
              value="checkbox3"
              checked={this.state.checkbox3}
              isInline={false}
              onChange={this.onCheckboxChange}
            />
            <Checkbox
              name="check3"
              label="Three"
              value="checkbox3"
              checked={this.state.checkbox3}
              onChange={this.onCheckboxChange}
              disabled={true}
            />
          </Card>
          <Card>
            <Text />
            <Text
              id="textbox1"
              className="textbox"
              value={this.state.textValues["text1"]}
              onChange={e => this.onTextChange(e, "text1")}
            />
            <Text type="password" value="asdasdas" />
            <Text
              id="textbox2"
              className="textbox2"
              label="Username"
              value="testuser"
            />
            <Text
              id="textbox3"
              type="password"
              className="textbox3"
              value={this.state.textValues["text1"]}
              onChange={e => this.onTextChange(e, "text1")}
            >
              Password*
            </Text>
          </Card>
          <Card>
            <Button
              id="btn1"
              className="some other classnames"
              size="mini"
              variation="primary"
              onClick={() => {
                console.log("Hello");
              }}
            >
              Mini Primary
            </Button>
            <Button
              className={classNames("some", "class", "names")}
              size="small"
              variation="secondary"
            >
              Small Secondary
            </Button>
            <Button size="regular" variation="tertiary">
              Regular Tertiary
            </Button>
            <Button size="large" variation="quaternary">
              Large Quaternary
            </Button>
          </Card>
        </Window>
      </div>
    );
  }
}

export default App;
