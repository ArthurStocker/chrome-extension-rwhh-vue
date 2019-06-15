// Copyright 2019 Arthur Stocker. All rights reserved.
'use strict';

Vue.use(Vuex)
Vue.use(httpVueLoader)

const mutationHook = store => {
    store.subscribe((mutation, state) => {
        console.log(mutation, state)
    })
  }