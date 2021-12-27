import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;

export const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-top: 28px;
  margin-bottom: 28px;
  color: #f5f5f5;
`;

export const MaintoAction = styled.View`
  flex: 1;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 100%;
`;

export const NewLink = styled(LinearGradient).attrs({
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

export const NewLinkButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
`;

export const NewText = styled.Text`
  font-size: 16px;
  color: #f5f5f5;
  font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #2a2a2a; */
  border: 2px solid rgba(198, 44, 54, 0.7);
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  color: #c62c36;
  font-weight: bold;
  margin-right: 10px;
`;
