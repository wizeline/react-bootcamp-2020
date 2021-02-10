import {
  selectAuthState,
  selectAuthenticatedUser,
  selectIsUserAuthenticated,
} from './authSelectors';

describe('Auth Selector', () => {

  describe('selectAuthState', () => {
    it('should return login.authenticated as boolean', () => {
      const auth = {
          auth: {
            authenticated: false,
          }
      }
      const mockState = {
        auth
      };
      const selected = selectAuthState(mockState);
      expect(selected).toEqual(auth)
    });
  });

  describe('selectAuthenticatedUser', () => {
    it('should return login.authenticated as boolean', () => {
      const auth = {
        auth: {
          authenticated: false,
        }
      }
      const mockState = {
        auth
      };
      const selected = selectAuthenticatedUser(mockState);
      expect(selected).toEqual(auth)
    });
  });

  describe('selectIsUserAuthenticated', () => {
    it('should return login.authenticated as boolean', () => {
      const auth = {
        auth: {
          id: 1
        }
      }
      const mockState = {
        auth
      };
      const selected = selectIsUserAuthenticated(mockState);
      expect(selected).toEqual(false)
    });
  });
});