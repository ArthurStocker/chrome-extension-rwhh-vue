// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

function setX(event) {
    let minutes = parseFloat(event.target.value);
    chrome.browserAction.setBadgeText({ text: 'ON' });
    //chrome.alarms.create({delayInMinutes: minutes});
    //chrome.storage.sync.set({minutes: minutes});
    window.close();
}

function clearX() {
    chrome.browserAction.setBadgeText({ text: '' });
    //chrome.alarms.clearAll();
    window.close();
}

//An Event delay will fire
//document.getElementById('A').addEventListener('click', setX);
//document.getElementById('B').addEventListener('click', setX);
//document.getElementById('C').addEventListener('click', setX);
//document.getElementById('D').addEventListener('click', clearX);


Vue.component('dyntable', {
    data: function() {
        return {
            selection: null
        }
    },
    props: ['fields', 'items'],
    template: ' \
    <b-table striped hover :fields="fields" :items="items" selectable select-mode="single" selectVariant="info" @row-selected="select"> \
    </b-table> \
    ',
    methods: {
        select: function(item) {
            alert(JSON.stringify(item))
            this.$emit("select", this.selection)
            this.selection = null
            this._xx = item
        }
    }
})

window.app = new Vue({
    el: '#app',
    data: {
        applicationActive: true,
        currentTab: 1,
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
                    header: 'Content-Type',
                    value: 'text/html;charset=utf-8'
                },
                {
                    id: 2,
                    isActive: true,
                    applyTo: 2,
                    order: 2,
                    header: 'X-Content-Type-Options',
                    value: ''
                }
            ]
        }
    },
    computed: {
        getTabComponent: function() {
            return 'dyntable'
        }

    },
    methods: {
        changeStatus: function() {
            this.applicationActive = !this.applicationActive
            alert(JSON.stringify(this.$data))
        },
        select: function(d) {
            alert(d)
        }

    }
})

function debugOut(items) {
    for (var i = 0; i < items.length; i++) {
        alert('' + JSON.stringify(items[i]));
    }
}