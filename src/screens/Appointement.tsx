import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';

import AppointmentTimeArray from '../../AppointmentTimeArray';
import data from '../../HaidressersArray';
import { colors } from '../../theme';
import AppointmentTime from '../components/AppointmentTime';
import Calendar from '../components/Calendar';
import HairdressersSmallCard from '../components/HairdressersSmallCard';
import HeadetTwo from '../components/HeaderTwo';
import Title from '../components/Title';

export default function Appointement() {
  const [selectBarber, setSelectBarber] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
      }}>
      <HeadetTwo avatar="https://i.pravatar.cc/400?img=13" title="Appointment" />
      <View
        style={{
          height: 148,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.black.shape,
        }}>
        <FlatList
          style={{ marginVertical: 12 }}
          data={data}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const { avatar, name } = item;
            return (
              <HairdressersSmallCard
                isSelected={selectBarber}
                avatar={avatar}
                name={name}
                mr={12}
                ml={index === 0 ? 12 : 0}
                onPress={() => setSelectBarber(name)}
              />
            );
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 12,
          marginTop: 12,
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
