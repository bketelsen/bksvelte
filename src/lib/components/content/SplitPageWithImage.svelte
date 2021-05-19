<script>
	export let headline;
	export let title;
	export let lede;
	export let image;

</script>

<div class="relative bg-white">
	<div class="lg:absolute lg:inset-0">
		<div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
			<img
				class="object-cover w-full h-56 lg:absolute lg:h-full"
				src="/{image.file_name}"
				alt="{image.alt ? image.alt : title}"
			/>
		</div>
	</div>
	<div
		class="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
	>
		<div class="lg:col-start-2 lg:pl-8">
			<div class="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto lg:mr-0">
				<h2 class="font-semibold tracking-wide uppercase leading-6 text-contrast-800">
					{headline}
				</h2>
				<h3 class="mt-2 text-3xl font-extrabold tracking-tight leading-8 text-contrast-800 sm:text-4xl">
					{title}
				</h3>
				<p class="mt-8 text-lg text-main-500">{lede}</p>
				<div class="mt-5 prose prose-contrast text-main-500">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
