import React, { useState, useContext, Fragment } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PomodoroContext from '../../../../context/pomodoroTimer/pomodoroContext';
import moment from 'moment';
import {
	UPDATE_POMODORO_TIME,
	UPDATE_BREAK_TIME,
	UPDATE_LONG_BREAK_TIME,
} from '../../../../context/types';

// Component that renders a todo timer and its settings
const PomodoroTimer = () => {
	const pomodoroContext = useContext(PomodoroContext);
	const {
		pomodoroTime,
		breakTime,
		longBreakTime,
		updatePomodoroTime,
		updateBreakTime,
		updateLongBreakTime,
	} = pomodoroContext;

	// Initial state of the pomodoro timer settings
	const [updateTime, setUpdateTime] = useState(pomodoroTime);
	const [updateBreak, setUpdateBreak] = useState(breakTime);
	const [updateLong, setUpdateLong] = useState(longBreakTime);

	// Default pomodoro timer settings
	const [defaultTime, setDefaultTime] = useState(25);
	const [defaultBreak, setDefaultBreak] = useState(5);
	const [defaultLong, setDefaultLong] = useState(30);

	// The input states for the input of values to be stored
	const [sessionNo, setSessionNo] = useState(0);
	const [isBreak, setIsBreak] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(updateTime * 60);

	// State of whether the timer is counting down or not
	const [isPlaying, setIsPlaying] = useState(false);

	// Change of key to re-render timer
	const [newKey, setNewKey] = useState(true);

	// Change whether the settings menu is open or not
	const [isActive, setIsActive] = useState(false);

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
		setTimeRemaining(updateTime * 60);
		setIsPlaying(false);
		changeKey();
	};

	// Switches between break and study session once a timer counts down
	const onComplete = () => {
		if (isBreak) {
			setIsBreak(false);
			setTimeRemaining(updateTime * 60);
			incSessionNo();
		} else {
			setIsBreak(true);
			if (sessionNo === 3) {
				setTimeRemaining(updateLong * 60);
			} else {
				setTimeRemaining(updateBreak * 60);
			}
		}
		changeKey();
		return [true, 10];
	};

	// Handles submission of new settings of the Pomodoro to context
	const handleSubmit = () => {
		updatePomodoroTime({ type: UPDATE_POMODORO_TIME, payload: updateTime });
		updateBreakTime({ type: UPDATE_BREAK_TIME, payload: updateBreak });
		updateLongBreakTime({ type: UPDATE_LONG_BREAK_TIME, payload: updateLong });
		resetTimer();
	};

	// Resets the pomodoro timer to default settings in context
	const handleReset = () => {
		updatePomodoroTime({ type: UPDATE_POMODORO_TIME, payload: defaultTime });
		updateBreakTime({ type: UPDATE_BREAK_TIME, payload: defaultBreak });
		updateLongBreakTime({ type: UPDATE_LONG_BREAK_TIME, payload: defaultLong });
		setUpdateTime(defaultTime);
		setUpdateBreak(defaultBreak);
		setUpdateLong(defaultLong);
		changeKey();
	};

	// Renders the countdown timer tex in the middle of the timer
	const renderTime = (value) => {
		if (isBreak && sessionNo == 3) {
			return (
				<div className='messageWrapper'>
					<div className='message'>Long Break</div>
					<div className='value'>
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
					<div className='value'>
						{moment(secondsToMilliseconds(value)).format('mm:ss')}
					</div>
					<div className='message'>Remaining</div>
				</div>
			);
		}
		return (
			<div className='messageWrapper'>
				<div className='message'>Study!</div>
				<div className='value'>
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
								id='updateTime'
								min={1}
								max={59}
								value={updateTime}
								onChange={(e) => setUpdateTime(parseInt(e.target.value))}
								className='col w-100 p-0 pl-2 py-2'
							/>
						</div>
						<div className='form-group text-white'>
							<label htmlFor='updateBreak'>Short Break Time</label>
							<input
								type='number'
								id='updateBreak'
								aria-label='Short Break Time'
								min={1}
								max={59}
								value={updateBreak}
								onChange={(e) => setUpdateBreak(parseInt(e.target.value))}
								className='col w-100 p-0 pl-2 py-2'
							/>
						</div>
						<div className='form-group text-white'>
							<label htmlFor='updateLong'>Long Break Time</label>
							<input
								type='number'
								id='updateLong'
								aria-label='Long Break Time'
								min={1}
								max={59}
								value={updateLong}
								onChange={(e) => setUpdateLong(parseInt(e.target.value))}
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
