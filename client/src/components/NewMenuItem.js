
const NewMenuItem = ({createItem, name, description, price, img, handleInputChange}) => {

  return (
    <form className='newItem' onSubmit={createItem}>
        <input type="text" placeholder="Add an Item" name="name" value={name} onChange={handleInputChange}></input><br />
        <input type="textbox" placeholder="Add a Description" name="description" value={description} onChange={handleInputChange}></input><br />
        <input type="number" placeholder="Set a Price" name="price" value={price} onChange={handleInputChange}></input><br />
        <label for="img">Select image:</label><br />
        <input type="file" id="img" name="img" accept="image/*" value={img}></input><br /><br />
        <button type='submit'>Add</button>
    </form>
  );
}

export default NewMenuItem