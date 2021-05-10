<script>
    export let color;
    export let title;
    export let description;
    export let link;
    

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


    function cardColor(color) {
		return (
			'flex-shrink-0 flex items-center justify-center w-16 ' +
			colorMap[color]["bg"] +
			' ' + colorMap[color]["text"]  + ' text-sm font-medium rounded-l-md'
		);
	}
</script>

<li class="flex col-span-1 rounded-md shadow-sm">
    <div class={cardColor(color)}>
        {title.charAt(0)}
    </div>
    <div
        class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-bg-200 rounded-r-md"
    >
        <div class="flex-1 px-4 py-2 text-sm truncate">
            <a
                sveltekit:prefetch
                href="{link}"
                class="font-medium text-main-900 hover:text-main-600">{title}</a
            >
            <p class="text-main-500">{description}</p>
        </div>
    </div>
</li>