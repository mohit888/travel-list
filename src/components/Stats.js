import React from "react";

export default function Stats ({itemList}) {
    const itemQuantity = itemList.length;
    const packedItems = itemList.filter((item)=>item.packed).length;
    const percetange = Math.round((packedItems/itemQuantity)*100)
    return (
      <footer className='stats'>
        {itemQuantity !== 0 && <em>
          {(percetange === 100) ? `you got everything! "ready to go" `:
             `🧳 you have ${itemQuantity} item in your list and you already ${percetange} precent of the total`
  }
        </em>}
        {
          <em>
            Start adding some item in your bucket list 🧳
          </em>
        }
      </footer>
    )
  }