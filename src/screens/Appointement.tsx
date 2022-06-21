import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import AppointmentTimeArray from '../../AppointmentTimeArray';
import data from '../../HaidressersArray';
import { colors } from '../../theme';
import AppointmentTime from '../components/AppointmentTime';
import Calendar from '../components/Calendar';
import Title from '../components/Fonts/Title';
import HairdressersSmallCard from '../components/HairdressersSmallCard';
import HeadetTwo from '../components/HeaderTwo';

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

      <View
        style={{
          width: '100%',
          paddingHorizontal: 12,
        }}>
        <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={22} mb={16}>
          Make your appointment
        </Title>
        <Calendar />
      </View>
      <AppointmentTime times={AppointmentTimeArray} mt={24} nightService />
    </SafeAreaView>
  );
}
