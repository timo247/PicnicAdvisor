const messages = {
  // ==========================================================================
  //   API
  // ==========================================================================

  //  Route users
  // ==========================================================================
  SUCCES_USER_RETRIEVAL: { status: 200, msg: 'User succesfully retrieved.' },
  SUCCES_USERS_RETRIEVAL: { status: 200, msg: 'Users succesfully retrieved.' },
  SUCCES_USER_CREATION: { status: 201, msg: 'Users succesfully created.' },
  SUCCES_USER_MODIFICATION: { status: 200, msg: 'User succesfully modified.' },
  SUCCES_USER_DELETION: { status: 200, msg: 'User succesfully deleted.' },
  SUCCES_USERS_DELETION: { status: 200, msg: 'Users succesfully deleted.' },
  ERROR_USER_EXISTANCE: { status: 404, msg: 'User not found.' },
  //  Route auth
  // ==========================================================================
  ERROR_AUTH_LOGIN: { status: 401, msg: 'Username and/or password are/is invalid.' },
  ERROR_AUTH_PERMISSION_GRANTATION: { status: 401, msg: 'Permission not granted.' },
  ERROR_AUTH_HEADER_PRESENCE: { status: 401, msg: 'Authorization header is missing.' },
  ERROR_AUTH_BEARERTOKEN_FORMAT: { status: 401, msg: 'Authorization header is not a bearer token.' },
  //  JWT tokens
  // ==========================================================================
  ERROR_TOKEN_VALIDATION: { status: 401, msg: 'Your token is invalid or has expired.' },
  ERROR_TOKEN_CREATION: { status: 401, msg: 'Token creation failed.' },
  SUCCES_TOKEN_CREATION: { status: 201, msg: 'Token succesfully created.' },
  //  Others
  // ==========================================================================
  ERROR_OWNERRIGHT_GRANTATION: { status: 404, msg: 'You can only alter your own ressources.' },
};

export default messages;
