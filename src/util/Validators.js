import { strict as assert } from 'assert';

const USERNAME_LIMIT = 16;
const PASSWORD_LIMIT = 24;
const STRING_LIMIT = 20;

/**
 * Class with validation methods used to validate data.
 */
class Validators{
  static test(str){
    return str;
  }

 /**
  * checks if the value is a string
  * @param {any} str The value to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static isString(str, varName){
    assert.equal(typeof str == 'string', true, varName + " must be a string.");
  }

  /**
   * Checks if the value is a number (can be either a typeof string or number)
   * @param {any} value The value to check
   * @param {string} varName The name of the variable that holds the value
   * @throws {AssertionError} If validation fails.
   */
  static isNumber(value, varName) {
    assert.equal(!isNaN(parseInt(value)) && parseInt(value).toString().length == value.toString().length, true, `${varName} needs to be a number.`);
  }


  static numberIsGreaterThanZero(value, varName) {
    this.isNumber(value, varName);
    assert.equal(value > 0, true, varName + " needs to be greater than zero");
  }

 /**
  * checks if the value is null or undefined
  * @param {any} obj The value to check
  * @param {string} varName The name of the variable
  * @throws {AssertionError} If validation fails.
  */
  static isNotEmpty(obj, varName){
    assert.equal(
      !(obj === null ||
      obj === undefined ||
      (obj.constructor === Array && !obj[0]) ||
      (obj.constructor === Object && Object.keys(obj).length === 0))
      , true, varName + " must not be null, undefined or an empty object/list")

    // assert.equal(obj !== null, true, varName + " must not be null")
    // assert.equal(obj !== undefined, true, varName + " must not be undefined")
    // assert.equal(!Array.isArray(obj) && !obj[0], true, varName + " must not be null an empty object")
    //assert.equal(typeof(obj) == "object" && Object.keys(obj).length > 0, true, varName + " must not be an empty list")
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

  /**
   * Checks if the input is a valid email
   * @param {email} emailInput The input to check
   * @throws {AssertionError} If validation fails.
   */
  static isEmailValid(emailInput) {
    let emailForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+([a-zA-Z0-9-]+)+$/;
    assert(emailForm.test(emailInput));
  }

  /**
   * Checks if date has past today's date
   * @param  {string} date The date the check
   * @param  {string} varName The name of the variable
   * @throws {AssertionError} If validation fails.
   */
  static isNotPastDate(date, varName){
    //gets 00:00:00 of current day
    let now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    let d = new Date(date);
    assert.equal(d.getTime() > now.getTime() && (date !== null), true, "(" + varName + ") Date has already passed.");
  }

  /**
   * Checks if a second date is before a first date.
   * @param  {string} firstDate The first date
   * @param  {string} secondDate The second date
   * @param  {string} varName1 The name of the variable
   * @param  {string} varName2 The name of the variable
   * @throws {AssertionError} If validation fails.
   */
  static dateIsNotPastDate(firstDate, secondDate, varName1, varName2){
    //gets 00:00:00 of current day
    let f = new Date(firstDate);
    let s = new Date(secondDate);
    assert.equal(f.getTime() <= s.getTime() && (firstDate !== null || secondDate !== null), true, "Second date (" + varName2 + ") cannot be before first date (" + varName1 + ")");
  }
}

export default Validators;
