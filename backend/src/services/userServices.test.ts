import test from 'ava';
import sinon from 'sinon';
import User from "../models/user.js"
import { deleteUserById, registerUser,getAllUsers,updateUserById, getUserDetails } from './userServices.js'

test.serial('getAllUsers should return all data', async (t) => {
  const mockData=[{ id: 1, name: 'manisha' }, { id: 2, name: 'sujata' }]
  const stub = sinon.stub(User.prototype, 'getAll').returns(Promise.resolve([{ id: 1, name: 'manisha' }, { id: 2, name: 'sujata' }]));
 
   const result = await getAllUsers();
   t.deepEqual(result, { data:mockData, message: 'Succesfully fetched all data' });
 
   stub.restore();
 });

 test.serial('registerUser returns error for already existing user', async t => {
  const data = {
    name: 'manisha',
    email: 'manisha@example.com',
    password: 'password123',
    username:"manis"
  };
  const stub = sinon.stub(User.prototype, 'findByParams');
  stub.withArgs(data).returns(Promise.resolve(data));

  const error = await t.throwsAsync(registerUser(data));
  t.is(error.message, 'User already exist');
  stub.restore();
});

test.serial('registerUser returns success for valid data', async t => {
  const data1 = {
    name: 'manisha',
    email: 'manisha@example.com',
    password: 'password123'
  };
  const stub = sinon.stub(User.prototype, 'save');
  stub.withArgs(data1).returns(Promise.resolve(data1));
  stub.withArgs(1).returns(Promise.resolve(1));
  

  const result = await registerUser(data1);
  t.deepEqual(result, { data:data1, message: 'Added User successfully' });
  stub.restore();
});

test.serial('getUserDetails should return  data', async (t) => {
  const mockData={ id: 1, name: 'manisha' }
  const stub = sinon.stub(User.prototype, 'getById');
  stub.withArgs(1).returns(Promise.resolve({ id: 1, name: 'manisha' }));
 
   const result = await getUserDetails(1);
   t.deepEqual(result, { data:{ id: 1, name: 'manisha' }, message: 'Find User sucessfully' });
 
   stub.restore();
 });

 test.serial('updateUserById should return updated data', async (t) => {
  const mockData={name: 'manisha' ,username:'manisha',email:'manisha@gmail.com',password:'manisha'}
  const stub1 = sinon.stub(User.prototype, 'findByParams');
  stub1.withArgs({id:1}).returns(Promise.resolve(mockData));

   stub1.restore();

  const stub = sinon.stub(User.prototype, 'updateById');
  stub.withArgs(1,mockData).returns(Promise.resolve({ name: 'sujata' ,username:'manisha',email:'manisha@gmail.com',password:'manisha'}));
 
   const result = await updateUserById(1,mockData);
   t.deepEqual(result, { data:{ name: 'sujata' ,username:'manisha',email:'manisha@gmail.com',password:'manisha'}, message: 'Succesfully updated user' });
 
   stub.restore();
 });

 test.serial('deleteUserById should return stubbed data', async (t) => {
  const stub = sinon.stub(User.prototype, 'removeById');
  stub.withArgs(1).returns(Promise.resolve(1))
  stub.withArgs(3).returns(3)
 //  console.log("tt",stub.calledWith(3));
 
   const result = await deleteUserById(1);
   t.deepEqual(result, { data:1, message: 'Succesfully deleted customer/user' });
 
   stub.restore();
 });
