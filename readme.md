# Get arguments as a dictonary object

## Instalation

```bash
$ npm-install get-arguments-lib
```

### Usage

``` bash
$ node <your js  file> --port 3004 --host myHost
```


``` javascript

const processArguments = getArguments(process.argv);
const port = processArguments.port ? +processArguments.port : 3000;
const host = processArguments.host;

// port value is 3004
// host value is 'myHost'

```


