<script lang="ts">
    export let href: string = '';
</script>

{#if href}
    <a {href} class="btn" on:click><slot /></a>
{:else}
    <button class="btn" type="button" on:click><slot /></button>
{/if}

<style>
    .btn {
        display: inline-block;
        background: #6d128e;
        padding: 16px 32px;
        border-radius: 8px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
</style>
