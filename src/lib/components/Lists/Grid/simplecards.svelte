<script>
	export let categories;
	export let title;
	export let subtitle = '';
</script>

<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
	<div class="relative">
		<div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
			<h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{title}</h2>
			<p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
				{title}
			</p>
			<p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">{subtitle}</p>
		</div>
		<div class="mt-12 mx-auto max-w-lg px-4">
			<ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
				{#each categories as category (category.id)}
					<li class="col-span-1 flex shadow-sm rounded-md">
						<div
							class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md"
						>
							{category.name.charAt(0)}
						</div>
						<div
							class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
						>
							<div class="flex-1 px-4 py-2 text-sm truncate">
								<a
									href="/categories/{category.id}"
									class="text-gray-900 font-medium hover:text-gray-600">{category.name}</a
								>
								<p class="text-gray-500">{category.description}</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
