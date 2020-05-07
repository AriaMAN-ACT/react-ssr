import React from 'react';

import App, {loadData as AppLoadData} from "./components/App";
import HomePage from "./pages/HomePage";
import UsersPage, {loadData as UsersPageLoadData} from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
    {
        component: App,
        loadData: AppLoadData,
        routes: [
            {
                path: '/',
                component: HomePage,
                exact: true
            },
            {
                path: '/users',
                component: UsersPage,
                loadData: UsersPageLoadData
            },
            {
                component: NotFoundPage
            }
        ]
    }
];