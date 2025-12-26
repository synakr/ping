<script lang="ts">
    import { goto } from '$app/navigation';
    import type { PageData } from './$types';

    export let data: PageData;

    function handleGetStarted() {
        if (data.user) {
            goto('/todos');
        } else {
            goto('/login');
        }
    }
</script>

<div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl w-full text-center space-y-8 py-12">
            <!-- Logo/Icon -->
            <div class="flex justify-center">
                <div class="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                </div>
            </div>

            <!-- Main Heading -->
            <div class="space-y-4">
                <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                    Stay Organized.<br/>
                    <span class="text-gray-900">
                        Get Things Done.
                    </span>
                </h1>
                <p class="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A simple, elegant way to manage your tasks and boost your productivity.
                </p>
            </div>

            <!-- CTA Button -->
            <div class="flex justify-center pt-4">
                <button
                    on:click={handleGetStarted}
                    class="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    Get Started
                </button>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
                <div class="space-y-2">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900">Fast & Simple</h3>
                    <p class="text-gray-600 text-sm">Quick task management without the complexity.</p>
                </div>
                
                <div class="space-y-2">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900">Secure</h3>
                    <p class="text-gray-600 text-sm">Your data is protected and private.</p>
                </div>
                
                <div class="space-y-2">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900">Stay Focused</h3>
                    <p class="text-gray-600 text-sm">Minimize distractions, maximize productivity.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="py-8 text-center text-gray-500 text-sm">
        <p>© 2025 Ping. All rights reserved.</p>
    </footer>
</div>
