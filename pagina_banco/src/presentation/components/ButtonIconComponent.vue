<template>
  <button
    class="p-2 hover:bg-slate-500 rounded-lg hover:text-white"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :class="`fas fa-${icon}`" v-if="icon"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handleFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled && this.handleFunction) {
        this.handleFunction();
      }
    },
  },
};
</script>
