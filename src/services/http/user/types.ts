export interface User {
  id: number;
  name: {
    title: string;
    first: string;
    last: string;
  };
  username: string;
  email: string;
  gender: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  cell: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
