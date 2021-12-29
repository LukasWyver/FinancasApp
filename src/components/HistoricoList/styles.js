import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px rgba(250,250,250,.040)
  border-radius: 6px;
  
`;

export const Tipo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

// export const IconView = styled.View.attrs({
//   borderLeftWidth: 2,
// })`
//   flex-direction: row;
//   background-color: ;
//   padding-bottom: 3px;
//   padding-top: 3px;
//   padding-left: 8px;
//   padding-right: 8px;
//   border-color: ${props => (props.tipo === 'despesa' ? '#c62c36' : '#00b94a')};
// `;

export const TipoText = styled.Text`
  color: #f5f5f5;
  margin-left: 8px;
  font-size: 16px;
  font-style: italic;
`;

export const Date = styled.Text`
  color: rgba(250, 250, 250, 0.2);
  margin-right: 8px;
  font-size: 13px;
`;

export const ValorText = styled.Text`
  color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
`;

export const IconDelete = styled.TouchableOpacity``;
