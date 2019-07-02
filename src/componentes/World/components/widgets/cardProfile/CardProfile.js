import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getText } from '../../../../WorldFunctions'
import { saveText } from '../../../../WorldFunctions'
import placa from '../../../../static/placa.png';
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;


class cardProfile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: null
		}

	}

	componentDidMount() {

	}
	onChange(content) {
		console.log('onChange', content);
	}
	render() {
		return (
			<div class="card">
				
          	</div>

				)
			}
		}
	    
export default cardProfile;