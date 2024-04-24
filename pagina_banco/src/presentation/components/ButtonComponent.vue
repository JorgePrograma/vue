<template>
  <button
    :class="{
      'bg-green-600 text-white': isPrimary === true,
      'bg-gray-400 text-gray-600': isPrimary === false,
      'bg-transparent  text-gray-600': isPrimary === null,
    }"
    class="p-2 px-5 rounded-md capitalize w-full"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isPrimary: {
      type: Boolean,
      default: null,
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
  data() {
    return {};
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
