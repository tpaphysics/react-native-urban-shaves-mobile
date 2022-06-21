import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Button from './Button';

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Select date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{ backgroundColor: 'red' }}
      />
    </View>
  );
};

export default Example;
