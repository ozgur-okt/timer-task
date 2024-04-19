import React from 'react'
import ToggleButton from '../elements/ToggleButton'
import Theme from '../elements/Theme'
import Position from '../elements/Position'
import ChangeCount from '../elements/ChangeCount'
import DisplayUnit from '../elements/DisplayUnit'
import UnitLabel from '../elements/UnitLabel'
import { PositionType, positionTypes, unitTypes } from '../types'
import RedirectButton from '../elements/RedirectButton'
import Title from '../elements/Title'
import TimerTitle from '../elements/TimerTitle'
import Subtitle from '../elements/Subtitle'
import Precision from '../elements/Precision'

function SideBar() {

  return (
    <div className="pl-5 pb-10">
      <Title title='Timer Settings' />
      <Theme />
      <ToggleButton />
      <TimerTitle />
      <Subtitle subtitle='Set the time in' />
      {Object.values(unitTypes).map((unit) => (
        <Precision key={unit} timeUnitProp={unit} />
      ))}
      <ChangeCount />
      <Subtitle subtitle='Positioning' />
      {Object.keys(positionTypes).map((position) => (
        <Position key={position} positionProp={position as PositionType} />
      ))}
      <Title title='Counters and Labels' />
      <Subtitle subtitle='Display the count in' />
      {Object.values(unitTypes).map((unit) => (
        <DisplayUnit key={unit} unit={unit} />
      ))}
      {Object.values(unitTypes).map((unit) => (
        <UnitLabel key={unit} unit={unit} />
      ))}
      <Title title='Button Settings' />
      <RedirectButton />
    </div>
  )
}

export default SideBar