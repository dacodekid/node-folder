# node-folder

A simple extension of mkdirp with brace-expansion to create multi-level & recursive folders.

# Current Version

__0.5.1__

# Version >0.4.0 - Note

```node-folder``` will return (native) __Promise__. Please make sure your node version supports ES6.

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
__or__

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

### From gulp (4.0) Script
```javascript
var folder = require('node-folder');

function scaffold() {
  // Make sure you return the Promise or otherwise you'll get a warning
  // The following tasks did not complete: scaffold
  // Did you forget to signal async completion?
   return (folder('{dir1/{sub1,sub2,sub3/child{1..5}},dir2}'));
}


```

__For more examples, please refer ```test``` file.__

### From CLI

```
:/> node-folder {dir1/{sub1,sub2,sub3/child{1..5}},dir2}
```
