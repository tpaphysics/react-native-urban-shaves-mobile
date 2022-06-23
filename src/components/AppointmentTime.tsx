import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';
import Button from './Button';
import Title from './Title';

interface Time {
  time: number;
  available: boolean;
}

interface AppointmentTimeProps {
  mb?: number;
  mt?: number;
  times: Time[];

  nightService?: boolean;
}

export default function AppointmentTime({
  times,
  mt,
  mb,
  nightService = false,
}: AppointmentTimeProps) {
  const [selectedHour, setSelectedHour] = useState(0);
  const navigator = useNavigation();
  return (
    <View style={{ width: '100%', paddingLeft: 12, marginTop: mt, marginBottom: mb }}>
      <Title color={colors.orangeFontHard} fontFamily="RobotoSlab_500Medium" size={18} mb={16}>
        Morning
      </Title>
      <ScrollView horizontal style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          {times.map(({ available, time }: Time, index: number) => {
            if (time < 12) {
              return (
                <TouchableOpacity
                  key={time}
                  disabled={!available}
                  onPress={() => setSelectedHour(time)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: selectedHour === time ? colors.orange : colors.black.shape,
                    width: 80,
                    height: 49.4,
                    borderRadius: 10,
                    padding: 8,
                    marginRight: 12,
                    opacity: available ? 1 : 0.3,
                  }}>
                  <Title
                    color={selectedHour === time ? colors.black.background : colors.orange}
                    fontFamily="RobotoSlab_500Medium"
                    size={14}>
                    {time < 10 ? `0${time}h:00` : `${time}h:00`}
                  </Title>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
      <Title
        color={colors.orangeFontHard}
        fontFamily="RobotoSlab_500Medium"
        size={18}
        mb={16}
        mt={16}>
        Afternoon
      </Title>
      <ScrollView horizontal style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          {times.map(({ available, time }: Time, index: number) => {
            if (time > 12 && time < 18) {
              return (
                <TouchableOpacity
                  key={time}
                  disabled={!available}
                  onPress={() => setSelectedHour(time)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: selectedHour === time ? colors.orange : colors.black.shape,
                    width: 80,
                    height: 49.4,
                    borderRadius: 10,
                    padding: 8,
                    marginRight: 12,
                    opacity: available ? 1 : 0.3,
                  }}>
                  <Title
                    color={selectedHour === time ? colors.black.background : colors.orange}
                    fontFamily="RobotoSlab_500Medium"
                    size={14}>
                    {time < 10 ? `0${time}h:00` : `${time}h:00`}
                  </Title>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
      {nightService && (
        <>
          <Title
            color={colors.orangeFontHard}
            fontFamily="RobotoSlab_500Medium"
            size={18}
            mb={16}
            mt={16}>
            Night
          </Title>
          <ScrollView horizontal style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', width: '100%', marginBottom: 24 }}>
              {times.map(({ available, time }: Time, index: number) => {
                if (time > 17) {
                  return (
                    <TouchableOpacity
                      key={time}
                      disabled={!available}
                      onPress={() => setSelectedHour(time)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: selectedHour === time ? colors.orange : colors.black.shape,
                        width: 80,
                        height: 49.4,
                        borderRadius: 10,
                        padding: 8,
                        marginRight: 12,
                        opacity: available ? 1 : 0.3,
                      }}>
                      <Title
                        color={selectedHour === time ? colors.black.background : colors.orange}
                        fontFamily="RobotoSlab_500Medium"
                        size={14}>
                        {time < 10 ? `0${time}h:00` : `${time}h:00`}
                      </Title>
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </ScrollView>
        </>
      )}
      <View style={{ marginRight: 12 }}>
        <Button
          title="Confirm appointment"
          onPress={() =>
            navigator.navigate(
              'SuccessConfirmation' as never,
              {
                day: 'Tuesday',
              } as never
            )
          }
        />
      </View>
    </View>
  );
}
