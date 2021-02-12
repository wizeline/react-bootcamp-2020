export const selectAuthState = store => store.auth

export const selectAuthenticatedUser = store => selectAuthState(store) ? store.auth : null;

export const selectIsUserAuthenticated = store => selectAuthState(store) ? !!store.auth.id : false;