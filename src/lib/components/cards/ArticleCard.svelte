<script>
    import SharpImage from '../util/SharpImage.svelte';
    export let article;
    const baseurl = import.meta.env.VITE_ASSET_BASE


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

<div class="card shadow-sm bg-accent text-accent-content">
  <SharpImage 
  class="object-cover w-full h-48"
  {baseurl} 
  src="{article.image.file_name}" 
  alt="{article.image.alt}" 
  width="{article.image.width}" 
  height="{article.image.height}" />
  <div class="card-body">
    <h2 class="card-title">{article.title}</h2> 
    <p>{article.excerpt}</p> 
    <div class="card-actions">
      <a class="btn btn-secondary">View Post</a>
    </div>
  </div>
</div>