import { createElement } from 'react';
import { View } from 'react-native';

const TestWrapper = ({
  content,
  testId
}) => {
  return createElement(View, {
    testID: testId,
    accessible: true,
    accessibilityLabel: testId
  }, content);
}; // export class TestWrapper extends Component {
//     render() {
//         return <HelloWorld name={this.props.yourName} style={this.props.style} />;
//     }
// }

export { TestWrapper };
