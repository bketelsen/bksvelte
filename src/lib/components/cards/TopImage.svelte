<script>
	export let imageSrc;
	export let title;
	export let content;
	export let isAccent;
	export let isCentered;
	export let isImageFull;
	export let isSide;

	$: centered = isCentered ? 'text-center' : '';
	$: accent = isAccent ? 'bg-accent text-accent-content' : '';
	$: imgFull = isImageFull ? 'image-full' : '';
	$: imgRound = isImageFull ? 'rounded-xl' : '';
	$: side = isSide ? 'lg:card-side' : '';
</script>

<div class="card {side} {centered} {accent} bordered {imgFull}">
	<figure>
		<img src={imageSrc} class={imgRound} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
			<!-- <div class="badge mx-2 badge-secondary">NEW</div>-->
			<slot name="badge" />
		</h2>
		<p>{content}</p>
		<div class="justify-end card-actions">
			<!-- <button class="btn btn-secondary">More info</button> -->
			<slot name="actions" />
		</div>
	</div>
</div>
