<template>
  <nut-popup
    position="bottom"
    closeable
    round
    :isWrapTeleport="isWrapTeleport"
    :visible="visible"
    :style="popStyle"
    @click-overlay="close"
    @click-close-icon="close"
  >
    <view :class="classes">
      <view class="nut-timeselect__title">
        <view class="nut-timeselect__title__fixed">
          {{ title || translate('pickupTime') }}
        </view>
      </view>
      <view class="nut-timeselect__content">
        <view class="nut-timeselect__content__pannel">
          <slot name="pannel"></slot>
        </view>
        <view class="nut-timeselect__content__detail">
          <slot name="detail"></slot>
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { computed, provide } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('timeselect');
export default create({
  props: {
    visible: {
      type: Boolean,
      defalut: false
    },
    height: {
      type: [String],
      default: '20%'
    },
    title: {
      type: String,
      default: ''
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isWrapTeleport: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'select'],
  setup: (props: any, context: any) => {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const popStyle = computed(() => {
      return {
        width: '100%',
        height: props.height
      };
    });

    const currentKey = computed(() => props.currentKey);

    const currentTime = computed(() => props.currentTime);

    const close = () => {
      context.emit('update:visible', false);
      context.emit('select', currentTime.value);
    };

    provide('currentKey', currentKey);
    provide('currentTime', currentTime);

    return {
      classes,
      popStyle,
      close,
      translate
    };
  }
});
</script>
