import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { $ } from 'react-jquery-plugin'
import { isLoadingCheck } from '../../../Actions/index.js'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ComputerIcon from '@material-ui/icons/Computer';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import GetAppIcon from '@material-ui/icons/GetApp';
import { firebase } from '../../../firebase';
import LoaderSpinner from '../Loader/Loader'
import { Modal } from 'react-bootstrap'
import Pusher from 'pusher-js';
import axios from 'axios'
import 'animate.css'
import './Homepage.css'
import { Dns, Web } from '@material-ui/icons'

const Banner = () => {
	// image slideshow
	const src = ["./img/programmer1.svg", "./img/programmer2.svg", "./img/programmer3.svg", "./img/programmer4.svg", "./img/programmer5.svg", "./img/programmer6.svg", "./img/programmer7.svg", "./img/programmer8.svg"]
	$(function () {
		var i = 0;
		$(".slider").attr("src", src[i]);
		setInterval(function () {
			i++;
			if (i == src.length) {
				i = 0;
			}
			$(".slider").fadeOut("slow", function () {
				$(".bannerImg").attr("src", src[i]);
				$(".slider").fadeIn("slow");
			});
		}, 2000);
	});

	const dispatch = useDispatch()
	let history = useHistory()
	const redirectProject = () => {
		dispatch(isLoadingCheck(true))
		history.push("Project")
	}

	// smooth animation on scroll
	$(window).scroll(() => {
		let height = $(window).scrollTop()
		if (height > 1100) {
			$("#services_title").addClass("animate__animated animate__zoomIn")
			$("#services_text").addClass("animate__animated animate__zoomIn")
			$("#services_quotes").addClass("animate__animated animate__zoomIn")
			$("#services_img").addClass("img-fluid animate__animated animate__flipInY")
			$(".services .col-10 .row .col-sm-5 .col-12 div").addClass("animate__animated animate__flipInX")
			$(".services .col-10 .row .col-sm-5 .col-12 div h6").addClass("animate__animated animate__zoomIn")
		}
		if (height > 1700) {
			$(".programming_card_container .col-md-10 .row .col-lg-3 .card").addClass("animate__animated animate__zoomIn")
		}
		if (height > 2500) {
			$(".SubscriberCountContainer .text").addClass("animate__animated animate__zoomIn")
			$(".SubscriberCountContainer .subscriberCount").addClass("animate__animated animate__rubberBand")
			$(".SubscriberCountContainer .count").addClass("animate__animated animate__flipInY")
		}
		if (height > 1700) {
			$(".programming_card_container .col-md-10 .row .col-lg-3 .card").addClass("animate__animated animate__zoomIn")
		}
	})

	return (
		<>
			<div className="col-md-12">
				<div className="row">
					<div className="col-lg-1 position-fixed d-flex justify-content-center socialMediaLinkBar">
						<SideIcon />
					</div>
					<div className="col-lg-1"></div>
					<div className="col-lg-5 py-5 pe-5 bg-light" style={{ borderRadius: "0px" }}><br />
						<h2 className="main_title animate__animated animate__bounce"><strong>Hello Dear! ,<br />This is Parbat Lama.</strong></h2>
						<p className="main_text animate__animated animate__slideInUp">Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019.</p>
						<a href="tel: +977-9817890667" className="btn animate__animated contactBtn animate__zoomInUp"><PermContactCalendarIcon id="viewIcon" />Contact Me</a>
						<button className="btn seeProjectBtn animate__animated animate__zoomInUp" onClick={redirectProject}><VisibilityIcon id="viewIcon" /><strong>View Projects</strong></button>
					</div>
					<div className="col-lg-5 py-5 order-first order-lg-last bg-white">
						<div className="slider" style={{ height: "280px", width: "100%" }}>
							<img src="./img/programmer2.svg" className="bannerImg animate__animated animate__slideInUp" height="100%" width="100%" loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const Card = (props) => {
	return (
		<>
			<div className="card mb-5" id={props.delay} style={{ backgroundColor: props.bg, color: props.color }}>
				<div className="card-body text-center">
					<div className="card-img-wrapper d-flex justify-content-center animate__animated ">
						<div className="bob mb-1" style={{ background: `url('${process.env.PUBLIC_URL}/img/blob.svg')` }}>
							<img src={props.src} className="img-fluid p-2" loading="lazy" />
						</div>
					</div>
					<h5 className="card-title mt-3 animate__animated ">{props.title}</h5>
				</div>
				<div className="d-flex">
					<div className="card_next_icon text-dark">
						<ArrowForwardIcon />
					</div>
				</div>
			</div>
		</>
	)
}


const ProgrammingTools = () => {
	return (
		<>
			<div className="col-md-10 mx-auto" id='programming_tech'>
				<div className="row">
					<h3 className="mb-5" id="programming_title"><strong>Tech Stacks</strong></h3>
					<div className="col-lg-3">
						<Card title="React JS" bg="#fd7e14" color="white" src={process.env.PUBLIC_URL + "/img/react.png"} delay="1s" />
					</div>
					<div className="col-lg-3">
						<Card title="Node JS" bg="" color="" src={process.env.PUBLIC_URL + "/img/node.png"} delay="2s" />
					</div>
					<div className="col-lg-3">
						<Card title="MySQL" bg="" color="" src={process.env.PUBLIC_URL + "/img/mysql.png"} delay="3s" />
					</div>
					<div className="col-lg-3">
						<Card title="MongoDB" bg="" color="" src={process.env.PUBLIC_URL + "/img/mongo.jpeg"} delay="4s" />
					</div>
					<div className="col-lg-3">
						<Card title="PHP(Core)" bg="" color="" src={process.env.PUBLIC_URL + "/img/php.png"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="Bootstrap 4" bg="" color="" src={process.env.PUBLIC_URL + "/img/boot.png"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="Jquery" bg="" color="" src={process.env.PUBLIC_URL + "/img/jquery.webp"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="AdobeXD" bg="" color="" src={process.env.PUBLIC_URL + "/img/xd.png"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="Material UI" bg="" color="" src={process.env.PUBLIC_URL + "/img/material.png"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="Git & Github" bg="" color="" src={process.env.PUBLIC_URL + "/img/github_logo.png"} delay="5s" />
					</div>
					<div className="col-lg-3">
						<Card title="Firebase (Auth)" bg="" color="" src={process.env.PUBLIC_URL + "/img/firebase.png"} delay="5s" />
					</div>
				</div>
			</div>
		</>
	)
}

const AboutMe = () => {
	return (
		<>
			<div className="col-10 mx-auto" id='about'>
				<div className="row py-2">
					<div className="col-lg-6 mt-3 mb-3 aboutUs_img_col">
						<img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="img-fluid animate__animated animate__slideInUp" loading="lazy" />
					</div>
					<div className="col-lg-6 pt-4 aboutUsTextCol">
						<h1 className="text-justify animate__animated animate__zoomIn" id="aboutUs_title"><strong>KNOW ABOUT ME ?</strong></h1><br />
						<div className="d-flex">
							<img src={process.env.PUBLIC_URL + "/img/uniglobe.png"} height="50" width="120" loading="lazy" style={{ marginLeft: "-12px", marginTop: "-2px" }} />
							<div className="d-block">
								<span ><b>Higher Secondary School</b></span><br />
								<p className="text-" style={{ fontSize: "13px" }}>- ( 2017 A.D - 2020 A.D )</p>
								<p className="bg-success text-white px-2" style={{ width: "fit-content", fontSize: "11px", marginTop: "-12px", marginLeft: "9px", borderRadius: "10px" }}>completed</p>
							</div>
						</div>
						<div className="d-flex" style={{ marginTop: "0px" }}>
							<img src={process.env.PUBLIC_URL + "/img/wlv.jpeg"} height="70" width="80" loading="lazy" />
							<div className="d-block">
								<p style={{ marginLeft: "30px" }}><b>Bsc. (Hons) Computer Science</b></p>
								<p style={{ marginLeft: "30px", marginTop: "-18px", fontSize: "13px" }} >- ( 2021 A.D - 2024 A.D )</p>
								<p className="bg-danger text-white px-2" style={{ width: "fit-content", fontSize: "11px", marginTop: "-12px", marginLeft: "38px", borderRadius: "10px" }}> Ongoing ..</p>
							</div>
						</div>
						<div className="academic">
							<div className="ml-2 w-100">
								<h6 className="animate__animated animate__slideInLeft">Communication</h6>
								<h1 className="animate__animated animate__slideInLeft">80%</h1>
							</div>
							<div className="ml-2 w-100">
								<h6 className="animate__animated animate__slideInRight">UI Designing</h6>
								<h1 className="animate__animated animate__slideInRight">90%</h1>
							</div>
						</div>

						<div className="academic">
							<div className="ml-2 w-100">
								<h6 className="animate__animated animate__slideInLeft">Programming Skills</h6>
								<h1 className="animate__animated animate__slideInLeft">95%</h1>
							</div>
							<div className="ml-2 w-100">
								<h6 className="animate__animated animate__slideInRight">Team work</h6>
								<h1 className="animate__animated animate__slideInRight">100%</h1>
							</div>
						</div>
						<button className="btn mt-1 px-4 aboutUs_btn animate__animated animate__zoomIn" onClick={() => window.location.assign("https://www.dropbox.com/s/vm9flqy8hin1xt8/Final_CV.pdf?dl=1")}><GetAppIcon id="viewIcon" />DOWNLOAD CV</button>
					</div>
				</div>
			</div>
		</>
	)
}

const Coupon = () => {
	return (
		<>
			<div className="col-12 text-white">
				<div className="d-flex">
					<div className="text-center p-4 me-3 bg-danger animate__animated animate__fadeInUp">
						<ComputerIcon id="icon" />
						<h6 className="mt-2">Web Designing.. &nbsp;</h6>
					</div>
					<div className="text-center p-4 me-3 bg-danger animate__animated animate__fadeInUp">
						<Web id="icon" />
						<h6 className="mt-2">Frontend Develop..</h6>
					</div>
				</div>
				<div className="d-flex mt-2">
					<div className="text-center p-4 me-3 bg-danger animate__animated animate__fadeInUp">
						<Dns id="icon" />
						<h6 className="mt-2">Backend Devlop..</h6>
					</div>
					<div className="text-center p-4 me-3 bg-danger animate__animated animate__fadeInUp">
						<FireplaceIcon id="icon" />
						<h6 className="mt-2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DevOps&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
					</div>
				</div>
			</div>
		</>
	)
}
const Services = () => {
	return (
		<>
			<div className="col-10 py-5 mx-auto">
				<div className="row">
					<div className="col-sm-5 pt-5">
						<h2 id="services_title" className="">Services</h2>
						<p id="services_text" className="">Fullstack Web Development</p>
						<h1 id="services_quotes" className="">Design, Develop, Deploy and Maintain Web services</h1><br />
						<Coupon />
					</div>
					<div className="col-sm-6">
						<img id="services_img" className="" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" loading="lazy" />
					</div>
				</div>
			</div>

		</>
	)

}
const SideIcon = () => {
	const redirectFb = () => {
		window.location.assign("https://www.facebook.com/parbhat.thangwallama/")
	}
	const redirectInsta = () => {
		window.location.assign("https://www.instagram.com/prabhattmg/")
	}
	const redirectGithub = () => {
		window.location.assign("https://github.com/lamaparbat")
	}
	const redirectLinked = () => {
		window.location.assign("https://www.linkedin.com/in/parbat-lama-0bb4101b8/")
	}
	const redirectWhatsapp = () => {
		window.location.assign("https://www.facebook.com/parbhat.thangwallama/")
	}
	return (
		<>
			<div className="fbIcon mb-2 animate__animated animate__slideInLeft animate__delay-0s" style={{ width: "fit-content", padding: "10px", paddingRight: "15px", marginLeft: "-12px", borderTopRightRadius: "10px", backgroundColor: "DarkBlue" }} onClick={redirectFb}>
				<FacebookIcon style={{ color: "white", fontSize: "25px" }} />
			</div>
			<div className="fbIcon mb-2 animate__animated animate__slideInLeft animate__delay-1s" style={{ width: "fit-content", padding: "9px", paddingRight: "15px", marginLeft: "-12px", borderTopRightRadius: "10px", backgroundColor: "OrangeRed" }} onClick={redirectGithub}>
				<GitHubIcon style={{ color: "white", fontSize: "25px" }} />
			</div>
			<div className="fbIcon mb-2 animate__animated animate__slideInLeft animate__delay-2s" style={{ width: "fit-content", padding: "9px", paddingRight: "15px", marginLeft: "-12px", borderTopRightRadius: "10px", backgroundColor: "green" }} onClick={redirectLinked}>
				<LinkedInIcon style={{ color: "white", fontSize: "25px" }} />
			</div>
			<div className="fbIcon mb-2 animate__animated animate__slideInLeft animate__delay-3s" style={{ width: "fit-content", padding: "9px", paddingRight: "15px", marginLeft: "-12px", borderTopRightRadius: "10px", backgroundColor: "#3f729b" }} onClick={redirectInsta}>
				<InstagramIcon style={{ color: "white", fontSize: "25px" }} />
			</div>
		</>
	)
}
const SubscriberCount = ({ count }) => {
	const [timer, setTime] = useState("00:00:00")
	setInterval(() => {
		let time = new Date().toLocaleTimeString()
		setTime(time)
	}, 1000)


	return (
		<>
			<div className="col-lg-1"></div>
			<div className="col-lg-10 text-dark text-center p-5 bg-light SubscriberCountContainer">
				<h5 className="text">LIVE SUBSCRIBER COUNT <FiberManualRecordIcon className="dot text-danger" /></h5>
				<h1 className="subscriberCount">{count}</h1>
				<h2 className="count">&nbsp;{timer}</h2>
			</div>
			<div className="col-lg-1"></div>
		</>
	)
}

const Certification = () => {
	//show certificate
	const showCertificate = (sub_title) => {
		sub_title === "HackerRank" ? window.location.assign("https://www.hackerrank.com/certificates/f3fe1e1a2666?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate") : window.location.assign("https://www.freecodecamp.org/certification/fcc34061bfc-06ea-4e3c-8884-cf4298f686f4/front-end-development-libraries")
	}

	const CerficateCard = ({ src, title, sub_title, credential_id }) => {
		return (
			<div className='cerficateCard d-flex p-2 mb-2 py-3 rounded-1'>
				<img height="50px" width="50px" src={src} alt='cerfication img' />
				<div className='textContent mx-2'>
					<h5>{title}</h5>
					<span id='subTitle'>{sub_title}</span><br />
					<span id='credentialText'>Issued May 2022. No Expiration Date</span><br />
					<button className='btn btn- rounded-pill py-0 border-1 border-secondary viewCertificateBtn' onClick={() => showCertificate(sub_title)}>View certificate</button>
				</div>
			</div>
		)
	}

	const InterestCard = ({ src, title }) => {
		return (
			<div className='interest_card me-4 mb-2 d-flex flex-column align-items-center p-0'>
				<img className='rounder-pill' height="100px" width="100px" src={src} />
				<p className='p-0 m-0 mb-2'>{title}</p>
			</div>
		)
	}

	return (
		<div className='certification col-10 mx-auto mt-5' id='about'>
			<h4 className='mx-4 mb-2'>Cerifications</h4>
			<div className="row">
				<div className="col-sm-6 px-1">
					<CerficateCard src={process.env.PUBLIC_URL + "/img/free.jpeg"} title="Frontend Development Libraries" sub_title={"freeCodeCamp"} credential_id={""} />
					<CerficateCard src={process.env.PUBLIC_URL + "/img/hacker.jpeg"} title="Web Application Developer Associate 10.4" sub_title={"HackerRank"} credential_id={"Credential ID F3FE1E1A2666"} />
				</div>
				<div className="col-sm-6 p-2 px-4">
					<h5>My Interests</h5>
					<div className='interest_card_cont d-flex'>
						<InterestCard src={process.env.PUBLIC_URL + "/img/coffee.jpeg"} title="Coffee & Music" />
						<InterestCard src={process.env.PUBLIC_URL + "/img/design.jpeg"} title="UI/UX Design" />
						<InterestCard src={process.env.PUBLIC_URL + "/img/research.jpeg"} title="Research" />
					</div><br />
					<div className='interest_card_cont d-flex'>
						<InterestCard src={process.env.PUBLIC_URL + "/img/football.jpeg"} title="Soccer ball" />
						<InterestCard src={process.env.PUBLIC_URL + "/img/coding.png"} title="Programming" />
						<InterestCard src={process.env.PUBLIC_URL + "/img/blockchain.jpeg"} title="Block Chain" />
					</div>
				</div>
			</div>
		</div>
	)
}

// experience row
const Experience = () => {
	return (
		<div className='experience'>
			<Certification />
		</div>
	)
}

const Homepage = () => {
	//image array
	const img_array = ["https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", "https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80", "https://images.unsplash.com/photo-1501159873713-dc65286617cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", "https://images.unsplash.com/photo-1620674156044-52b714665d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"]
	const email = useRef(null);
	const [isLoading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [modalShow, setModalShow] = useState(true);
	const [current_quotes, setCurrentQuotes] = useState({});
	const [subscriberCount, setSubscriberCount] = useState(0);
	const [timer, setTimer] = useState(false);
	const [current_src, setCurrentSrc] = useState();
	
	//auto increment quotes array index
	var index = Math.floor(Math.random() * 1643);
	var imageIndex = Math.floor(Math.random() * 5);

	// subscribe count
	useEffect(() => {		
		//fetching subscriber count
		axios.get("https://parbat-backend.herokuapp.com/subscriberCount").then(count => {
			setSubscriberCount(count.data.count)
		});
		
		//fetching quotes from 3rd party api
		axios.get('https://type.fit/api/quotes').then((response) => {
			try {
				setCurrentQuotes(response.data[index])
			} catch (error) {
				return;
			}
		});
		
		setCurrentSrc(img_array[imageIndex]);

	}, []);
	
	
	setTimeout(() => {
		setTimer(true)
	}, 4000);
	

	//pusher -> visitors subscribed listener
	var pusher = new Pusher('c8b41493bbaaefc790c7', {
		cluster: 'ap2'
	});

	var channel = pusher.subscribe('visitors');
	channel.bind('inserted', function (data) {
		axios.get("https://parbat-backend.herokuapp.com/subscriberCount").then(count => {
			setSubscriberCount(count.data.count)
		})
	});


	//subcribe btn clicked
	const subscribeSuccessToast = () => toast.success("Thank you !!")
	const errorSubscribeToast = () => toast.error("Email is invalid !!")
	const alreadySubscriberExist = () => toast.error("Email already exist. Thank you !!")
	const emptyToast = () => toast.error("Field is empty !!")

	const subscribeBtnClicked = () => {
		if (email.current.value) {
			if (email.current.value.search("@") > 0 && email.current.value.search("gmail") > 0 && email.current.value.search(".") >= 0 && email.current.value.search("com") > 0) {
				//sending data to server 
				axios.post("https://parbat-backend.herokuapp.com/subscribe", {
					email: email.current.value
				});
				subscribeSuccessToast()
				email.current.value = ""
			} else {
				errorSubscribeToast()
			}
		} else {
			emptyToast()
		}
	}

	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header style={{ height: "30vh", backgroundSize: "cover", backgroundImage: `url(${current_src})` }}></Modal.Header>
				<Modal.Body>
					<p><FormatQuoteIcon id="quotes1" />{current_quotes.text}	<FormatQuoteIcon id="quotes2" /></p>
					<span>- {current_quotes.author}</span>
					<div className="pt-4 pb-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<input type="email" ref={email} placeholder="Enter your email address" className="form-control rounded-0 shadow-none" />
						<button className="btn btn-danger rounded-0 mx-2 px-4 subscribeBtn" onClick={subscribeBtnClicked}>Subscribe</button>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
	return (
		<>
			{
				isLoading ? <LoaderSpinner /> :
					<>
						{
							timer ? <MyVerticallyCenteredModal
								show={modalShow}
								onHide={() => setModalShow(false)}
							/> : null
						}
						<div className="container-fluid pt-5">
							<div className="row banner bg-light">
								<Banner />
							</div>
							<div className="row features text-dark"></div>
							<div className="row aboutUs mt-3" id="aboutUs">
								<AboutMe />
								<Experience />
							</div>

							<div className="row services mt-3" id="services">
								<Services />
							</div>

							<div className="row mt-4 py-4 programming_card_container" id="programming_card_container">
								<ProgrammingTools />
							</div>

							<div className="row mt-4 mb-5 py-4 subscriber_main_container">
								<SubscriberCount count={subscriberCount} />
							</div>

						</div>
					</>
			}
		</>
	)
}
export default Homepage;