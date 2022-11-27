import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewMenuItem = ({createItem, name, description, price, image, handleInputChange}) => {

  return (
    <Form onSubmit={createItem} method="POST">
      <Form.Group className="mb-3" controlId="itemText" >
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name of Item" value={name} name="name" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description" >
        <Form.Label>Item Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={description} name="description" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price" >
        <Form.Label>Item Price</Form.Label>
        <Form.Control type="number" placeholder="Price" value={price} name="price" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="image" >
        <Form.Label>Item Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" value={image} name="image" onChange={handleInputChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewMenuItem