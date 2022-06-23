import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import data from '../../HaidressersArray';
import colors from '../../theme/colors';
import HairdressrsCard from '../components/HairdressrsCard';
import Header from '../components/Header';
import LinkTwo from '../components/LinkTwo';
import Title from '../components/Title';

export default function Dashboard() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
      }}>
      <Header avatar="https://i.pravatar.cc/400?img=13" message="Be welcome" name="Eric Rapolla" />

      <FlatList
        ListHeaderComponent={
          <Title
            color={colors.orangeFont}
            size={24}
            fontFamily="RobotoSlab_500Medium"
            mt={32}
            mb={24}>
            Hairdressers
          </Title>
        }
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={false}
        renderItem={({ item }) => {
          const { avatar, days, name, hours } = item;
          return <HairdressrsCard avatar={avatar} name={name} hours={hours} days={days} mb={12} />;
        }}
        style={{
          width: '100%',
          paddingHorizontal: 12,
        }}
        ListFooterComponent={<LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />}
      />
    </SafeAreaView>
  );
}
