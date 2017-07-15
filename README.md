# yat

Yat is a simple client-side geolocation component, made mostly to tinker with publishing npm packages.

You don't have to be a [yat](https://en.wikipedia.org/wiki/New_Orleans_English) to use it.

## Installation

Aiming for…

```sh
yarn add @anandaroop/yat
```

## Basic Usage

Aiming for…

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
import Yat from 'yat'

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

Let's support both lon,lat and lat,lon ordering.

```js
import React from 'react'
import Yat from 'yat'

MyComponent = () =>
  <div>
    <p>Here's lon,lat ordering (the default)</p>
    <Yat order="lon,lat" />

    <p>Here's lat,lon ordering</p>
    <Yat order="lat,lon" />
  </div>
```

