<template>
  <Button :bgColor="'bg-white'" :textColor="'text-gray-700'" :hoverColor="'hover:bg-gray-100'">
    <div class="flex items-center justify-center">
      <img :src="iconSrc" :alt="iconAlt" class="icon w-6 h-6 mr-3" />
      <span>{{ label }}</span>
    </div>
  </Button>
</template>

<script>
import Button from '../atoms/Button.vue';

export default {
  name: 'SocialLoginButton',
  components: { Button },
  props: {
    iconSrc: { type: String, required: true },
    iconAlt: { type: String, required: true },
    label: { type: String, required: true },
  },
};
</script>
