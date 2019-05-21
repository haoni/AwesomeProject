import React , { useState, useEffect }from 'react';
import { Text } from 'react-native';

function Blink(props){

    const [blink, setBlink] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setBlink(!blink);
      }, 1000);
    }, [blink]);

    if(!blink) {
        return (<Text style={props.style}>Aqui vem o texto do blink!</Text>);
    }

    return ( null );
}

export default Blink;

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };

//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.value}</Text>
//     );
//   }
// }

// export default Blink;