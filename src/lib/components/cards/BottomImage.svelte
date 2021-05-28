<script>
    export let imageSrc;
    export let title;
    export let content;
    export let isCentered;
    export let isAccent;

    $: centered = isCentered ? "text-center" : ""
    $: accent = isAccent ? "bg-accent text-accent-content" : ""
</script>

<div class="card {centered} {accent} bordered">
    <div class="card-body">
      <h2 class="card-title">{title}
        <slot name="badge"/>
        </h2> 
      <p>{content}</p> 
      <div class="card-actions">
        <slot name="actions" />
      </div>
    </div> 
    <figure>
      <img src={imageSrc}>
    </figure>
  </div> 