import test from "ava";
import sinon from "sinon";
import Admin from "../models/admin.js";
import { deleteAdminById, getAllAdmins, saveAdmin } from "./adminServices.js";


//Delete  Admin:

test.serial("deleteAdminById should return stubbed data", async (t) => {
  const stub = sinon.stub(Admin.prototype, "removeById");
  stub.withArgs(1).returns(Promise.resolve(1));
  stub.withArgs(3).returns(3);
 

  const result = await deleteAdminById(1);
  t.deepEqual(result, {
    data: 1,
    message: "Succesfully deleted admin",
  });

  stub.restore();
});





//get  all admin
test.serial("getAllAdmins should return stubbed data", async (t) => {
  const mockData = [
    { id: 1, name: "manisha" },
    { id: 2, name: "sujata" },
  ];
  const stub = sinon.stub(Admin.prototype, "getAll").returns(
    Promise.resolve([
      { id: 1, name: "manisha" },
      { id: 2, name: "sujata" },
    ])
  );

  const result = await getAllAdmins();
  t.deepEqual(result, {
    data: mockData,
    message: "Succesfully fetched all data",
  });

  stub.restore();
});


//Register Admin
test.serial("saveAdmin returns success for valid data", async (t) => {
  const data1 = {
    name: "hello ",
    email: "hello@example.com",
    password: "hello ",
    username: "hello",
  };
  const stub = sinon.stub(Admin.prototype, "save");
  stub.withArgs(data1).returns(Promise.resolve(data1));
  stub.withArgs(1).returns(Promise.resolve(1));

  const result = await saveAdmin(data1);
  console.log(result);
  t.deepEqual(result, { data: data1, message: "Added Admin sucessfully" });
  stub.restore();
});





// test.serial.only("saveAdmin returns error for already existing user", async (t) => {
//   const data = {
//     name: "11mani_12",
//     email: "11mani@example.com",
//     password: "11mani",
//     username:"11mani"
//   };
//   const stub = sinon.stub(Admin.prototype, "findByParams");
//   stub.withArgs(data).returns(Promise.resolve(data));

//   const error = await t.throwsAsync(saveAdmin(data));
//   t.is(error.message, "User already exist");
//   stub.restore();
// });


