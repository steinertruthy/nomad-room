import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }


    :root {
        --color-primary: #40C057;
        --color-bg-like-active: #D3FFDB;
        --color-bg-headline: rgba(35, 35, 35, 0.65);

        --color-gray1: #313131;
        --color-gray2: #666666;
        --color-gray3: #817E7E;
        --color-gray4: #D9D9D9;
        --color-gray5: #E6E6E6;

        --color-white: #ffffff;
        --color-error: #ff6161;

        --font-weg1: 700;
        --font-weg2: 600;
        --font-weg3: 500;
        --font-weg4: 400;

        --sz-title1: 32px;
        --sz-title2: 24px;
        --sz-title3: 20px;
        --sz-title4: 18px;
        --sz-text1: 16px;
        --sz-text2: 14px;

        --bd-radius: 10px;

        --shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: var(--color-gray1);
    }
`;
