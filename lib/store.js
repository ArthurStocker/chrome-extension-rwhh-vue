// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

const store = new Vuex.Store({
    plugins: [mutationHook],
    state: {
        applicationStateActive: true,
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
                    { key: 'c', label: '&nbsp;', type: 'delete', editable: -1, class: "d-none", methods: '{ "click": "deleteRecord"}', formatter: (value, key, item) => { return value } },
                    { key: 'id', label: 'ID', type: 'text', editable: -1, class: "x-w10", methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', editable: -1, class: "x-w5", methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'condition', label: 'Condition', type: 'text', editable: -1, class: "x-w85", methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: '', basedon: { dataset: '_', definition: '' } },
                records: [{
                        c: '',
                        id: 'H1',
                        isActive: true,
                        condition: '*://*/amb_login.do'
                    },
                    {
                        c: '',
                        id: 'H2',
                        isActive: true,
                        condition: '*://*'
                    }
                    /*,
                    {
                        id: null,
                        isActive: null,
                        condition: null
                    }
                    */
                ]
            },
            {
                id: 2,
                type: 'conditional-table',
                name: 'rulesets',
                title: 'Rulesets',
                definition: [
                    { key: 'id', label: 'ID', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'action', label: 'Action', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'condition', label: 'Condition', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'description', label: 'Description', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: 'applyTo', basedon: { dataset: 'hosts', definition: 'id' } },
                records: [{
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
                    { key: 'id', label: 'ID', type: 'text', editable: -1, methods: '{ "click": "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'key', label: 'Header', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'value', label: 'Value', type: 'text', editable: -1, methods: '{ "click": "editRecord", "dblclick": "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } }
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
                    { key: 'id', label: 'ID', type: 'text', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'isActive', label: 'Active', type: 'checkbox', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'applyTo', label: 'Apply to', type: 'text', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'order', label: 'Order', type: 'text', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'key', label: 'Header', type: 'text', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } },
                    { key: 'value', label: 'Value', type: 'text', editable: -1, methods: '{ click: "editRecord", dblclick: "editRecord", "input": "updateRecord" }', formatter: (value, key, item) => { return value } }
                ],
                filterrule: { field: 'applyTo', basedon: { dataset: 'rulesets', definition: 'id' } },
                records: [{
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
        ],
        editable: true
    },
    mutations: {
        toggleApplicationState: (state, data) => {
            state.applicationStateActive = data.value || !state.applicationStateActive
            chrome.browserAction.setBadgeText({ text: (state.applicationStateActive ? 'ON' : 'OFF') })

            if (!data.readFromStorage)
                chrome.storage.sync.set({ applicationStateActive: state.applicationStateActive }, () => {
                    console.log('Value is set to ' + state.applicationStateActive, state);
                });

        },
        setActiveComponent: (state, data) => {
            state.activeComponent = data.value

            if (!data.readFromStorage)
                chrome.storage.sync.set({ activeComponent: state.activeComponent }, () => {
                    console.log('Value is set to ' + state.activeComponent, state);
                });
        },
        updateRecord: (state, data) => {
            state.datasets.filter((dataset) => dataset.name == data.dataset)[0].records[data.row][data.col] = data.value
        },
        editRecord: (state, data) => {
            state.datasets.forEach((set) => {
                set.definition.forEach((definition) => {
                    definition.editable = -1
                })
            })
            state.datasets.filter((dataset) => dataset.name == data.dataset)[0].definition.filter((field) => field.key == data.col)[0].editable = data.value || data.row
        },
        selections: (state, data) => {
            Vue.set(state.selections, data.key, data.value)
        },
        editable: (state, data) => {
            state.editable = data.value || !state.editable
            state.datasets.filter((dataset) => dataset.id === state.activeComponent)[0].definition.filter((field) => field.key === 'c')[0].class = state.editable ? 'x-w5' : 'd-none'


            if (!data.readFromStorage)
                chrome.storage.sync.set({ editable: state.editable }, () => {
                    console.log('Value is set to ' + state.editable, state);
                });
        }
    }
})

chrome.storage.sync.get(['applicationStateActive'], function(result) {
    console.log('Value currently is ', result);
    store.commit('toggleApplicationState', { readFromStorage: true, value: result['applicationStateActive'] });
});

chrome.storage.sync.get(['activeComponent'], function(result) {
    console.log('Value currently is ', result);
    store.commit('setActiveComponent', { readFromStorage: true, value: result['activeComponent'] });
});

chrome.storage.sync.get(['selections'], function(result) {
    console.log('Value currently is ', result);
});

chrome.storage.sync.get(['datasets'], function(result) {
    console.log('Value currently is ', result);
});

chrome.storage.sync.get(['editable'], function(result) {
    console.log('Value currently is ', result);
    store.commit('editable', { readFromStorage: true, value: result['editable'] });
});