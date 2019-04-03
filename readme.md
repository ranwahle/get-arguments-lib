# Get arguments as a dictonary object

## Instalation

```bash
$ npm-install get-arguments-lib
```

### Usage

``` bash
$ node <your js  file> --port 3004 
```


``` javascript

const arguments = getArguments(process.argv);
const port = arguments.port ? +arguments.port : 3000;

// port's value is 3004

```


