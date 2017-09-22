import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/App';

render(
    <AppContainer>
        <App title="Demo" />
    </AppContainer>,
    document.getElementById('app') as HTMLElement,
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
