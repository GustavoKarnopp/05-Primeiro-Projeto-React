import {createGlobalStyle} from 'styled-components';

import githubBackground from '../assets/logo-git-hub.svg';

export default createGlobalStyle`
*{
    margin:15px;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body {
    background: #F8F8F8 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font:16px Roboto, sans-serif;
}

#root{
    max-width:960px;
    margin: 0 auto;
    padding: 40 px 20px;
}

button {
    cursor: pointer;
}
`;