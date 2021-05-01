<script>
    export let article;
    $: imageSource = import.meta.env.VITE_API_BASE + "/" + article.image.file_name
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
        <img
            class="h-48 w-full object-cover"
            src="{imageSource}"
            alt=""
        />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="text-sm font-medium text-cyan-600">
                <a href="#" class="hover:underline"> {article.category && article.category.name} </a>
            </p>
            <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                    {article.title}
                </p>
                <p class="mt-3 text-base text-gray-500">
                    {article.excerpt}
                </p>
            </a>
        </div>
        <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
                <a href="#">
                </a>
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline"> {article.profile && article.profile.first_name} </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> 4 min read </span>
                </div>
            </div>
        </div>
    </div>
</div>
