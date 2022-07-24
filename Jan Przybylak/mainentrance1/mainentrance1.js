import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Mainentrance1 extends Component {

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
    <ScrollView data-layer="e7d16925-bc4c-402d-8910-727ec87b6c10" style={styles.mainentrance1}>
        <Text data-layer="6225f8e3-b7ba-4628-8ed2-e0c63f3a2050" style={styles.mainentrance1_janPrzybylak394edf49}>JAN PRZYBYLAK</Text>
        <Text data-layer="d57bb5d1-a0d2-4e12-9482-55c8603e51eb" style={styles.mainentrance1_janPrzybylak}>JAN PRZYBYLAK</Text>
        <ReactImage data-layer="bf3e2ed6-a1f3-44f7-9b4b-c61db4d12faf" source={require('./assets/dsc7733.png')} style={styles.mainentrance1_dsc7733} />
        <ReactImage data-layer="7744c3b7-4051-4ffb-83b5-24e77f6b3852" source={require('./assets/collage1.png')} style={styles.mainentrance1_collage1} />
        <ReactImage data-layer="c22d46fa-566d-4a9e-a625-431d594dfd13" source={require('./assets/dsc7789.png')} style={styles.mainentrance1_dsc7789} />
    </ScrollView>
    );
  }
}

Mainentrance1.propTypes = {

}

Mainentrance1.defaultProps = {

}


const styles = StyleSheet.create({
  "mainentrance1": {
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
  "mainentrance1_janPrzybylak394edf49": {
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
    "top": 4.5
  },
  "mainentrance1_janPrzybylak": {
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
    "top": -115.5
  },
  "mainentrance1_dsc7733": {
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
    "top": 70
  },
  "mainentrance1_collage1": {
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
    "top": -128
  },
  "mainentrance1_dsc7789": {
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
    "top": -234
  }
});