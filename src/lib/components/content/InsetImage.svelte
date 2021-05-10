<script>
  import SharpImage from '../util/SharpImage.svelte';
	export let headline;
	export let title;
	export let lede;
	export let image;
  export let baseurl;

</script>

<div class="overflow-hidden bg-white">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-main-50 left-3/4"></div>
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base font-semibold tracking-wide uppercase text-contrast-600">{headline}</h2>
          <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-contrast-800 sm:text-4xl">{title}</h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-main-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <SharpImage class="object-cover object-center rounded-lg shadow-lg" {baseurl} src="{image.file_name}" alt="{image.alt}" width="{image.width}" height="{image.height}" />
              </div>
              <figcaption class="flex mt-3 text-sm text-main-500">
                <!-- Heroicon name: solid/camera -->
                <svg class="flex-none w-5 h-5 text-main-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2">{image.caption ? image.caption : title}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="text-lg text-main-500">{lede}</p>
          </div>
          <div class="mx-auto mt-5 prose prose-contrast text-main-500 lg:max-w-none lg:row-start-1 lg:col-start-1">
              <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  