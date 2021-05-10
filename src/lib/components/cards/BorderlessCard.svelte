<script>

  export let article;
  export let category;
  export let profile;
  export let avatar;

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

<div>
	<div>
		<a href="/categories/{category.id}" class="inline-block">
			<span
				class="{pillColor(category.color)}"
			>
				{category.name}
			</span>
		</a>
	</div>
	<a href="/articles/{article.id}" class="block mt-4">
		<p class="text-xl font-semibold text-main-900">{article.title}</p>
		<p class="mt-3 text-base text-gray-500">
			{article.excerpt}
		</p>
	</a>
	<div class="flex items-center mt-6">
		<div class="flex-shrink-0">
			<a href="/profiles/{profile.id}">
				<span class="sr-only">{profile.first_name} {profile.last_name}</span>
				<img
					class="w-10 h-10 rounded-full"
					src="/{avatar.file_name}"
					alt="{profile.first_name} {profile.last_name}"
				/>
			</a>
		</div>
		<div class="ml-3">
			<p class="text-sm font-medium text-main-900">
				<a href="/profiles/{profile.id}"> {profile.first_name} {profile.last_name} </a>
			</p>
			<div class="flex space-x-1 text-sm text-main-500">
				<time datetime="{article.publish_date}"> Mar 16, 2020 </time>
				<span aria-hidden="true"> &middot; </span>
				<span> 6 min read </span>
			</div>
		</div>
	</div>
</div>
