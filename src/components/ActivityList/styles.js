import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px 30px;
`;

export const ListContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export const TextNoContent = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0, paddingBottom: 20},
})``;
