
let defaultCity = '杭州';

try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (error) {
  console.log(error.mssage);
};

export default {
  city: defaultCity
};
