export class API {
  static asyncValidate = ({email}) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (email === 'fail@mail.com') {
          reject({
            status: 'error',
            errors: {
              email: 'This email is banned'
            }
          });
        } else {
          resolve({
            status: 'success'
          })
        }
      }, 1000);
    });
  }
}