<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href="/normalize.css" />
    <link rel="stylesheet" href="/variables.css" />
    <link rel="stylesheet" href="/typography.css" />
</svelte:head>

<slot />

<footer class="footer">
    © 2017-{new Date().getFullYear()} All rights reserved, W7 IT Company Ltd.
    <a href="https://github.com/w7it/website" target="_blank" rel="noreferrer">
        Source code on GitHub
    </a>
</footer>

<style>
    :global(body) {
        font-family: 'Heebo', sans-serif;
    }

    .footer {
        font-size: 12px;
        color: #999;
        text-align: center;
        padding: 32px;
    }
</style>
