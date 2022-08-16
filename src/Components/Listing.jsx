import ListItem from "./ListItem";

function Listing(props) {
  const data = props.data

  return (
    <div className="item-list">
      {data.map((elementData) => (elementData.state === 'active') && <ListItem key = {elementData.listing_id} data = {elementData}/>)}
    </div>
  );
}

export default Listing;
