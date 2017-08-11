# yat

Yat is a simple client-side geolocation React component, made mostly to tinker with publishing npm packages.

You don't have to be a [yat](https://en.wikipedia.org/wiki/New_Orleans_English) to use it.

## Installation

```sh
yarn add @anandaroop/yat
```

## Basic Usage

In your html:

```html
<div id="root">
  <!-- component will mount here  -->
</div>  
```

In your javascript:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Yat from '@anandaroop/yatyat'

ReactDOM.render(
  <Yat />,
  document.querySelector('#root')
)
```

Resulting in the html output:

```
-74.9938, 39.8526
```

## Options

Let's aim to support both lon,lat and lat,lon ordering.

```jsx
import React from 'react'
import Yat from '@anandaroop/yatyat'

MyComponent = () =>
  <div>
    <p>Here's lon,lat ordering (the default)</p>
    <Yat order="lon,lat" />

    <p>Here's lat,lon ordering</p>
    <Yat order="lat,lon" />
  </div>
```

## Development

- Component source code lives under `/src/components`
- Use Storybook for a nice developer experience, and to document

```sh
cd yat
yarn run storybook
open http://localhost:6006
```
