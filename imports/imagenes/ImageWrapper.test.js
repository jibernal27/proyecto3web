import {meteor} from "meteor/meteor";
import { Factory } from 'meteor/dburles:factory';
import React from "react";
import { assert } from "meteor/practicalmeteor:chai";
import { ImagePreview } from "./ImagePreview.jsx";
import { ImageWrapper } from "./ImagenesWrapper.jsx"


if(Meteor.isClient){

  Factory.define('imagen', Imagenes, {});

  describe("Imagenes", () =>{
    this.timeout(1500000);

    beforEach(function (){

    });

    it("Deberia renderizar el componente imagenes", function(){
      const testProject = Factory.build("ImagePreview",{
        'url':'https://www.w3schools.com/html/pic_mountain.jpg',
        'title':'test'
      });
      const result = shallow(<ImageWrapper id = {testImagePreview} />);
      chai.assert(result.hasClass('imagen'));
    });

  });
}
