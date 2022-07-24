import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class MoreWorkanim2 extends Component {

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
    <ScrollView data-layer="bfdff87d-2f30-4ce6-966b-629e2411408f" style={styles.moreWorkanim2}>
        <Text data-layer="849c002d-7774-41bf-a479-ab4bdafa08f3" style={styles.moreWorkanim2_moreWork}>more work</Text>
        <Svg data-layer="860fce80-0714-4ab6-be89-5e5ee3f36569" style={styles.moreWorkanim2_ellipse3} preserveAspectRatio="none" viewBox="-0.75 -0.75 8.5 8.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 3.5 0 C 5.432996273040771 0 7 1.567003607749939 7 3.5 C 7 5.432996273040771 5.432996273040771 7 3.5 7 C 1.567003607749939 7 0 5.432996273040771 0 3.5 C 0 1.567003607749939 1.567003607749939 0 3.5 0 Z"  /></Svg>
        <View data-layer="bc205f69-35be-4fe3-b34e-ef5ecd4cb9d4" style={styles.moreWorkanim2_group1}>
            <ReactImage data-layer="a638915c-712e-4a83-8924-ec4c9fd9a341" source={require('./assets/dsc0875.png')} style={styles.moreWorkanim2_group1_dsc0875} />
            <ReactImage data-layer="d7d38959-4301-48d6-b015-57c330e05217" source={require('./assets/dsc0940.png')} style={styles.moreWorkanim2_group1_dsc0940} />
            <ReactImage data-layer="41bc872c-9fd1-49eb-bd08-5cc8035e1c0e" source={require('./assets/dsc2064.png')} style={styles.moreWorkanim2_group1_dsc2064} />
            <ReactImage data-layer="465a7951-b2b2-4e43-8120-8e59d93ee9f5" source={require('./assets/dsc2024.png')} style={styles.moreWorkanim2_group1_dsc2024} />
            <ReactImage data-layer="554fa1ae-6026-4f85-9084-f6827776c50a" source={require('./assets/dsc1136.png')} style={styles.moreWorkanim2_group1_dsc1136} />
            <ReactImage data-layer="d4c9125a-3650-44ab-bafa-0db77d70dd02" source={require('./assets/dsc1296.png')} style={styles.moreWorkanim2_group1_dsc1296} />
            <ReactImage data-layer="3d28f0a0-763e-46c2-9230-5d5b092bd61e" source={require('./assets/dsc1331.png')} style={styles.moreWorkanim2_group1_dsc1331} />
            <ReactImage data-layer="72633b6d-27b3-474d-9e66-e99f62e5d5da" source={require('./assets/dsc2016.png')} style={styles.moreWorkanim2_group1_dsc2016} />
        </View>
    </ScrollView>
    );
  }
}

MoreWorkanim2.propTypes = {

}

MoreWorkanim2.defaultProps = {

}


const styles = StyleSheet.create({
  "moreWorkanim2": {
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
  "moreWorkanim2_moreWork": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
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
    "width": 175,
    "height": 37,
    "left": 613,
    "top": 381
  },
  "moreWorkanim2_ellipse3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 7,
    "height": 7,
    "left": 781,
    "top": 381
  },
  "moreWorkanim2_group1": {
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1029.5,
    "height": 3043,
    "left": 186,
    "top": 721
  },
  "moreWorkanim2_group1_dsc0875": {
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
    "width": 464,
    "height": 695,
    "left": 0,
    "top": 0
  },
  "moreWorkanim2_group1_dsc0940": {
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
    "width": 463.5,
    "height": 695,
    "left": 564,
    "top": 0
  },
  "moreWorkanim2_group1_dsc2064": {
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
    "width": 465,
    "height": 697,
    "left": 0,
    "top": 765
  },
  "moreWorkanim2_group1_dsc2024": {
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
    "width": 465.5,
    "height": 697,
    "left": 564,
    "top": 765
  },
  "moreWorkanim2_group1_dsc1136": {
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
    "width": 466,
    "height": 698.5,
    "left": 562,
    "top": 2299
  },
  "moreWorkanim2_group1_dsc1296": {
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
    "width": 465,
    "height": 696.5,
    "left": 0,
    "top": 1532
  },
  "moreWorkanim2_group1_dsc1331": {
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
    "width": 466,
    "height": 697,
    "left": 562,
    "top": 1532
  },
  "moreWorkanim2_group1_dsc2016": {
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
    "width": 465.5,
    "height": 744,
    "left": 0,
    "top": 2299
  }
});