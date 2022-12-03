<svelte:head>
    <link rel="stylesheet" href="/normalize.css" />
    <link rel="stylesheet" href="/variables.css" />
    <link rel="stylesheet" href="/typography.css" />
    <link rel="stylesheet" href="/layout.css" />
</svelte:head>

<slot />

<footer class="l-container l-footer">
    © 2017-{new Date().getFullYear()} All rights reserved, Vladislav Orlov.
    <a href="https://github.com/w7it/website" target="_blank" rel="noreferrer">
        Source code on GitHub
    </a>
</footer>
