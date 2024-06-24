import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

//interface is used to define shape of object
//difference between props and sate props:immuatble and input passed by the compoment whearas state is data managed by the component and is mutable and both cause DOM to re render
interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let selectedIndex = 0;

  const [selectedIndex, setSelectedIndex] = useState(-1); //It is a hook function which is inbuilt function

  //const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    );

  //const mess = items.length === 0 ? <p>No iten Found</p> : null // this can also be done directly by instead of using const
  // Also 'getMessage = () =>{items.length === 0 ? <p>No iten Found</p> : null}' can be used and calling getMessage in the curly brackets
  //react cannnot return more than one element to solve problem warp enrtie thig in div
  //coomand pallte>wrap with abbriavation>then type div to bring wveyrthing in div
  // even using empty brackets like <> will work instead of <fragment>
  //{} can be used to render anything dynamically
  return (
    <Fragment>
      <h1>{heading}</h1>
      {/*{items.length === 0 ? <p>No iten Found</p> : null}-Another way is given below*/}
      {/*Inline function is removed and just called handle below-onClick={handleClick}*/}
      {items.length === 0 && <p>No IteM Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
//in brackets (event) and onclick line and index with item is wrriten to show the elemnets when clikced in onsole
export default ListGroup;
