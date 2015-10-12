# node-folder

A simple extension of mkdirp with brace-expansion.

# Current Version

0.5.0

# Version >0.4.0 - Note

```node-folder``` will return (native) __Promise__. Please make sure your node version supports it.

# Install
```
npm install --save node-folder
```
# Usage
### From Node Script
```javascript
var folder = require('node-folder');

folder('{dir1/{sub1,sub2,sub3/child{1..5}},dir2}');

```

```javascript
var folder = require('node-folder');

folder('{dir1/{sub1,sub2,sub3/child{1..5}},dir2}')
  .then(function(success) {
    // your success story
  })
  .catch(function(err) {
    // your not so success story
  })

```


__For more examples, please refer ```test``` file.__

### From CLI

```
:/> node-folder {dir1/{sub1,sub2,sub3/child{1..5}},dir2}
```
