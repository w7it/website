<script lang="ts">
    import socialLinks from '$lib/social-links.json';
</script>

<header class="l-container l-header">
    <a href="/" class="invisible-link">
        <picture>
            <source srcset="/profile-pic.avif" type="image/avif" />
            <img class="l-header__avatar" src="/profile-pic.jpg" alt="Vladislav Orlov" />
        </picture>

        <author class="l-header__author">Vladislav Orlov</author>
    </a>

    <div class="l-header__description">Digital-nomad & JS/TS developer</div>

    <nav class="l-header__nav">
        {#each socialLinks as link, index}
            {#if index !== 0}{' ‧ '}{/if}
            <a href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
        {/each}
    </nav>
</header>
