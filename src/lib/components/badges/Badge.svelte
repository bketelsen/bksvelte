<script>
    export let color;
    export let text;
    export let size;
    export let outline;
    // colors:
    // none: neutral
    // badge-primary: primary
    // badge-secondary
    // badge-accent
    // badge-ghost: barely background
    // badge-info
    // badge-success
    // badge-warning
    // badge-error

    // sizes:
    // badge-lg: large
    // null: normal
    // badge-small: small

    
</script>
<div class="badge {color} {size} {outline ? "badge-outline" : ""}>{text}</div> 