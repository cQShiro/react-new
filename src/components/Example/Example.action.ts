import { SOMETHING_FAILED, SOMETHING_HAPPENED_SUCCESSFULLY } from '../../utilities/ActionTypes';
// This is a dumb action just for wire framing purpose
// All your login and processing should go in actions, the should be thick
// example: make a network request, and dispatch the received payload to redux store

const payloadIfSuccess = {message: 'Action was successful'}; // sample payload for after action occurs
const payloadIfFailed = {message: 'Action execution failed'};

export default function SampleAction(input: any) {
	return (dispatch: any) => {
		if (input === 1) {
			dispatch(somethingHappenedSuccessfully(payloadIfSuccess));
		}
		else if (input === 0) {
			dispatch(somethingFailed(payloadIfFailed));

		}
	};
}

function somethingHappenedSuccessfully(payload: any) {
	return {
		type: SOMETHING_HAPPENED_SUCCESSFULLY,
		data: payload,
	};
}

function somethingFailed(payload: any) {
	return {
		type: SOMETHING_FAILED,
		data: payload,
	};
}
