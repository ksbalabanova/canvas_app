import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import { App } from './App';
import { ModalsProvider } from '@salutejs/plasma-web';


ReactDOM.render(
    <DeviceThemeProvider>
        <SSRProvider>
            <ModalsProvider>
                <App />
            </ModalsProvider>
            <GlobalStyle />
        </SSRProvider>
    </DeviceThemeProvider>,
    document.getElementById('root'),
);
