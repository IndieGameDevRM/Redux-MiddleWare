import React, { Component } from 'react'
import { View,
        StyleSheet,
        Text,
        TouchableOpacity
        } from 'react-native';
import { connect } from 'react-redux';
import {Increment,Decrement} from './action'
class CounterApp extends Component {
    
    render() {
        return (
            <View style = {styles.container}>
              <View style = {{flexDirection:'row',justifyContent:'center'}}>
                  <TouchableOpacity onPress = {()=>{this.props.increaseCounter()}} >
                      <Text>Increase</Text>
                  </TouchableOpacity>
                  <Text>{this.props.counter}</Text>
                  <TouchableOpacity onPress = {()=>{this.props.decreaseCounter()}}>
                      <Text>Decrease</Text>
                  </TouchableOpacity>
              </View>

            </View>
        )
    }   
}
function mapStateToProps(state) {
    return{
        counter:state.counter
    }
}

function mapDispatchToState(dispatch){
    return {
        increaseCounter : () => (Increment(dispatch)),
        decreaseCounter : () => (Decrement(dispatch)),
    }
}

export default connect(mapStateToProps,mapDispatchToState)(CounterApp)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  