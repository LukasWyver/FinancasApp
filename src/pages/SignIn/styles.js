import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled.View`
  flex: 1;
  background: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.20)',
})`
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  font-size: 17px;
  color: #f5f5f5;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const AreaButton = styled(LinearGradient).attrs({
  colors: ['#00b94a', '#13b900', '#00b9a7'],
  start: {x: 5, y: 2},
  end: {x: 0, y: 0},
})`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 9px;
`;

export const LinkText = styled.Text`
  color: #f5f5f5;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 88%;
  margin-bottom: 15px;
`;

export const BackText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f5f5f5;
  margin-left: 8px;
`;
