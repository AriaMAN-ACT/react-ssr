import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from "react-router-config";
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())};
                </script>
            </body>
        </html>
    `;
};