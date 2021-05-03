<script>
  export let categories;
  export let title;
</script>

<div class="ml-8">
  <h1>
    <span class="block text-base text-center text-cyan-600 mt-8 font-semibold tracking-wide uppercase">{title}</span>
  </h1>
    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
      {#each categories as category (category.id)}
      <li class="col-span-1 flex shadow-sm rounded-md">
        <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
          {category.name.charAt(0)}
        </div>
        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div class="flex-1 px-4 py-2 text-sm truncate">
            <a href="/categories/{category.id}" class="text-gray-900 font-medium hover:text-gray-600">{category.name}</a>
            <p class="text-gray-500">{category.description}</p>
          </div>

        </div>
      </li>
      {/each}

  

    </ul>
  </div>
  