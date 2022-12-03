<script lang="ts">
    import { page } from '$app/stores';
    import PageHeader from '$lib/components/PageHeader.svelte';

    $: status = $page.status;
    $: error = $page.error;
</script>

<svelte:head>
    <title>{status} - Vladislav Orlov - orlvt.com</title>
    <meta property="og:title" content="{status} - Vladislav Orlov - orlvt.com" />
</svelte:head>

<PageHeader />

<section class="l-container">
    {#if status === 404}
        <h1>404. Page is not found</h1>
        <p>
            Sorry, the requested page doesn't exist.
            <br />
            You can return <a href="/">on home page</a>.
        </p>
    {:else}
        {#if error}
            <h1>{status}. {error.message}</h1>
            {#if error.stack}
                <pre><code>{error.stack}</code></pre>
            {/if}
        {:else}
            <h1>{status}. Something gone wrong</h1>
        {/if}
        <p>
            You can return <a href="/">on home page</a>.
        </p>
    {/if}
</section>
