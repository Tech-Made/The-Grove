// import React, { useState } from 'react';
// import '../../styles/contact.scss';
// import axios from 'axios';

// import {
// 	TextField,
// 	FormHelperText,
// 	Input,
// 	InputLabel,
// 	FormControl,
// 	withStyles,
// 	makeStyles,
// } from '@material-ui/core';


// const Contact = () => {
// 	const classes = useStyles();
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [phone, setPhone] = useState('');
// 	const [message, setMessage] = useState('');
// 	const [errMsg, setErrMsg] = useState(false);
// 	const [successMsg, setSuccessMsg] = useState(false);
// 	const [postStatus, setPostStatus] = useState('OK');

// 	const handleSubmit = async () => {
// 		if (name === '' || email === '' || message === '') {		
// 			setErrMsg('Please fill out all required fields.')
// 		} else {
// 			setPostStatus('LOADING');
// 			setErrMsg('');
// 			try {
// 				const _ = axios.post('https://techmade.co/contact');
// 				setPostStatus('OK')
// 				setErrMsg(false)
// 				setSuccessMsg('Thanks, someone will be in touch shortly.')			
// 			} catch(e) {
// 				setPostStatus('ERROR');
// 				setErrMsg('Uh Oh Something went wrong.')
// 				setSuccessMsg(false);		
// 			}
// 		}
// 	}

// 	return (
// 		<div>
// 			<div className='landing-layout'>
// 				{/* <img className='lightning lightning-logo' alt='lightning' src={Lightning}></img> */}
// 				{/* <img className='tm-logo' alt='techmade' src={Logo}></img> */}
// 				<p className='slogan'>Let's Talk.</p>

// 				<div className='form'>
// 					<div className='top-fields'>
// 						<FormControl className='input-margin' className={classes.margin}>
// 							<InputLabel htmlFor="my-input">Name</InputLabel>
// 							<Input
// 								onChange={(e) => setName(e.target.value)}
// 								id="my-input"
// 								aria-describedby="my-helper-text"
// 							/>
// 						</FormControl>
// 						<FormControl className={classes.margin}>
// 							<InputLabel htmlFor="my-input">Email address</InputLabel>
// 							<Input
// 								onChange={(e) => setEmail(e.target.value)}
// 								id="my-input"
// 								aria-describedby="my-helper-text"
// 							/>
// 							<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
// 						</FormControl>
// 						<FormControl className={classes.margin}>
// 							<InputLabel htmlFor="my-input">Phone Number</InputLabel>
// 							<Input
// 								onChange={(e) => setPhone(e.target.value)}
// 								id="my-input"
// 								aria-describedby="my-helper-text"
// 							/>
// 							<FormHelperText id="my-helper-text">Optional</FormHelperText>
// 						</FormControl>
// 					</div>
// 					<textarea
// 						className='message-box'
// 						type='text'
// 						value={message}
// 						onChange={(e) => setMessage(e.target.value)}
// 						placeholder='*Your message... tell us what you are interested in and any questions you have.
// 					The more detail the better. Feel free to include any links, budget numbers and timeline if you wish.'
// 					/>
// 					{/* {
// 						postStatus === 'LOADING' &&
// 						<Lottie options={{
//                             animationData: loading,
//                             loop: true,
//                             autoplay: true,
//                         }}/>
// 					} */}
// 					{
// 						successMsg &&
// 						<p>{successMsg}</p>
// 					}
// 					{
// 						errMsg &&
// 						<p>{errMsg}</p>
// 					}
// 					<button
// 						className='btn light'
// 						onClick={handleSubmit}
// 					>
// 						Submit
// 					</button>
// 					<p className='sm-text'>Email: team@techmade.co</p>
// 					<p className='sm-text'>Call: ‪(312) 248-4585</p>
// 					{/* <p className='err-msg'><Link to='/'>View our portfolio</Link> | Questions? team@techmade.co</p> */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }


// const useStyles = makeStyles(theme => ({
// 	root: {
// 	  display: 'flex',
// 	  flexWrap: 'wrap',
// 	},
// 	margin: {
// 	  marginLeft: theme.spacing(2),
// 	  marginRight: theme.spacing(2),
// 	},
//   }));


// export default Contact;
