  <div class="collapse w-96" {tabindex}>
    {#if checkbox}
    <input type="checkbox" >
    {/if}
    <div class="collapse-title text-xl font-medium {titleClass}">
      {{  title }}
    </div>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>

<script>
    export let titleClass;
    export let title;
    export let checkbox;
    $: tabindex = checkbox ? null : 0;
</script>
