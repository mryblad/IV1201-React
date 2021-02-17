import { strict as assert } from 'assert';

const USERNAME_LIMIT = 16;
const PASSWORD_LIMIT = 24;
const STRING_LIMIT = 20;

/**
 * Class with validation methods used to validate data.
 */
class Validators{
 /**
  * checks if the value is a string
  * @param {any} str The value to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static isString(str, varName){
    assert.equal(typeof str, 'string', varName + " must be a string.");
  }

 /**
  * checks if the value is null or undefined
  * @param {any} obj The value to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static isEmpty(obj, varName){
    assert.equal(obj === null || obj === undefined, false, varName + " must not be null or undefined.")
  }

 /**
  * Checks if the length of the incoming string is inside the valid length of a username
  * @param {any} str The username to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static usernameIsValidLength(str, varName){
    this.isString(str, varName);
    assert.equal(str.length > 0, true, varName + " must be longer than 0 characters.");
    assert.equal(str.length < USERNAME_LIMIT, true, varName + " must be shorter than " + USERNAME_LIMIT + " characters.");
  }

 /**
  * Checks if the length of the incoming string is inside the valid length of a password
  * @param {any} str The password to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static passwordIsValidLength(str, varName){
    this.isString(str, varName);
    assert.equal(str.length > 0, true, varName + " must be longer than 0 characters.");
    assert.equal(str.length < PASSWORD_LIMIT, true, varName + " must be shorter than " + PASSWORD_LIMIT + " characters.");
  }

 /**
  * Checks if the length of the incoming string is inside the valid length of a name or surname
  * @param {any} str The name to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static stringIsValidLength(str, varName) {
    this.isString(str, varName);
    assert.equal(str.length > 0, true, varName + " must be longer than 0 characters.");
    assert.equal(str.length < STRING_LIMIT, true, varName + " must be shorter than " + STRING_LIMIT + " characters.");
  }
}

export default Validators;
