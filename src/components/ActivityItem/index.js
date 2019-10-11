import React from 'react';

import {Container, Title, Description, Status, TextBold} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ActivityItem({data, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ActivityItemDetails', {
          activity_id: data.id,
        })
      }>
      <Container>
        <Title>
          <TextBold>Título</TextBold>: {data.title}
        </Title>
        <Description>
          <TextBold>Descrição</TextBold>: {data.description}
        </Description>
        <Status>
          <TextBold>Status</TextBold>: {data.status}
        </Status>
      </Container>
    </TouchableOpacity>
  );
}
