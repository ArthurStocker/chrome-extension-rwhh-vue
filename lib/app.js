// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

/*
Vue.component('dynamic-table', {
    props: ['name', 'fields', 'items'],
    template: ' \
    <b-table striped hover :name="name" :fields="fields" :items="items" selectable select-mode="single" selectVariant="info" @row-selected="select"> \
    </b-table> \
    ',
    methods: {
        select: function(data) {
            store.commit('selections', { key: this.name, value: data[0].id })
        }
    }
})
*/
window.app = new Vue({
    el: '#app',
    components: {
        'app': 'url:../components/App.vue'
    }
})