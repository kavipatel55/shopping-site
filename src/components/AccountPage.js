import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

const AccountPage = () => {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setSaveMessage('Account details have been successfully saved.');
    setTimeout(() => setSaveMessage(''), 3000); 
  };

  return (
    <div className="account-form">
      <h2>Account Details</h2>
      {saveMessage && <Alert className="save-message" color="success">{saveMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Shipping Address</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">Save</Button>
      </Form>
    </div>
  );
};

export default AccountPage;
