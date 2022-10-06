import React, { useState } from 'react'
import * as Reacts from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AuthLayout } from '../'
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButtonSecond,
} from '../../components'
import { icons, SIZES, COLORS, constants, FONTS } from '../../constants'

const Otp = () => {
  return (
    <AuthLayout
      title='OTP Authentication'
      subtitle='An authentication code has been sent to test Otp'
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      <Text>Otp</Text>
    </AuthLayout>
  )
}

export default Otp
