# proyecto3web

EJECUCION DEL PROYECTO
Es necesario tener instalado en el computador node.js y meteor.

Para la ejecucion del proyecto es necesario navegar al directiorio por terminal y ejecutar los siguientes comandos:
```meteor
npm install
meteor npm install --save bcrypt
set MONGO_URL=mongodb://1:1@ds141960.mlab.com:41960/meteor
meteor
```

El servidor se desplegara en el servidor local en el puerto 3000.

EJECUCION DE LAS PRUEBAS
Es necesario tener node.js y meteor.

Es necesario abrir una terminal en MODO ADMINISTRADOR

Para la ejecucion de las pruebas es necesario navegar al directiorio y ejecutar los siguientes comandos:
```npm install
meteor npm install --save bcrypt
meteor npm i --save-dev enzyme
meteor npm install --save react-test-renderer
meteor npm install --save react-addons-tests-utils
meteor add practicalmeteor:mocha
meteor add practicalmeteor:chai
meteor add dburles:factory
meteor test --driver-package practicalmeteor:mocha
```
