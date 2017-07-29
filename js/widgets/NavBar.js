/**
 * Created by wangdi on 23/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Platform, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import theme from '../constants/theme';
import px2dp from '../helpers/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'

class NavBar extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        leftBtnIcon: PropTypes.string,
        leftBtnText: PropTypes.string,
        leftBtnPress: PropTypes.func,
        rightBtnIcon: PropTypes.string,
        rightBtnText: PropTypes.string,
        rightBtnPress: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render(){
        const {title, leftBtnIcon, leftBtnText, leftBtnPress, rightBtnIcon, rightBtnText, rightBtnPress} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={this.props.mainThemeColor} barStyle="dark-content" />
                <View style={[styles.toolbar, {backgroundColor: this.props.mainThemeColor}]}>
                    <View style={styles.fixedCell}>
                        {(leftBtnIcon || leftBtnText) ?
                            <Button icon={leftBtnIcon} text={leftBtnText} onPress={leftBtnPress} />
                            :
                            null
                        }
                    </View>
                    <View style={styles.centerCell}>
                        <Text style={styles.title} color={this.props.titleColor}>{title}</Text>
                    </View>
                    <View style={styles.fixedCell}>
                        {(rightBtnIcon || rightBtnText) ?
                            <Button icon={rightBtnIcon} text={rightBtnText} onPress={rightBtnPress} />
                            :
                            null
                        }
                    </View>
                </View>
            </View>
        );
    }
}

class Button extends Component{
    static propTypes = {
        icon: PropTypes.string,
        text: PropTypes.string,
        onPress: PropTypes.func
    };

    render(){
        var icon = null;
        if(this.props.icon) {
            if (Platform.OS === 'android') {
                icon = 'md-' + this.props.icon;
            } else if (Platform.OS === 'ios') {
                icon = 'ios-' + this.props.icon;
            }
        }
        return(
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={theme.touchableOpacityActiveOpacity}>
                <View style={styles.btn}>
                    {icon ?
                        <Icon name={icon} style={styles.btnIcon} size={px2dp(23)}/>
                        :
                        <Text style={styles.btnText}>{this.props.text}</Text>
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: { //in order to display the shadow on home tab
        height: theme.toolbar.height + px2dp(4),
        width: theme.screenWidth,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    toolbar: {
        height: theme.toolbar.height,
        //backgroundColor: theme.toolbar.barColor,
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 0 : px2dp(6),
        elevation: 3
    },
    fixedCell: {
        width: theme.toolbar.height,
        height: theme.toolbar.height,
        flexDirection:'row',
    },
    centerCell: {
        flex: 1,
        height: theme.toolbar.height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: theme.toolbar.titleSize,
        color:theme.toolbar.titleColor
    },
    btn: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        width: theme.toolbar.height,
        height: Platform.OS === 'android' ? theme.toolbar.height : theme.toolbar.height - px2dp(6),
    },
    btnText: {
        color: theme.toolbar.btnTextColor,
        fontSize: theme.toolbar.btnTextSize
    },
    btnIcon: {
        color: theme.toolbar.btnIconColor,
        fontSize: theme.toolbar.btnIconSize
    }
});

const mapStateToProps = (state) => {
    return {
        mainThemeColor: state.SettingReducer.colorScheme.mainThemeColor,
        titleColor: state.SettingReducer.colorScheme.titleColor,
    };
};

export default connect(mapStateToProps)(NavBar);