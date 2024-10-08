<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div class="bg-black p-10 rounded-2xl shadow-xl w-full max-w-md transition-transform transform hover:scale-105">
      <div class="text-center mb-8">
        <img src="/assets/images/logo.jpeg" alt="Aladia logo" class="mx-auto w-20 mb-4 rounded-full shadow-lg" />
        <h1 class="text-3xl font-bold text-white">Welcome to Aladia!</h1>
        <p class="text-gray-400">Create or access your account from here</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label class="sr-only">Email Address</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l-4-4m4 4l-4 4m8 0h8m-8 0l4-4m-4 4l4-4"></path>
              </svg>
            </span>
            <input type="email" placeholder="Email Address"
              class="bg-gray-800 text-white placeholder-gray-500 border border-gray-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full transition duration-200 ease-in-out transform hover:bg-gray-700" />
          </div>
        </div>

        <button type="submit"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg w-full transition duration-200 transform hover:scale-105">
          Enter
        </button>
      </form>

      <div class="flex items-center justify-between my-6">
        <span class="border-b border-gray-700 flex-grow"></span>
        <span class="text-gray-400 mx-4">Or</span>
        <span class="border-b border-gray-700 flex-grow"></span>
      </div>

      <div class="space-y-4">
        <button
          class="bg-gray-800 text-gray-100 font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center transition duration-200 hover:bg-gray-700 hover:text-white">
          <img src="/assets/images/google-icon.jpeg" alt="Google icon" class="w-5 h-5 mr-3" />
          Continue with Google
        </button>
        <button
          class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center transition duration-200 hover:bg-blue-700">
          <img src="/assets/images/facebook-icon.png" alt="Facebook icon" class="w-5 h-5 mr-3" />
          Continue with Facebook
        </button>
        <button
          class="bg-black text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center transition duration-200 hover:bg-gray-800">
          <img src="/assets/images/apple-icon.jpeg" alt="Apple icon" class="w-5 h-5 mr-3" />
          Continue with Apple
        </button>
      </div>

      <p class="text-gray-400 text-sm text-center mt-6">
        <a href="#" class="underline hover:text-yellow-500 transition duration-200">Terms & Conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    handleSubmit() {
      // Handle form submission
      alert('Form submitted!'); // Replace with actual logic
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
