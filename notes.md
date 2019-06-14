# Set or remove badge 
```
function setX(event) {
    let minutes = parseFloat(event.target.value)
    chrome.browserAction.setBadgeText({ text: 'ON' })
        //chrome.alarms.create({delayInMinutes: minutes});
        //chrome.storage.sync.set({minutes: minutes});
    window.close()
}

function clearX() {
    chrome.browserAction.setBadgeText({ text: '' })
        //chrome.alarms.clearAll();
    window.close()
}
```

# Sample "input in table"
```
<div id='app'>
    <span v-for="item in items">{{ item.count }}</span>
    <b-table :fields="fields" :items="items">
        <template slot="index" slot-scope="data">
            {{data.index + 1}} {{ data }}
        </template>
        <template v-for="key in keys" :slot="key" slot-scope="data">
            <input
                class="form-control"
                type="text"
                v-model="data.item[key]"
        /> {{ data }}
        </template>
    </b-table>
</div>

window.onload = function() {new Vue({el:'#app',
    data: {
    	keys:['count', 'test'],
        fields: ["index","count", "test"],
        items: [
          { count: 3 ,test: 'a' },
          { count: 3 ,test: 'a' },
          { count: 3 ,test: 'a' },
          { count: 3 ,test: 'a' },
        ]
    },
})}
```
