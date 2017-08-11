import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Yat from '.'

storiesOf('Yat', module)
  .add('lon,lat (default)', () => <Yat />)
  .add('lat,lon', () => <Yat order="lat,lon" />)
