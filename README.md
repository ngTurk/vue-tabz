# Vue-Tabz [![npm version](https://img.shields.io/npm/v/vue-tabz.svg)](https://www.npmjs.com/package/vue-tabz)

A Lightweight and flexible underlined tabs component for VueJS ⚡
# Demo

[Live Demo](https://61a2c69062d57a9e4da90ca5--condescending-borg-5673b3.netlify.app/)

# Installing

```bash
npm install --save vue-tabz
```

## Installation & Usage

```
import Vue from 'vue'
import vueTabz from 'vue-tabz'

Vue.use(vueTabz);

new Vue({
  render: h => h(App),
}).$mount('#app')

<template>
    <vue-tabz
        :data="['one', 'two', 'three']"
        max-width="700"
        main-color="#F5BD02"
        @clickedTab="tabsHandler"
    />
</template>
```

## API

### Props

| Name | Type | Default| Description
|--|--|--|--|
| data | Array | `[]` | data to show in tabs. (e.g `["One", "Two", "Three"]`)
| main-color | String | `""` | tabs main color, can be passed with hash and without (e.g `#F5BD02` or `F5BD02` directly).
| max-width | String | `""` | maximum width of tabs container with pixels.

### Events

| Name | Parameters| Description
|--|--|--|
| clickedTab| tabData| will fire when the user clicks on a tab and will return tab index and title.