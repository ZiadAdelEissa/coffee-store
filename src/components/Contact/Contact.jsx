import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faSquareTwitter,
    faYoutube,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact">
		<main className="row">
			
			

			<section className="col left">
				
				

				<div className="contactTitle">
					<h2>Get In Touch</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
				</div>

				
				<div className="contactInfo">
					
					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
						</div>
						<div className="details">
							<span>Phone</span>
							<span>0112548995</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
						</div>
						<div className="details">
							<span>Email</span>
							<span>Lux Coffee Barr@gmail.com</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-location-dot"><FontAwesomeIcon icon={faLocationDot} /></i>
						</div>
						<div className="details">
							<span>Location</span>
							<span>233 ST-Degla-Maddi</span>
						</div>
					</div>

				</div>

				

				<div className="socialMedia">
					<Link to="#"><i className="fa-brands fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></i></Link>
					<Link to="#"><i className="fa-brands fa-twitter"><FontAwesomeIcon icon={faSquareTwitter} /></i></Link>
					<Link to="#"><i className="fa-brands fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></Link>
					<Link to="#"><i className="fa-brands fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i></Link>
				</div>

				

			</section>

			
			<section className="col right">
				
				

				<form className="messageForm">
					
					<div className="inputGroup halfWidth">
						<input type="text" name="" required="required"/>
						<label>Your Name</label>
					</div>

					<div className="inputGroup halfWidth">
						<input type="email" name="" required="required"/>
						<label>Email</label>
					</div>

					<div className="inputGroup fullWidth">
						<input type="text" name="" required="required"/>
						<label>Subject</label>
					</div>

					<div className="inputGroup fullWidth">
						<textarea required="required"></textarea>
						<label>Say Something</label>
					</div>

					<div className="inputGroup fullWidth">
						<button>Send Message</button>
					</div>

				</form>

				
			</section>

			
		</main>
	</div>
  )
}
