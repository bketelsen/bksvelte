<script>
  export let title;
  export let heading;
  export let description;
</script>

<div class="relative py-16 bg-bg-50 sm:py-24 lg:py-32">
  <div class="relative">
    <div
      class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <h2
        class="text-base font-semibold tracking-wider uppercase text-contrast-600"
      >
        {title}
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold tracking-tight text-contrast-800 sm:text-4xl"
      >
        {heading}
      </p>
      <p class="mx-auto mt-5 text-xl max-w-prose text-main-500">
        {description}
      </p>
    </div>
    <slot />
  </div>
</div>
