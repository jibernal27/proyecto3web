import { chai, expect } from 'meteor/practicalmeteor:chai';

console.log("Carga los test del cliente")
describe('Accounts',  () =>{

  beforeEach(function (done) {
    Meteor.call('test.resetDatabase', done);

  });
});


describe('Methos not autenticated',  () =>{

  beforeEach(function (done) {
    Meteor.call('test.resetDatabase', done);

  });


  it('No se puede insertar una imagen con campos no validos ',function(){
    const insertImagen=new Promise((resolve, reject) =>{
      Meteor.call('addImagen',{url:"www.imagen.com/imagen1.png",snippet:"Soy un snnipet",title:"soy un titulo"},(error,data)=>{
        if(error)
        {
          const logro=true;
          resolve(error);
        }
        else
        {
          const logro=false;
          reject(data);

        }

      });

    });
    return insertImagen.then(function(logro){
      expect(logro).to.equal.(true);
    });

  });


  it('No se puede gustar una imagen con un id invalido ',function(){
    const likeIMage=new Promise((resolve, reject) =>{
      Meteor.call('likeImage',{identi:"1234455",liked:true},(error,data)=>{
        if(error)
        {
          const logro=true;
          resolve(error);
        }
        else
        {
          const logro=false;
          reject(data);

        }

      });

    });
    return likeIMage.then(function(logro){
      expect(logro).to.equal.(true);
    });

  });


});

describe('Methods',function()
{

  beforeEach(function (done) {
    Meteor.call('test.resetDatabase', done);
    Meteor.call('test.createUser');
    Meteor.loginWithPassword({email:'demo@demo.com'},'demopassword');

  });


  it('El usuario es creado correctamente' , function() {
    var userId=Meteor.userId()
    expect(userId).to.not.be.undefined;
  });  


  it('No se puede instar una imagen con una url no valida' , function() {
    const insertImagen=new Promise((resolve, reject) =>{
      Meteor.call('addImagen',{url:"a",snippet:"Imagen invalida",title:"imagen invalida"},(error,data)=>{
        if(error)
        {
          const logro=true;
          resolve(logro);
        }
        else
        {
          const logro=false;
          reject(data);

        }

      });

    });

    return insertImagen.then(function(logro){
      expect(logro).to.equal.(true);
    });

  }); 

  it('Se instera una imagen exitosamente',function(){
    const insertImagen=new Promise((resolve, reject) =>{
      Meteor.call('addImagen',{url:"www.imagen.com/imagen.jpg",snippet:"Imagen valida",title:"imagen valida"},(error,data)=>{
        if(error)
        {
          const logro=false;
          reject(error);
        }
        else
        {
          const logro=true;
          resolve(logro);

        }

      });

    });
    return insertImagen.then(function(logro){
      expect(logro).to.equal.(true);
    });

  });


  it('No se puede instar una imagen con campos no validos ',function(){
    const insertImagen=new Promise((resolve, reject) =>{
      Meteor.call('addImagen',{url:{},snippet:{},title:1000},(error,data)=>{
        if(error)
        {
          const logro=true;
          resolve(logro);
        }
        else
        {
          const logro=false;
          reject(data);

        }

      });

    });
    return insertImagen.then(function(logro){
      expect(logro).to.equal.(true);
    });

  });


  it('Se da me gusta a una imagen valida ',function(){

      const insertImagen=new Promise((resolve, reject) =>{
        Meteor.call('addImagen',{url:"www.imagen.com/imagen.jpg",snippet:"Imagen valida",title:"imagen valida"},(error,data)=>{
          if(error)
          {
            reject(error);
          }
          else
          {
            resolve(data);

          }

        });

        const likeimage= new Promise((resolve, reject) =>{
          insertImagen.then((data)=>{
            Meteor.call('likeImage',{identi:data,liked:true},(error,data)=>{
              if(error)
              {
                const logro=false;
                reject(error);
              }
              else
              {
                const logro=true;

                resolve(logro);

              }

            });

          });

        });




      return likeIMage.then(function(logro){
        expect(logro).to.equal.(true);
      });


  
    });




  });