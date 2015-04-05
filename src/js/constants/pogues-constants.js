module.exports = {

	ActionTypes: {
		LOAD_QUESTIONNAIRE_LIST: 'LOAD_QUESTIONNAIRE_LIST',
		QUESTIONNAIRE_LIST_LOADED: 'QUESTIONNAIRE_LIST_LOADED',
		QUESTIONNAIRE_LIST_LOADING_FAILED: 'QUESTIONNAIRE_LIST_LOADING_FAILED',
		SELECT_EXISTING_QUESTIONNAIRE: 'SELECT_EXISTING_QUESTIONNAIRE',
		LOAD_QUESTIONNAIRE: 'LOAD_QUESTIONNAIRE',
		QUESTIONNAIRE_LOADED: 'QUESTIONNAIRE_LOADED',
		QUESTIONNAIRE_LOADING_FAILED: 'QUESTIONNAIRE_LOADING_FAILED',
		CREATE_NEW_QUESTIONNAIRE: 'CREATE_NEW_QUESTIONNAIRE',
		ADD_SEQUENCE: 'ADD_SEQUENCE',
		DELETE_SEQUENCE: 'DELETE_SEQUENCE',
		ADD_QUESTION: 'ADD_QUESTION',
		DELETE_QUESTION: 'DELETE_QUESTION',
		EDIT_COMPONENT : 'EDIT_COMPONENT'
	},
	PayloadSources: {
		SERVER_SOURCE: 'SERVER_SOURCE',
		VIEW_SOURCE: 'VIEW_SOURCE'
	},
	StoreEvents: {
		CHANGE_EVENT: 'CHANGE_EVENT'
	},
	General: {
		ENTER_KEY_CODE: 13
	}
};
