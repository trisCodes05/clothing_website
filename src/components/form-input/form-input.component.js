import React from 'react'
import {Group,FormInputLable, Input} from './form-input.styles.jsx'

export default function FormInput({label, ...otherProps}) {
  return (
    <Group>
    <Input
    {...otherProps}
   />
    {label &&
    <FormInputLable shrink={otherProps.value.length}>{label}</FormInputLable>}
   
    </Group>
    
  )
}
