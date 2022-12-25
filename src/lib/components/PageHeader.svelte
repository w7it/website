<header class="header">
    <div class="left">
        <a href="/" class="invisible-link logotype">
            <img src="/logotype.svg" alt="Vladislav Orlov" />
            <span>Software<br />IT Company</span>
        </a>
    </div>

    <nav class="menu">
        <ul>
            <li><a href="#" target="_blank" rel="noreferrer">Solutions</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Blog</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">About us</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Careers</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Get in touch</a></li>
        </ul>
    </nav>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;

        display: grid;
        align-items: center;
        grid-template-columns: repeat(12, [col-start] 64px);
        gap: 24px;
        justify-content: center;
        padding: 8px 16px;

        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);

        border-bottom: 1px solid;
        border-image-source: linear-gradient(
            89.77deg,
            rgba(226, 212, 228, 0.25) 19.86%,
            rgba(50, 230, 111, 0.25) 81.04%
        );
    }

    .left {
        grid-column: col-start / span 6;
    }

    .logotype {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .logotype img {
        width: 64px;
        height: 64px;
    }

    .logotype span {
        font-size: 14px;
        line-height: 1.2;
        color: #ebebeb;
    }

    .menu {
        grid-column: 7 col-start / span 6;
    }

    .menu ul {
        list-style: none;
        margin: -8px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .menu a {
        display: inline-block;
        padding: 8px;
        color: #fff;
        text-decoration: none;
    }
</style>
