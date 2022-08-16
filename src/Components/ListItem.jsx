function ListItem (props){
  const data = props.data

  return(
    <div className = "item">
      <div className = "item-image">
        <a href = {data.url}>
          <img src = {data.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{
          (data.title.length>=50)
            ?
            data.title.slice(0,50)+'...'
            :
            data.title
          }
        </p>
        <p className="item-price">{data.price + (
            (data.currency_code === 'EUR'&&'€') || 
            (data.currency_code === 'USD'&&'$') || 
            (data.currency_code)
          )}</p>
        <p className={"item-quantity "+(
            (data.quantity <= 10 && "level-low") ||
            (data.quantity <= 20 && "level-medium") ||
            (data.quantity >= 20 && "level-high")
          )}>{data.quantity}</p>
      </div>
    </div>
  )
}

export default ListItem