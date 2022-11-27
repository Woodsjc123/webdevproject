import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = ({registerUser, username, email, password, handleInputChange}) => {
    
  return (
      <Form onSubmit={registerUser} method="POST">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} name="username" onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} name="email" onChange={handleInputChange}/>
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={handleInputChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default RegisterForm;