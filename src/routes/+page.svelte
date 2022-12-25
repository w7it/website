<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import heroImage from './heroimg.png';
    import heroImage2x from './heroimg@2x.png';
</script>

<svelte:head>
    <title>W7 IT Software Company</title>
    <meta property="og:title" content="W7 IT Software Company" />
</svelte:head>

<PageHeader />

<main class="intro">
    <img
        class="heroimg"
        src={heroImage}
        srcset="{heroImage}, {heroImage2x} 2x"
        alt="Fun art: Developers"
    />

    <div class="herotxt">
        <h1>Hire R&D team<br />for your product</h1>

        <p>Don't waste your time in gathering professional engineers, be focus on the product</p>

        <Button href="mailto:inbox@w7it.com">Assembly team for me</Button>
    </div>
</main>

<style>
    .intro {
        background: linear-gradient(124.46deg, #430e56 20.18%, #17372a 98.76%);
        color: #fff;
        padding: 64px;
        min-height: 60vh;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(12, [col-start] 64px);
        gap: 24px;
        justify-content: center;
    }

    .heroimg {
        grid-column: col-start / span 6;
        mix-blend-mode: luminosity;
    }

    .herotxt {
        grid-column: 7 col-start / span 6;
    }

    .herotxt h1 {
        font-size: 48px;
        font-weight: bold;
        line-height: 1;
        margin: 0 0 24px;
    }

    .herotxt p {
        font-size: 24px;
        margin: 0 0 32px;
    }
</style>
