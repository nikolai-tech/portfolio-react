import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [show, setShow] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Reset alert states before validation
    setShowAlert(false);
    setShow(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // For valid submissions
    setValidated(true);
    setShowAlert(true);
    setShow(true);  // Reset visibility state for new alerts

    // Clear form fields
    setEmail('');
    setInquiry('');
  };

  return (
    <Form
      style={{ margin: '10px auto', padding: '30px', maxWidth: '600px', width: '100%' }}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
    <h2 style={{ color: 'whitesmoke', marginBottom: '25px' }} className="text-center">
        Contact Me
    </h2>

      {/* Email Address Field */}
      <Form.Group className="mb-3" controlId="emailadd">
        <Form.Label style={{ color: 'whitesmoke' }}>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email input
          isValid={validated && emailRegex.test(email)}  // Green border if valid email and form has been submitted
          isInvalid={validated && email && !emailRegex.test(email)} // Red border if invalid email and form has been submitted
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>

      {/* Inquiry Field */}
      <Form.Group className="mb-3" controlId="inq">
        <Form.Label style={{ color: 'whitesmoke' }}>Inquiry/Concern:</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Type your inquiry/concern here..."
          required
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)} // Handle inquiry input
          isValid={validated && inquiry} // Green border if not empty and form has been submitted
          isInvalid={validated && !inquiry} // Red border if empty and form has been submitted
        />
        <Form.Control.Feedback type="invalid">
          Please provide an inquiry or concern.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Submit Button - Centered */}
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          type="submit"
          disabled={email === '' || inquiry === '' || !emailRegex.test(email)} // Disable button until email and inquiry are filled and valid
        >
          Submit
        </Button>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <Alert show={show} variant="success" className="mt-4 text-center">
          Form submitted successfully!
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success" size="sm" style={{marginTop:'15px'}}>
              Close me
            </Button>
          </div>
        </Alert>
      )}
    </Form>
  );
};

export default Contact;