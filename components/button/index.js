import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class ButtonCustom extends Component {
    render() {
        const { label, action } = this.props;

        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={action}
            >
                <Text style={styles.btnTxt}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

ButtonCustom.defaultProps = {
    label: 'button',
    action: () => null,
};

ButtonCustom.propTypes = {
    label: PropTypes.string,//.isRequired
    action: PropTypes.func,
};

const styles = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
    },
    btnTxt: {
      fontSize: 25,
      color: '#7f8c8d',
      fontWeight: 'bold',
    },
});

export default ButtonCustom;