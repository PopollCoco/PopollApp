<script>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- Layout général -->
<div class="flex flex-col min-h-screen bg-background text-on-background">
	<!-- Header -->
	<Header />

	<!-- Contenu principal -->
	<main class="flex-grow container mx-auto px-4 py-6 max-w-[1000px]">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>