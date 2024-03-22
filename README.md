# Pasos para crear nuestra lib

## Vite

- "rápido"
- rollup 
- Muchas tecnologías / frameworks

```
    npm create vite@latest
    yarn create vite@latest
```

## Tree-shaking

> Live code inclusion

Es una forma de "eliminar" el código muerto / no utilizado

```
    import Button from 'awesome-lib'
    import {Button} from 'awesome-lib'
    import * as AwesomeLib from 'awesome-lib'    
```


## Todo paquete que se respeta
- Eslint .eslintrc --> npm init @eslint/config (seguir pasos)
- Prettier .prettierrc --> yarn add -D prettier (https://prettier.io/docs/en/plugins)
- Husky + commitlint (commits semánticos) 
- Versionado semántico
- Tests
- Readme

## Dependencias a instalar
```
    yarn add -D @types/node vite-plugin-dts
```

## Vite plugin dts

Cuando queremos compartir librerias o paquetes que se escribieron en TS se necesita incluir archivos de definición
(.d.ts) de forma separada a nuestro bundle (index.js, bundle.js) esto nos ayudará a ver los tipos de nuestra función que estemos consumiendo de nuestro paquete.

index.d.ts: Archivos de definición de tipos

## Bundling

Para crear una aplicación que sea distribuible se deben realizar ciertas configuraciones en el bundle final


```typescript
//vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-lib",
      fileName: "my-lib",
    },
  },
  plugins: [dts({ outDir: "dist" })],
});
```

```json
    // package json
    // remover private:true
  "main": "./dist/my-lib.umd.cjs",
  "exports": {
    ".": {
      "import": "./dist/my-lib.js",
      "require": "./dist/my-lib.umd.cjs"
    }
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  },
  "files": ["dist"],
```


```
    npm init @eslint/config
    yarn add -D prettier
```

.prettierrc
```
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}

```

Extender prettier del eslint base typescript: 
https://www.npmjs.com/package/eslint-config-standard-typescript-prettier

## Husky

Una herramienta que te ayuda a correr scripts en diferentes estadios de la aplicacion

Para instalar o correr el programa husky-init el proyecto necesita ser un repo
``` 
    git init
    npx husky-init && yarn o bien npm install
    npx husky add .husky/pre-commit "npm run lint"
```

- pre-commit (ejecutar scripts antes de efectuar un commit)
- pre-push (ejecutar scripts antes de hacer un push)

Commitlint documentation:
https://github.com/conventional-changelog/commitlint

```bash
    yarn add -D @commitlint/config-conventional @commitlint/cli
    echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.cjs
    npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

### Path Alias



``` 
  yarn add -D vite-tsconfig-paths // dtypes
  yarn add -D vitest
```

## Utilidades

## Check

- isNullOrUndefined: Es una función que recibe un valor X de tipo unknown y devolvemos un booleano (predicado): True si el value es nulo o undefined, false en caso contrario
  
- isObject: Es una función que recibe un valor X unkwnown y devuleve un booleano true si el typeOf es object

## String

- Includes -> Una función que recibe un string y un value a buscar dentro de ese string. Devuelve un booleano si el valor es encontrado en el string
- Capitalize (hola -> Hola) 
- reverse
- equalsIgnoreCase: Es una función que recibe 2 strings y compara si son iguales (aplicando lowercase)


## Arrays
- arraylable: Recibe un argumento (generico o nulo). La función devuelve el mismo array value si es un array válido y si el elemento es un elemento no arrayleable devuelve un array []
- sum
- sumBy
- getById 
- getIndexById
- removeItem/s

## Utils
- canUseDom: Devuelve true si puede utilizarse el dom (window)

### Timing
- debounce
- throttle
  
### Pendientes de la lib
- Funciones de timing
- Funciones de logging
- Funciones de strings
- Excluir test de la build
- Flujo de Testing en commit
- Yalc
- YAML en github actions
- Mutation testing?