import Validators from "../util/Validators";

/**
 * Tests isString
 */
function isStringTest(str, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.isString(str, "str")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.isString(str, "str")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('isString with text-string should have succeeded', () => {
  isStringTest("string with text", true);
})
it('isString with number-string should have succeeded', () => {
  isStringTest("123", true);
})
it('isString with number should have failed', () => {
  isStringTest(123, false);
})

/**
 * Tests isNumber
 */
 function isNumberTest(num, shouldSucceed){
   if(shouldSucceed === true){
     expect(Validators.isNumber(num, "num")).toBe(undefined);
   }
   else{
     try{
       expect(Validators.isNumber(num, "num")).toThrow();
     }
     catch(err){
       expect(err.name).toContain("AssertionError");
       expect(err.actual).toBe(false);
       expect(err.expected).toBe(true);
     }
   }
 }

it('isNumber with number-string should have succeeded', () => {
 isNumberTest("123", true);
})
it('isNumber with number should have succeeded', () => {
 isNumberTest(123, true);
})
it('isNumber with float number should have failed', () => {
 isNumberTest(123.45, false);
})
it('isNumber with text-string should have failed', () => {
 isNumberTest("string with text", false);
})

/**
* Tests numberIsGreaterThanZero
*/
function numberIsGreaterThanZeroTest(num, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.numberIsGreaterThanZero(num, "num")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.numberIsGreaterThanZero(num, "num")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('numberIsGreaterThanZero with number-string greater than zero should have succeeded', () => {
  numberIsGreaterThanZeroTest("123", true);
})
it('numberIsGreaterThanZero with number greater than zero should have succeeded', () => {
  numberIsGreaterThanZeroTest(123, true);
})
it('numberIsGreaterThanZero with text-string should have failed', () => {
  numberIsGreaterThanZeroTest("textString", false);
})
it('numberIsGreaterThanZero with number-string less than zero should have failed', () => {
  numberIsGreaterThanZeroTest("-10", false);
})
it('numberIsGreaterThanZero with number-string equal to zero should have failed', () => {
  numberIsGreaterThanZeroTest("0", false);
})
it('numberIsGreaterThanZero with number less than zero should have failed', () => {
  numberIsGreaterThanZeroTest(-10, false);
})
it('numberIsGreaterThanZero with number equal to zero should have failed', () => {
  numberIsGreaterThanZeroTest(0, false);
})

/**
* Tests isNotEmpty
*/
function isNotEmptyTest(obj, shouldSucceed){
 if(shouldSucceed === true){
   expect(Validators.isNotEmpty(obj, "obj")).toBe(undefined);
 }
 else{
   try{
     expect(Validators.isNotEmpty(obj, "obj")).toThrow();
   }
   catch(err){
     expect(err.name).toContain("AssertionError");
     expect(err.actual).toBe(false);
     expect(err.expected).toBe(true);
   }
 }
}
it('isNotEmpty with undefined should have failed', () => {
 isNotEmptyTest(undefined, false);
})
it('isNotEmpty with null should have failed', () => {
 isNotEmptyTest(null, false);
})
it('isNotEmpty with empty object should have failed', () => {
  isNotEmptyTest({}, false);
})
it('isNotEmpty with empty array should have failed', () => {
  isNotEmptyTest([], false);
})
it('isNotEmpty with object with value should have succeeded', () => {
 isNotEmptyTest({a:1}, true);
})
it('isNotEmpty with array with element should have succeeded', () => {
 isNotEmptyTest([1], true);
})
it('isNotEmpty with string  should have succeeded', () => {
 isNotEmptyTest("test", true);
})

/**
* Tests usernameIsValidLength
*/
function usernameIsValidLengthTest(username, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.usernameIsValidLength(username, "username")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.usernameIsValidLength(username, "username")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('usernameIsValidLength with valid length string should have succeeded', () => {
  usernameIsValidLengthTest("username", true);
})
it('usernameIsValidLength with too long length string should have failed', () => {
  usernameIsValidLengthTest("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", false);
})
it('usernameIsValidLength without length string should have failed', () => {
  usernameIsValidLengthTest("", false);
})
it('usernameIsValidLength with number should have failed', () => {
  usernameIsValidLengthTest(123456, false);
})
it('usernameIsValidLength with null have failed', () => {
  usernameIsValidLengthTest(null, false);
})

/**
* Tests passwordIsValidLength
*/
function passwordIsValidLengthTest(password, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.passwordIsValidLength(password, "password")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.passwordIsValidLength(password, "password")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('passwordIsValidLength with valid length string should have succeeded', () => {
  passwordIsValidLengthTest("password", true);
})
it('passwordIsValidLength with too long length string should have failed', () => {
  passwordIsValidLengthTest("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", false);
})
it('passwordIsValidLength without length string should have failed', () => {
  passwordIsValidLengthTest("", false);
})
it('passwordIsValidLength with number should have failed', () => {
  passwordIsValidLengthTest(123456, false);
})
it('passwordIsValidLength with null should have failed', () => {
  passwordIsValidLengthTest(null, false);
})

/**
* Tests stringIsValidLength
*/
function stringIsValidLengthTest(str, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.stringIsValidLength(str, "str")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.stringIsValidLength(str, "str")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('stringIsValidLength with valid length string should have succeeded', () => {
  stringIsValidLengthTest("password", true);
})
it('stringIsValidLength with too long length string should have failed', () => {
  stringIsValidLengthTest("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", false);
})
it('stringIsValidLength without length string should have failed', () => {
  stringIsValidLengthTest("", false);
})
it('stringIsValidLength with number should have failed', () => {
  stringIsValidLengthTest(123456, false);
})
it('stringIsValidLength with null should have failed', () => {
  stringIsValidLengthTest(null, false);
})

/**
* Tests isEmailValid
*/
function isEmailValidTest(email, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.isEmailValid(email, "email")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.isEmailValid(email, "email")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('isEmailValid with valid email should have succeeded', () => {
  isEmailValidTest("abc@abc.com", true);
})
it('isEmailValid with null should have failed', () => {
  isEmailValidTest(null, false);
})
it('isEmailValid without .something should have failed', () => {
  isEmailValidTest("mymail@kth.", false);
})
it('isEmailValid without dot(.) should have failed', () => {
  isEmailValidTest("mymail@kth", false);
})
it('isEmailValid without at(@) should have failed', () => {
  isEmailValidTest("mymail.com", false);
})
it('isEmailValid without text inbetween at(@) and dot(.) null should have failed', () => {
  isEmailValidTest("mymail@.com", false);
})

/**
* Tests isNotPastDate
*/
function isNotPastDateTest(date, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.isNotPastDate(date, "date")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.isNotPastDate(date, "date")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('isNotPastDate later date should have succeeded', () => {
  isNotPastDateTest("2026-03-01", true);
})
it('isNotPastDate too old date should have failed', () => {
  isNotPastDateTest("2000-03-01", false);
})
it('isNotPastDate with null date should have failed', () => {
  isNotPastDateTest(null, false);
})

/**
* Tests dateIsNotPastDate
*/
function dateIsNotPastDateTest(firstDate, secondDate, shouldSucceed){
  if(shouldSucceed === true){
    expect(Validators.dateIsNotPastDate(firstDate, secondDate, "firstDate", "secondDate")).toBe(undefined);
  }
  else{
    try{
      expect(Validators.dateIsNotPastDate(firstDate, secondDate, "firstDate", "secondDate")).toThrow();
    }
    catch(err){
      expect(err.name).toContain("AssertionError");
      expect(err.actual).toBe(false);
      expect(err.expected).toBe(true);
    }
  }
}
it('dateIsNotPastDate first date before second date should have succeeded', () => {
  dateIsNotPastDateTest("2021-03-01", "2021-03-02", true);
})
it('dateIsNotPastDate ssame date should have succeeded', () => {
  dateIsNotPastDateTest("2021-03-01", "2021-03-01", true);
})
it('dateIsNotPastDate second date before first date should have failed', () => {
  dateIsNotPastDateTest("2021-03-01", "2021-02-01", false);
})
it('dateIsNotPastDate with null dates should have failed', () => {
  dateIsNotPastDateTest(null, null, false);
})
