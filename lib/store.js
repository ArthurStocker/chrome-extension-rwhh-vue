// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

const store = new Vuex.Store({
    state: {
        applicationStateActive: true,
        activeTable: 1,
        selections: {
            hosts: null,
            rulesets: null,
            requests: null,
            responses: null
        },
        definitions: [{
                id: 1,
                name: 'hosts',
                title: 'Hosts',
                fields: 0,
                filterRule: { field: 'id', basedOn: { table: 'hosts', fileld: 'id' } }
            },
            {
                id: 2,
                name: 'rulesets',
                title: 'Rulesets',
                fields: 1,
                filter: { field: 'applyTo', basedOn: { table: 'hosts', fileld: 'id' } }
            },
            {
                id: 3,
                name: 'requests',
                title: 'Requests',
                fields: 2,
                filter: { field: 'applyTo', basedOn: { table: 'rulesets', fileld: 'id' } }
            },
            {
                id: 4,
                name: 'responses',
                title: 'Responses',
                fields: 2,
                filter: { field: 'applyTo', basedOn: { table: 'rulesets', fileld: 'id' } }
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
        activeTable: (state, data) => { state.activeTable = data },
        selections: (state, data) => { Vue.set(state.selections, data.key, data.value) }
    }
})