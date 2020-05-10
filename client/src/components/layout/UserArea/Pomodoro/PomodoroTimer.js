import React, { useState, useContext, Fragment, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PomodoroContext from '../../../../context/pomodoroTimer/pomodoroContext';
import moment from 'moment';
import {
	GET_POMODORO_SETTINGS,
	ADD_POMODORO_SETTINGS,
	UPDATE_POMODORO_SETTINGS,
	POMODORO_ERROR,
} from '../../../../context/types';

// Component that renders a todo timer and its settings
const PomodoroTimer = () => {
	const pomodoroContext = useContext(PomodoroContext);
	const { pomodoroSettings, updatePomodoroSettings } = pomodoroContext;

	// Initial state of the pomodoro timer settings
	const [currentSettings, setCurrentSettings] = useState(pomodoroSettings);
	const { pomodoroTime, breakTime, longBreakTime } = currentSettings;

	// Default pomodoro timer settings
	const [defaultSettings, setDefaultSettings] = useState({
		pomodoroTime: 25,
		breakTime: 5,
		longBreakTime: 30,
	});

	// The input states for the input of values to be stored
	const [sessionNo, setSessionNo] = useState(0);
	const [isBreak, setIsBreak] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(pomodoroTime * 60);

	// State of whether the timer is counting down or not
	const [isPlaying, setIsPlaying] = useState(false);

	// Change of key to re-render timer
	const [newKey, setNewKey] = useState(true);

	// Change whether the settings menu is open or not
	const [isActive, setIsActive] = useState(false);

	console.log(pomodoroSettings);
	// Counts what study session the timer is on
	const incSessionNo = () => {
		const output = (sessionNo + 1) % 4;
		setSessionNo(output);
	};

	// Seconds to milliseconds converter
	const secondsToMilliseconds = (time) => {
		return time * 1000;
	};

	// Changes the key of the timer so it re-renders
	const changeKey = () => {
		setNewKey(!newKey);
	};

	// Resets timer to its initial settings
	const resetTimer = () => {
		setSessionNo(0);
		setIsBreak(false);
		setTimeRemaining(pomodoroTime * 60);
		setIsPlaying(false);
		changeKey();
	};

	// Switches between break and study session once a timer counts down
	const onComplete = () => {
		if (isBreak) {
			setIsBreak(false);
			setTimeRemaining(pomodoroTime * 60);
			incSessionNo();
		} else {
			setIsBreak(true);
			if (sessionNo === 3) {
				setTimeRemaining(breakTime * 60);
			} else {
				setTimeRemaining(longBreakTime * 60);
			}
		}
		changeKey();
		return [true, 10];
	};

	const onChange = (e) => {
		setCurrentSettings({
			...pomodoroSettings,
			[e.target.id]: parseInt(e.target.value),
		});
	};

	// Handles submission of new settings of the Pomodoro to context
	const handleSubmit = () => {
		updatePomodoroSettings({
			type: UPDATE_POMODORO_SETTINGS,
			payload: currentSettings,
		});
		resetTimer();
	};

	// Resets the pomodoro timer to default settings in context
	const handleReset = () => {
		setCurrentSettings({ ...defaultSettings, ...pomodoroSettings });
		handleSubmit();
	};

	// Renders the countdown timer tex in the middle of the timer
	const renderTime = (value) => {
		if (isBreak && sessionNo == 3) {
			return (
				<div className='messageWrapper'>
					<div className='message'>Long Break</div>
					<div key={newKey} className='value'>
						{moment(secondsToMilliseconds(value)).format('mm:ss')}
					</div>
					<div className='message'>Remaining</div>
				</div>
			);
		}
		if (isBreak) {
			return (
				<div className='messageWrapper'>
					<div className='message'>Short Break</div>
					<div key={newKey} className='value'>
						{moment(secondsToMilliseconds(value)).format('mm:ss')}
					</div>
					<div className='message'>Remaining</div>
				</div>
			);
		}
		return (
			<div className='messageWrapper'>
				<div className='message'>Study!</div>
				<div key={newKey} className='value'>
					{moment(secondsToMilliseconds(value)).format('mm:ss')}
				</div>
				<div className='message'>Remaining</div>
			</div>
		);
	};

	// Returns the display of the timer and settings pulling and filling inputs from context
	return (
		<Fragment>
			<div className='d-block m-auto'>
				<div
					className='btn btn-light btn-lg position-absolute settingsBtn'
					onClick={() => setIsActive(true)}
				>
					<i className='fas fa-cog' />
				</div>
				<div className='mb-5'>
					<CountdownCircleTimer
						isPlaying={isPlaying}
						durationSeconds={timeRemaining}
						renderTime={renderTime}
						onComplete={onComplete}
						key={newKey}
						size={350}
						strokeWidth={30}
						strokeLinecap='butt'
						colors={[['#007bff']]}
					/>
				</div>
				<div
					className='btn btn-primary btn-block timerBtn'
					onClick={() => setIsPlaying(!isPlaying)}
				>
					Start / Pause Timer
				</div>
				<div
					className='btn btn-secondary btn-block timerBtn'
					onClick={() => resetTimer()}
				>
					Reset Timer
				</div>
			</div>
			<div
				className={`settingsSidebar bg-dark position-absolute top-right ${
					isActive ? 'active' : ''
				}`}
			>
				<div
					className={`flex-column w-100 px-5 my-3 ${
						isActive ? 'd-block' : 'd-none'
					}`}
				>
					<h2 className='text-center mb-4 text-white'>Settings</h2>
					<div className='form'>
						<div className='form-group text-white'>
							<label htmlFor='updateTime'>Study Time</label>
							<input
								type='number'
								id='pomodoroTime'
								min={1}
								max={59}
								value={pomodoroTime}
								onChange={onChange}
								className='col w-100 p-0 pl-2 py-2'
							/>
						</div>
						<div className='form-group text-white'>
							<label htmlFor='updateBreak'>Short Break Time</label>
							<input
								type='number'
								id='breakTime'
								aria-label='Short Break Time'
								min={1}
								max={59}
								value={breakTime}
								onChange={onChange}
								className='col w-100 p-0 pl-2 py-2'
							/>
						</div>
						<div className='form-group text-white'>
							<label htmlFor='updateLong'>Long Break Time</label>
							<input
								type='number'
								id='longBreakTime'
								aria-label='Long Break Time'
								min={1}
								max={59}
								value={longBreakTime}
								onChange={onChange}
								className='col w-100 p-0 pl-2 py-2'
							/>
						</div>
						<div className='mt-5'>
							<button
								className='btn btn-primary btn-block my-2'
								onClick={() => handleSubmit()}
							>
								Submit
							</button>
							<button
								className='btn btn-secondary my-2 btn-block'
								onClick={() => handleReset()}
							>
								Reset Default
							</button>
						</div>
					</div>
				</div>
				<div
					className={`btn text-secondary position-absolute closeBtn mx-4 my-2 ${
						isActive ? 'd-block' : 'd-none'
					}`}
					onClick={() => setIsActive(false)}
				>
					<i className='fas fa-times' />
				</div>
			</div>
		</Fragment>
	);
};

export default PomodoroTimer;
