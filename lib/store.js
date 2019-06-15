// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

const store = new Vuex.Store({
    plugins: [mutationHook],
    state: {
        applicationStateActive: false,
        activeComponent: 1,
        selections: {
            _: null,
            hosts: '0',
            rulesets: '0',
            requests: '0',
            responses: '0'
        },
        datasets: [{
                id: 1,
                type: 'conditional-table',
                name: 'hosts',
                title: 'Hosts',
                definition: [
                    { key: 'id', label: 'ID', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', formatter: (value, key, item) => { return value } },
                    { key: 'condition', label: 'Condition', type: 'text', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: '', basedon: { dataset: '_', definition: '' } },
                records: [
                    {
                        id: 'H1',
                        isActive: true,
                        condition: '*://*/amb_login.do'
                    },
                    {
                        id: 'H2',
                        isActive: true,
                        condition: '*://*'
                    }
                ]
            },
            {
                id: 2,
                type: 'conditional-table',
                name: 'rulesets',
                title: 'Rulesets',
                definition: [
                    { key: 'id', label: 'ID', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'action', label: 'Action', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'condition', label: 'Condition', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'description', label: 'Description', type: 'text', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: 'applyTo', basedon: { dataset: 'hosts', definition: 'id' } },
                records: [
                    {
                        id: 'R1',
                        isActive: true,
                        applyTo: 'H1',
                        order: 1,
                        /* delete, modify, modify or add */
                        action: "modify or add",
                        condition: "",
                        description: "modify header or add if missing"
                    },
                    {
                        id: 'R2',
                        isActive: true,
                        applyTo: 'H2',
                        order: 1,
                        /* delete, modify, modify or add */
                        action: "delete",
                        condition: "",
                        description: "delete"
                    }
                ]
            },
            {
                id: 3,
                type: 'conditional-table',
                name: 'requests',
                title: 'Requests',
                definition: [
                    { key: 'id', label: 'ID', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'key', label: 'Header', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'value', label: 'Value', type: 'text', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: 'applyTo', basedon: { dataset: 'rulesets', definition: 'id' } },
                records: []
            },
            {
                id: 4,
                type: 'conditional-table',
                name: 'responses',
                title: 'Responses',
                definition: [
                    { key: 'id', label: 'ID', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'key', label: 'Header', type: 'text', formatter: (value, key, item) => { return value } },
                    { key: 'value', label: 'Value', type: 'text', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: 'applyTo', basedon: { dataset: 'rulesets', definition: 'id' } },
                records: [
                    {
                        id: 'RSH1',
                        isActive: true,
                        applyTo: 'R1',
                        order: 1,
                        key: 'Content-Type',
                        value: 'text/html;charset=utf-8'
                    },
                    {
                        id: 'RSH2',
                        isActive: true,
                        applyTo: 'R1',
                        order: 2,
                        key: 'X-Content-Type-Options',
                        value: ''
                    }
                ]
            }
        ]
    },
    mutations: {
        toggleApplicationState: (state, data) => {
            state.applicationStateActive = data || !state.applicationStateActive
            chrome.browserAction.setBadgeText({ text: (state.applicationStateActive ? 'ON' : 'OFF') })
            /*
            chrome.storage.sync.set({state: state}, function() {
                console.log('Value is set to ' + state);
            });
            */
        },
        setActiveComponent: (state, data) => { state.activeComponent = data },
        updateRecord: (state, data) => {
            state.datasets.filter((dataset) => dataset.name == data.datasetname)[0].records[data.row][data.col] = data.value
        },
        selections: (state, data) => { Vue.set(state.selections, data.key, data.value) }
    }
})

chrome.storage.sync.get(['applicationStateActive'], function(result) {
    console.log('Value currently is ' + result.key);
});

chrome.storage.sync.get(['activeComponent'], function(result) {
    console.log('Value currently is ' + result.key);
});

chrome.storage.sync.get(['selections'], function(result) {
    console.log('Value currently is ' + result.key);
});

chrome.storage.sync.get(['datasets'], function(result) {
    console.log('Value currently is ' + result.key, result);
});