import { meteor } from "meteor/meteor";
import React from "react";
import { random } from "meteor/random";
import { assert } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';

import ImagePreview from "./ImagePreview.jsx";
import ImagenesWrapper from "./ImagenesWrapper.jsx";
import Buscador from "./Buscador.jsx";
//import { ImageCollection } from "../../server/publish.js";



if(Meteor.isClient){

Factory.define('imagen', ImagePreview, {});
  describe("Imagenes", () =>{
    it("Deberia renderizar el componente imagenes", function(){

      const testImagePreview = Factory.build('imagen',{
        'url':'',
        'title':''
      })

      const sha = shallow(<ImagePreview id={testImagePreview._id} imagen={testImagePreview} />);

      chai.assert(sha.hasClass('imagen'));
    })

  })

  describe("buscador", () =>{
    it("Deberia renderizar el componente buscador", function(){

      const sha = shallow(<Buscador/>);
      const das = sha.

      chai.assert.equal(sha.find('input[type="text"]').prop('defaultValue'),'');

    })

    /**describe("wrapper", () =>{
      it("Deberia renderizar el componente wrapper", function(){

        const sha = shallow(<ImageWrapper/>);
        chai.assert(true);

      })*/

  })


}
