# Swiper

### Intro

Often used in a group of pictures or card rotation.

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Swiper,SwiperItem } from '@nutui/nutui';
//taro
import { Swiper,SwiperItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swiper).use(SwiperItem);
```

### Basic Usage

`auto-play` Duration of automatic rotation
`init-page` Initial index value
`pagination-visible` Show paging indicator
`pagination-color` Indicator color customization

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Custom size

`width` Custom rotation size

:::demo

```html
<template>
  <nut-swiper :init-page="page2" :loop="false" width="300">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page2: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Custom paging indicator

`v-slot:page` Represents a custom indicator

:::demo

```html
<template>
  <nut-swiper :init-page="page3" :loop="true" @change="change">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
      <template v-slot:page>
        <div class="page"> {{ current }}/4 </div>
      </template>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page3: 0,
        current: 1
      });
      const change = (index: number) => {
        state.current = index + 1;
      };
      return { ...toRefs(state), change };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
</style>
```

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

```html
<template>
  <nut-swiper :init-page="page4" :loop="true" auto-play="3000" direction="vertical" height="150" :pagination-visible="true" style="height: 150px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page4: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::


## API

### Props

| Attribute                   | Description                                                        | Type           | Default      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| width                   | Width of rotation card           | Number、String        | window.innerWidth       |
| height                | Height of rotation card                                                    | String、Number | 0        |
| direction               | Rotation direction, optional value：`horizontal`,`vertical`     | String | 'horizontal'         |
| pagination-visible          | Is the paging indicator displayed                                           | Boolean         | false           |
| pagination-color         | The color selected by the pagination indicator                                              | String  | '#fff'           |
| loop           | Whether to rotate                                             | Boolean        | true       |
| duration                | Animation duration（Unit ms）                            | Number、String        | 500        |
| auto-play | Automatic rotation duration, 0 means no automatic rotation                                          | Number、String        | 0        |
| init-page               | Initialize index value                   | Number、String         | 0    |
| touchable             | if touchable to slide                                                      | Boolean         | true          |
| is-preventDefault                  | Disable default events during sliding                                              | Boolean  | true           |
| is-stopPropagation               | Is bubbling prohibited during sliding                    | Boolean         | true    |



### Events

| Event           | Description                   | Arguments     |
| ---------------- | ---------------------- | ------------ |
| change            | Callback after sliding        |  Current index value |



### API

| Event           | Description                   | Arguments     |
| ---------------- | ---------------------- | ------------ |
| prev            | Switch to previous page         | - |
| next            | Switch to next page         | - |
| to            | Switch to the specified rotation         | index:number |