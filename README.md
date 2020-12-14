Esta aplicación fue creada bajo el comando npx create-react-app
Usa `yarn start` para lanzar la aplicación


# Estructura del proyecto
### /actions
`/types` actions types
`files` custom hooks para administrar las acciones
### /assets
Recursos de imágenes o videos
### /components
Componentes
### /constants
Constantes separados en archivos dependiendo del grupo
### /httpClient
Encargado de realizar peticiones a servicios web.

Implementa `fetch`

**Retorna**

    {
        "get",
        "post",
        "postPure",
        "put",
        "del"
    }
### /pages
Aquí van las vistas principales.

No deben llevar mucha lógica de negocio, todo debe ser trasladado a subcomponentes y actions

### /store
Aquí van los reducers y el estado de la aplicación

`/reducers` Reducers del aplicativo.

Los reducers son los encargados de modificar el estado de la aplicación

`combineReducers` Función para "combinar" varios reducers

`storeContext` Hacemos uso de los hooks useReduce y useContext para emular el funcionamiento de "Redux". De esta manera podemos inyectar el estado a todos los componentes.

La manera para obtener el estado es de la siguiente manera:

 `const { state, dispatch } = useStore()`
 
El estado se actualiza mediante el llamado al método **dispatch**

### /styles
`animations.js` Animaciones personalizadas bajo styled components

`GlobalStyles` Estilos globales bajo styled components

### /utils
Archivos con funciones reutilizables, como manejo de fechas.

`base64ToBlob` Función para convertir un archivo base64 a blob. Por ejemplo cuando se desea convertir una imagen a blob para enviarla por un servicio web.

`cookies` Función para obtener cookies

`fechas` Utilidades para manejo de fechas

# Rutas

`/ `Ruta pública, por defecto va a HomePage

`/protected` Ruta protegida, el usuario debe autenticarse para poder acceder.

Las rutas se modifican en `App.js`


# Formularios
En este proyecto se han creado componentes propios para manejar formularios sin necesidad de librerías de terceros.

La lógica de estos están en `/components/Forms`

Podemos ver un ejemplo del uso de formularios en `/components/LoginForm`

### Ejemplo
`useInputValue` Este custom hook nos permite representar un input.

Recibe los siguientes parámetros:

**name** Atributo name del <input>

**value** El valor que tendrá

**type** Atributo type del <input>

**placeholder** Atributo placeholder del <input>

**validators** Un arreglo de las validaciones que tendrá el input.

Un `validator` tiene la siguiente estrucutra:

**type:** string: tipo de validación: required, patter, maxlength, minlength
   
**message:** string: mensaje de alerta
   
**check:** function: Qué función debe ejecutar para verificar la validez de lo ingresado
    
**valueToCheck:** string / number : Cuál es el valor de referencia para decidir si es válido el valor ingresado. Por ejemplo, un patrón, o si el maxlength será 50, este valor se pasa al método checkMaxLength como parámetro.

En el componente LoginForm vemos lo siguiente


    const username = useInputValue({
    value: '',
    name: 'username',
    type: 'text',
    placeholder: 'Your username',
    validators: VALIDATORS_LOGIN_FORM.username
    })


**Observa en /components/LoginForm/validators.js la manera de crear los validators**


