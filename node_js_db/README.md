# node_js

## Usage

``` js
const setupDatabase = requiere('node_js')

setupDatabase(config).then(db => {
  const { Agent, Metric } = db
}).catch(err => console.error(err))