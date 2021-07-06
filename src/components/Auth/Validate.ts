type ValidationResult = {
  result: boolean;
  validationError: string;
};
export default class Validate {
  static Profile(data: any): ValidationResult {
    //if (data.aboutMeShort == null || data.aboutMeShort == "")
    //    return { result: false, validationError: "Profile must have - short about me" }
    if (data.aboutMeLong == null || data.aboutMeLong == '')
      return {
        result: false,
        validationError: 'Profile must have - long about me',
      };
    if (data.given_name == null || data.given_name == '')
      return {
        result: false,
        validationError: 'Profile must have - given name',
      };
    if (data.family_name == null || data.family_name == '')
      return {
        result: false,
        validationError: 'Profile must have - family name',
      };

    if (data.interests == null)
      return {
        result: false,
        validationError: 'Profile must have - interests',
      };
    if (data.currentRole == null || data.currentRole == '')
      return {
        result: false,
        validationError: 'Profile must have - current role',
      };
    if (data.currentScope == null || data.currentScope == '')
      return {
        result: false,
        validationError: 'Profile must have - current scope',
      };

    if (data.location == null)
      return {
        result: false,
        validationError: 'Profile must have - public location',
      };

    return { result: true, validationError: '' };
  }
}
