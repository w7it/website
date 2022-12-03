<script lang="ts">
    import socialLinks from '$lib/social-links.json';
    import photo from './main-photo.jpg';
</script>

<svelte:head>
    <title>Vladislav Orlov - w7it.com</title>
    <meta property="og:title" content="Vladislav Orlov - w7it.com" />
</svelte:head>

<div class="p-home l-container">
    <h1 class="p-home__title">Vladislav Orlov</h1>

    <nav class="p-home__nav">
        {#each socialLinks as link, index}
            {#if index !== 0}{' ‧ '}{/if}
            <a href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
        {/each}
    </nav>

    <main class="p-home__intro b-post">
        <img class="p-home__photo" src={photo} alt="Vladislav Orlov" />

        <div>
            <p>Hi! 👋 I'm digital-nomad & JS/TS developer</p>
            <p>This site will be filled soon</p>
        </div>
    </main>
</div>

<style>
    .p-home__title {
        font-size: 2.3rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .p-home__nav {
        margin: -1em 0 1em;
    }

    .p-home__intro {
        width: 100%;
        display: grid;
        gap: 1.5rem;
        margin: 2rem 0;

        grid-template-columns: auto;
        grid-template-areas: 'photo' 'body';
    }

    img.p-home__photo {
        display: block;
        border-radius: var(--img-radius);
        margin: 0 auto;
        margin-top: 4px;
        width: 100%;
    }

    @media (min-width: 600px) {
        .p-home__intro {
            grid-template-columns: 250px auto;
            grid-template-areas: 'photo body';
        }
    }
</style>
