import React from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';

import data from '../../HaidressersList';
import { colors } from '../../theme';
import Title from '../components/Fonts/Title';
import HairdressersSmallCard from '../components/HairdressersSmallCard';
import HeadetTwo from '../components/HeaderTwo';
import LinkTwo from '../components/LinkTwo';

export default function Appointement() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
      }}>
      <HeadetTwo avatar="https://i.pravatar.cc/400?img=13" title="Appointment" />
      <View style={{ height: 148, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          disableVirtualization
          style={{
            paddingVertical: 48,
          }}
          data={data}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const { avatar } = item;
            return (
              <HairdressersSmallCard
                avatar={avatar}
                name="Alex Mura.."
                mr={12}
                ml={index === 0 ? 12 : 0}
              />
            );
          }}
        />
      </View>

      <ScrollView
        style={{
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Title color={colors.orangeFont} size={24} fontFamily="RobotoSlab_500Medium">
          Appoitments
        </Title>

        <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
      </ScrollView>
    </SafeAreaView>
  );
}
