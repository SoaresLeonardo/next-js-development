'use client';

type PersonProps = {
  name: string;
  doc: string;
  age: number;
};

type ContactProps = {
  phone: string;
  email: string;
};

type AddressProps = {
  city: string;
  zipCode: string;
};

// type CustomerProps = PersonProps | ContactProps | AddressProps;

type DocumentProps = Pick<PersonProps, 'doc'>;
type PersonWithoutDocProps = Omit<PersonProps, 'doc'>;

function exampleFunction<T>(args: T): T {
  console.log(args);

  return args;
}

export default function TypePage() {
  // const handleSaveCustomer = (customer: CustomerProps) => {
  //   console.log(customer);
  // };

  // handleSaveCustomer({
  //   age: 15,
  //   city: 'City',
  //   doc: '123',
  //   email: 'email@example.com',
  //   name: 'Name',
  //   phone: '1234',
  //   zipCode: '123'
  // });

  exampleFunction({ number: 200 });

  function double(a: number | string) {
    if (typeof a === 'number') {
      return `Resultado = ${a * 2}`;
    }

    throw new Error(
      `Error - não foi possível calcular o dobro do parametro ${typeof a}`
    );
  }

  console.log(double(2));

  return (
    <>
      <h1 className="font-bold">Types</h1>
    </>
  );
}
