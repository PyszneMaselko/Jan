import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class MoreWork extends Component {

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
    <ScrollView data-layer="dd2fb7f2-275c-400a-9c48-763218efc040" style={styles.moreWork}>
        <Text data-layer="248078f4-9f6b-4af0-8c73-bb49637ea38d" style={styles.moreWork_moreWork9ba15cc0}>more work</Text>
        <Svg data-layer="5fd527a1-fc76-422e-9b73-23de4f87d15f" style={styles.moreWork_ellipse3} preserveAspectRatio="none" viewBox="-0.75 -0.75 8.5 8.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 3.5 0 C 5.432996273040771 0 7 1.567003607749939 7 3.5 C 7 5.432996273040771 5.432996273040771 7 3.5 7 C 1.567003607749939 7 0 5.432996273040771 0 3.5 C 0 1.567003607749939 1.567003607749939 0 3.5 0 Z"  /></Svg>
        <Text data-layer="3c6e53ac-62d7-45a8-b073-7d6905bf5115" style={styles.moreWork_janPrzybylak}>JAN PRZYBYLAK</Text>
        <Text data-layer="e8ab3fe6-17cb-46a8-b7f5-6279a6207c4c" style={styles.moreWork_goBack}>go back</Text>
        <View data-layer="00bf1acd-72c7-435a-8c2b-aeb966e17147" style={styles.moreWork_group1}>
            <ReactImage data-layer="2c4cba9c-6847-48fe-917e-27a2ac5a908b" source={require('./assets/dsc0875.png')} style={styles.moreWork_group1_dsc0875} />
            <ReactImage data-layer="9607fa51-2871-4750-b997-a18713ebe3ba" source={require('./assets/dsc0940.png')} style={styles.moreWork_group1_dsc0940} />
            <ReactImage data-layer="a19c5cf3-c44c-44d3-8c34-9d315be65bfd" source={require('./assets/dsc2064.png')} style={styles.moreWork_group1_dsc2064} />
            <ReactImage data-layer="c9f0d9d9-ef06-4d35-be86-feeee237e934" source={require('./assets/dsc2024.png')} style={styles.moreWork_group1_dsc2024} />
            <ReactImage data-layer="779badaa-0634-4e2d-b903-1e94ee9d5587" source={require('./assets/dsc1136.png')} style={styles.moreWork_group1_dsc1136} />
            <ReactImage data-layer="fca1ed38-0840-428d-8176-24be7a3535a6" source={require('./assets/dsc1296.png')} style={styles.moreWork_group1_dsc1296} />
            <ReactImage data-layer="dfd70936-b4ac-4bf2-a683-e3e0df927eea" source={require('./assets/dsc1331.png')} style={styles.moreWork_group1_dsc1331} />
            <ReactImage data-layer="199b4ff6-d519-4993-8268-e0a17234beca" source={require('./assets/dsc2016.png')} style={styles.moreWork_group1_dsc2016} />
        </View>
    </ScrollView>
    );
  }
}

MoreWork.propTypes = {

}

MoreWork.defaultProps = {

}


const styles = StyleSheet.create({
  "moreWork": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1400,
    "height": 3780,
    "left": 0,
    "top": 0
  },
  "moreWork_moreWork9ba15cc0": {
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
    "top": 90
  },
  "moreWork_ellipse3": {
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
    "left": 697,
    "top": 127
  },
  "moreWork_janPrzybylak": {
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
    "width": 280,
    "height": 37,
    "left": 560,
    "top": 134
  },
  "moreWork_goBack": {
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
    "width": 129,
    "height": 37,
    "left": 34,
    "top": 717
  },
  "moreWork_group1": {
    "opacity": 1,
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
    "top": 241
  },
  "moreWork_group1_dsc0875": {
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
  "moreWork_group1_dsc0940": {
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
  "moreWork_group1_dsc2064": {
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
  "moreWork_group1_dsc2024": {
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
  "moreWork_group1_dsc1136": {
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
  "moreWork_group1_dsc1296": {
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
  "moreWork_group1_dsc1331": {
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
  "moreWork_group1_dsc2016": {
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