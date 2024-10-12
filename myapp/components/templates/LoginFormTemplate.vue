<template>
  <div class="login-container min-h-screen flex items-center justify-center bg-gray-100">
    <div class="login-box bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6 md:max-w-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPageTemplate',
};
</script>
