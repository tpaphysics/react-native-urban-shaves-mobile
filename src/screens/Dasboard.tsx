import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import data from '../../HaidressersList';
import colors from '../../theme/colors';
import Title from '../components/Fonts/Title';
import HairdressrsCard from '../components/HairdressrsCard';
import Header from '../components/Header';
import LinkTwo from '../components/LinkTwo';

export default function Dashboard() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
      }}>
      <Header avatar="https://i.pravatar.cc/400?img=13" message="Be welcome" name="Eric Copolla" />
      <ScrollView
        style={{
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Title
          color={colors.orangeFont}
          size={24}
          fontFamily="RobotoSlab_500Medium"
          mt={32}
          mb={24}>
          Hairdressers
        </Title>
        <FlatList
          data={data}
          disableVirtualization
          keyExtractor={(item) => item.name}
          horizontal={false}
          renderItem={({ item }) => {
            const { avatar, days, name, hours } = item;
            return (
              <HairdressrsCard avatar={avatar} name={name} hours={hours} days={days} mb={12} />
            );
          }}
        />

        <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
      </ScrollView>
    </SafeAreaView>
  );
}
