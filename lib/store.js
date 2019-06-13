// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

const store = new Vuex.Store({
    state: {
        applicationStateActive: true,
        currentTab: 1,
        selections: {
            hosts: 0,
            rulesets: 0,
            requests: 0,
            responses: 0
        },
        navTabs: [{
                id: 1,
                name: 'hosts',
                title: 'Hosts',
                fields: 0
            },
            {
                id: 2,
                name: 'rulesets',
                title: 'Rulesets',
                fields: 1
            },
            {
                id: 3,
                name: 'requests',
                title: 'Requests',
                fields: 2
            },
            {
                id: 4,
                name: 'responses',
                title: 'Responses',
                fields: 2
            }
        ],
        fields: [
            [
                { key: 'id', label: 'ID', formatter: (value, key, item) => { return value } },
                { key: 'isActive', label: 'Active', formatter: (value, key, item) => { return value } },
                { key: 'condition', label: 'Condition', formatter: (value, key, item) => { return value } }
            ],
            [
                { key: 'id', label: 'ID', formatter: (value, key, item) => { return value } },
                { key: 'isActive', label: 'Active', formatter: (value, key, item) => { return value } },
                { key: 'applyTo', label: 'Apply to', formatter: (value, key, item) => { return value } },
                { key: 'order', label: 'Order', formatter: (value, key, item) => { return value } },
                { key: 'action', label: 'Action', formatter: (value, key, item) => { return value } },
                { key: 'condition', label: 'Condition', formatter: (value, key, item) => { return value } },
                { key: 'description', label: 'Description', formatter: (value, key, item) => { return value } }
            ],
            [
                { key: 'id', label: 'ID', formatter: (value, key, item) => { return value } },
                { key: 'isActive', label: 'Active', formatter: (value, key, item) => { return value } },
                { key: 'applyTo', label: 'Apply to', formatter: (value, key, item) => { return value } },
                { key: 'order', label: 'Order', formatter: (value, key, item) => { return value } },
                { key: 'key', label: 'Header', formatter: (value, key, item) => { return value } },
                { key: 'value', label: 'Value', formatter: (value, key, item) => { return value } }
            ]
        ],
        tables: {
            hosts: [{
                    id: 1,
                    isActive: true,
                    condition: '*://*/amb_login.do'
                },
                {
                    id: 2,
                    isActive: true,
                    condition: '*://*'
                }
            ],
            rulesets: [{
                    id: 1,
                    isActive: true,
                    applyTo: 1,
                    order: 1,
                    /* delete, modify, modify or add */
                    action: "modify or add",
                    condition: "",
                    description: "modify header or add if missing"
                },
                {
                    id: 2,
                    isActive: true,
                    applyTo: 2,
                    order: 1,
                    /* delete, modify, modify or add */
                    action: "delete",
                    condition: "",
                    description: "delete"
                }
            ],
            requests: [],
            responses: [{
                    id: 1,
                    isActive: true,
                    applyTo: 1,
                    order: 1,
                    key: 'Content-Type',
                    value: 'text/html;charset=utf-8'
                },
                {
                    id: 2,
                    isActive: true,
                    applyTo: 1,
                    order: 2,
                    key: 'X-Content-Type-Options',
                    value: ''
                }
            ]
        }
    },
    mutations: {
        applicationStateActive: (state, data) => { state.applicationStateActive = data },
        currentTab: (state, data) => { state.currentTab = data },
        selections: (state, data) => { Vue.set(state.selections, data.key, data.value) }
    }
})