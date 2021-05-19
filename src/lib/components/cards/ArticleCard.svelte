<script>
    import SharpImage from '../util/SharpImage.svelte';
    export let article;
    const baseurl = import.meta.env.VITE_ASSET_BASE

/*
    <SharpImage 
    class="object-cover w-full h-48"
    {baseurl} 
    src="{article.image.file_name}" 
    alt="{article.image.alt}" 
    width="{article.image.width}" 
    height="{article.image.height}" />
  </div>

*/

  const colorMap = {
	  "red": {
		  "bg": "bg-red-100",
		  "text": "text-red-800"
	  },
	  "purple": {
		  "bg": "bg-purple-100",
		  "text": "text-purple-800"
	  },
	  "blue": {
		  "bg": "bg-blue-100",
		  "text": "text-blue-800"
	  },
	  "lime": {
		  "bg": "bg-lime-100",
		  "text": "text-lime-800"
	  },
	  "amber": {
		  "bg": "bg-amber-100",
		  "text": "text-amber-800"
	  },
	  "orange": {
		  "bg": "bg-orange-100",
		  "text": "text-orange-800"
	  },
	  "teal": {
		  "bg": "bg-teal-100",
		  "text": "text-teal-800"
	  },
	  "bluegray": {
		  "bg": "bg-bluegray-100",
		  "text": "text-bluegray-800"
	  },
  }

  function pillColor(color) {
		return (
			'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ' + 
      colorMap[color]["bg"] + ' ' + colorMap[color]["text"]
		);
	}
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div class="flex-shrink-0">
    
    <SharpImage 
    class="object-cover w-full h-48"
    {baseurl} 
    src="{article.image.file_name}" 
    alt="{article.image.alt}" 
    width="{article.image.width}" 
    height="{article.image.height}" />
  </div>
  <div class="flex flex-col justify-between flex-1 p-6 bg-white">
    <div class="flex-1">
      <p class="text-sm font-medium text-contrast-600">
        <a href="/categories/{article.category_id}" class="hover:underline">
          <span
          class="{pillColor(article.category.color)}"
        >
        {article.category && article.category.name}
        </span>
         
        </a>
      </p>
      <a href="/articles/{article.id}" class="block mt-2">
        <p class="text-xl font-semibold text-contrast-900">
          {article.title}
        </p>
        <p class="mt-3 text-base text-main-500">
          {article.excerpt}
        </p>
      </a>
    </div>
    <div class="flex items-center mt-6">
      <div>
        <div class="flex space-x-1 text-sm text-main-500">
          <time datetime="2020-03-10"> Mar 10, 2020 </time>
          <span aria-hidden="true"> &middot; </span>
          <span> 4 min read </span>
        </div>
      </div>
    </div>
  </div>
</div>
