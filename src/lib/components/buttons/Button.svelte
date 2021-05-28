<script>
    export let color;
    export let size;
    export let isOutline;
    export let isDisabled;
    export let isGlass;
    export let isResponsive;
    export let isWide;
    export let shape;
    export let isLoading;

    $: outline = isOutline ? "btn-outline" : ""
    $: disabled = isDisabled ? "btn-disabled" : ""
    $: glass = isGlass ? "btn-glass" : ""
    $: responsive = isResponsive ? "btn-xs md:btn-sm lg:btn-md xl:btn-lg" : ""
    $: wide = isWide ? "btn-wide" : ""
    $: btnShape = shape ? shape : ""
    $: loading = isLoading ? "loading" : ""
    // colors:
    // none: neutral
    // btn-primary
    // btn-secondary
    // btn-accent
    // btn-ghost
    // btn-link
    // btn-info
    // btn-success
    // btn-warning
    // btn-error

    // sizes:
    // none: normal
    //  btn-lg
    // btn-sm
    // btn-xs

    // shapes:
    // none: default (rounded square)
    // btn-square
    // btn-circle
</script>

<button class="btn {outline} {disabled} {glass} {wide} {responsive} {btnShape} {loading}">neutral</button> 
 