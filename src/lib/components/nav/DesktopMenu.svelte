<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import ClickOutside from 'svelte-click-outside';

	const dispatch = createEventDispatcher();

	export let navigation;
	let open = false;
	let triggerEl;

	function toggleOutside() {
		if (open) {
			dispatch('toggleopen', {
				fired: true
			});
			open = !open;
		}
	}
	function toggleOpen() {
		open = !open;
		dispatch('toggleopen', {
			fired: true
		});
	}
</script>

<div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
	<div class="flex justify-between h-16">
		<div class="flex px-2 lg:px-0">
			<div class="flex inline-flex items-center flex-shrink-0 px-1 text-sm font-medium pt-1z">
				<slot name="brand" />
			</div>
			<div class="hidden lg:ml-6 lg:flex lg:space-x-8">
				{#each navigation as item}
					<a
						href={item.route}
						sveltekit:prefetch
						class="{item.route === $page.path
							? 'border-contrast-500 text-main-900'
							: 'border-transparent text-main-500 hover:border-main-300 hover:text-main-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
		<div class="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
			<div class="w-full max-w-lg lg:max-w-xs">
				<label for="search" class="sr-only">Search</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							class="w-5 h-5 text-main-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<input
						id="search"
						name="search"
						class="block w-full py-2 pl-10 pr-3 bg-white border border-main-300 rounded-md leading-5 placeholder-main-500 focus:outline-none focus:placeholder-main-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Search"
						type="search"
					/>
				</div>
			</div>
		</div>
		<div class="flex items-center lg:hidden">
			<!-- Mobile menu button -->
			<ClickOutside on:clickoutside={toggleOutside} exclude={[triggerEl]}>
				<button
					bind:this={triggerEl}
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-main-400 hover:text-main-500 hover:bg-main-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={toggleOpen}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="{open ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						class="{open ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</ClickOutside>
		</div>
		<div class="hidden lg:ml-4 lg:flex lg:items-center" />
	</div>
</div>
