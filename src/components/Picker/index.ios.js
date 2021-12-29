import React from 'react';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {PickerView} from './styles';

export default function Picker({onChange, tipo}) {
  return (
    <PickerView>
      <RNPicker
        style={{width: '100%', color: '#f5f5f5'}}
        dropdownIconColor="#00b94a"
        selectedValue={tipo}
        onValueChange={valor => onChange(valor)}>
        <RNPicker.Item label="Receita" value="receita" />
        <RNPicker.Item label="Despesa" value="despesa" />
      </RNPicker>
    </PickerView>
  );
}
