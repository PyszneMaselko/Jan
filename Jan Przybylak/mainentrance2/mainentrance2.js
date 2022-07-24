import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Mainentrance2 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="e7b3c29d-81a3-449e-836c-347d6b7b80d0" style={styles.mainentrance2}>
        <Text data-layer="a95b8d62-ec99-4ba2-b5bb-c5ef704683df" style={styles.mainentrance2_janPrzybylak33f00a32}>JAN PRZYBYLAK</Text>
        <ReactImage data-layer="03594270-175e-4b82-b864-a3e9ffebed41" source={require('./assets/dsc7733.png')} style={styles.mainentrance2_dsc7733} />
        <ReactImage data-layer="af61cf15-dd71-4d3e-bb62-3e3bd476e0e6" source={require('./assets/dsc7789.png')} style={styles.mainentrance2_dsc7789} />
        <ReactImage data-layer="74abbd2a-9c78-4c4f-990d-76a9c365d749" source={require('./assets/collage1.png')} style={styles.mainentrance2_collage1} />
        <Text data-layer="ad6e43ee-c593-4ec7-a58f-d2322d4f2e12" style={styles.mainentrance2_janPrzybylak}>JAN PRZYBYLAK</Text>
    </ScrollView>
    );
  }
}

Mainentrance2.propTypes = {

}

Mainentrance2.defaultProps = {

}


const styles = StyleSheet.create({
  "mainentrance2": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": -400,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": -700,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1400,
    "height": 800,
    "left": "50%",
    "top": "50%"
  },
  "mainentrance2_janPrzybylak33f00a32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 115,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Geometria",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1072,
    "height": 145,
    "left": 164.5,
    "top": 334.5
  },
  "mainentrance2_dsc7733": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 244,
    "height": 305,
    "left": 966,
    "top": 400
  },
  "mainentrance2_dsc7789": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 244,
    "height": 304.5,
    "left": 190,
    "top": 96
  },
  "mainentrance2_collage1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 318,
    "height": 397,
    "left": 541,
    "top": 202
  },
  "mainentrance2_janPrzybylak": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "transparent",
    "fontSize": 115,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Geometria",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1072,
    "height": 145,
    "left": 164.5,
    "top": 334.5
  }
});