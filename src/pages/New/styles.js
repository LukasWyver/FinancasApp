import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.20)',
})`
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  height: 50px;
  font-size: 17px;
  color: #f5f5f5;
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const Title = styled.Text`
  text-align: left;
  margin-left: 6px;
  margin-bottom: 2px;
  color: 'rgba(255,255,255,0.25)';
`;

export const ButtonArea = styled(LinearGradient).attrs({
  colors: ['#00b94a', '#13b900', '#00b9a7'],
  start: {x: 5, y: 2},
  end: {x: 0, y: 0},
})`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
``;

export const ButtonTouch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #f5f5f5;
  font-weight: bold;
`;
