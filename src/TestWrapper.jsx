import { Component, createElement } from "react";
import { View } from "react-native";

export const TestWrapper = ({content, testId}) => {
    return (
        <View testID={testId} accessible={true} accessibilityLabel={testId}> 
            {content}
        </View>
    )
}

// export class TestWrapper extends Component {
//     render() {
//         return <HelloWorld name={this.props.yourName} style={this.props.style} />;
//     }
// }
