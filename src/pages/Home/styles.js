import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.View`
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const Nome = styled.Text`
  font-size: 19px;
  color: #dcdcdc;
  font-style: italic;
`;

export const Saldo = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #f5f5f5;
  font-weight: bold;
`;
export const AreaDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  margin-bottom: 10px;
  color: #00b94a;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  padding-top: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;
