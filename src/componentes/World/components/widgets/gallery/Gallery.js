import React, { Component } from 'react'

import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { uploadImage } from '../../../../WorldFunctions'
import { getAllImages } from '../../../../WorldFunctions'
import ImageUploader from 'react-images-upload';
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
console.log(localStorage)
console.log(jwt.decode(localStorage.usertoken))
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;

const image2base64 = require('image-to-base64');
var base64ToImage = require('base64-to-image');
var urls = [];
class Gallery extends Component {

  constructor(props) {
    super(props)
    var img;
    this.findAllImage();
    this.state = {
      isOpen: {},
      selectedFile: null,
      base64: null,
      images: null
    }

  }

  renderRow(row) {
    return (<div className="gallery-div" ><img src={row}></img>></div>)
  }


  tempo(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })
    console.log("TESTE DA  BUSCA DE IMAGENS")
    console.log(this.img)
    let type = event.target.files[0].type;

    image2base64(URL.createObjectURL(event.target.files[0]))
      .then(
        (response) => {
          console.log("TESTE")
          this.state.base64 = "data:" + type + ";base64," + response;
          //var imageInfo = base64ToImage( this.state.base64,"../../../../static",null); 
          //console.log("IMAGEM INFO = " + imageInfo)
        }
      )
      .catch(
        (error) => {
          console.log(error); //Exepection error....
        }
      )

  }
  fileUploadHandler = () => {
    const image = {
      base64: this.state.base64,
      id_user: userId
    }
    if (editavel) {
      uploadImage(image)
        .then(res => {
          console.log("UPLOAD")
        })
    }


    this.findAllImage()
    this.forceUpdate();
  }

  findAllImage = () => {

    const user = {
      id_user: userId
    }
    getAllImages(user).then(res => {
      console.log("Imagens buscadas")
      this.img = res
      console.log(this.img)

      if (res.data.length == 0) {
        urls.push('../../../../../static/fav.ico.png')
      } else {
        for (var i = 0; i < this.img.data.length; i++) {
          urls.push(this.img.data[i].base64)
        }
      }
      this.forceUpdate();
    })

  }

  componentDidMount() {


  }

  render() {

    console.log("NO RENDER")
    console.log(urls)

    return (

      <div >
        <input type="file" id="file" onChange={this.fileSelectedHandler}></input>
        <button onClick={this.fileUploadHandler}>Upload</button>
        <Carousel className="gallery-dimension">
          {urls.map(this.renderRow)}
        </Carousel>
      </div>

    )
  }
}

export default Gallery