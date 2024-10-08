<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
      <div class="text-center mb-6">
        <img src="/path/to/logo.png" alt="Aladia logo" class="mx-auto w-16 mb-4" />
        <h1 class="text-2xl font-semibold text-white">Welcome to Aladia,</h1>
        <p class="text-gray-400">Create or access your account from here</p>
      </div>

      <form>
        <div class="mb-4">
          <label class="sr-only">Email Address</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l-4-4m4 4l-4 4m8 0h8m-8 0l4-4m-4 4l4-4"></path>
              </svg>
            </span>
            <input type="email" placeholder="Email Address"
              class="bg-gray-800 text-white placeholder-gray-500 border border-gray-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full" />
          </div>
        </div>

        <button type="submit"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg w-full transition duration-200">
          Enter
        </button>
      </form>

      <div class="flex items-center justify-between my-4">
        <span class="border-b border-gray-700 flex-grow"></span>
        <span class="text-gray-400 mx-2">Or</span>
        <span class="border-b border-gray-700 flex-grow"></span>
      </div>

      <div class="space-y-4">
        <button
          class="bg-white text-black font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center hover:bg-gray-100">
          <img src="/path/to/google-icon.png" alt="Google icon" class="w-5 h-5 mr-3" />
          Continue with Google
        </button>
        <button
          class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center hover:bg-blue-700">
          <img src="/path/to/facebook-icon.png" alt="Facebook icon" class="w-5 h-5 mr-3" />
          Continue with Facebook
        </button>
        <button
          class="bg-black text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center hover:bg-gray-800">
          <img src="/path/to/apple-icon.png" alt="Apple icon" class="w-5 h-5 mr-3" />
          Continue with Apple
        </button>
      </div>

      <p class="text-gray-400 text-sm text-center mt-6">
        <a href="#" class="underline">Terms & Conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
