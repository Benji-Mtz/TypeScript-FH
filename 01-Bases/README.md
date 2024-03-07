## Transpilando un archivo ts a js

En la raíz del proyecto podemos hacer algo como `tsc app` para generar del archivo `.ts` un aarchivo `.js`

## Haciendo la configuración basica de TS

En la raíz del proyecto escribimos `tsc --init` y se creara el archivo `tsconfig.json`

```
{
  "compilerOptions": {...}
}
```
y podemos hacer ahora un `tsc --watch` o `tsc -w`

## Tipos de datos en typescript

- Primitivos: String, Number, Boolean (null,  undefined), Symbol
- Compuestos: Objetos literales, Funciones, Clases, Arreglos

```js
// Objeto literal
person = {
    name 'Benji',
    age: 37
}
// Clase
class Person {
    name;
    age;
} 
// funciones
function sayHello() {}
const sayHello = () => {}
// Interfaces, Genericos, Tuplas...
```