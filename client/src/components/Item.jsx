import { SlTrash, SlPencil } from "react-icons/sl"
import { BsCheckLg } from "react-icons/bs"

export default function Item({ item }) {
  return (
    <div className="item_body">
      <div className="item_text">
        <p className="item_title">{item.title}</p>
        <p className="item_desc">{item.desc}</p>
        <p className="time_stamp">{item.createdAt}</p>
      </div>
      <div className="btns">
        <div>
          <button title="Tick this item" className={`tick_btn ${item.ischecked? "ticked" : ""}`}><BsCheckLg /></button>
        </div>
        <div className="other_btns">
          <button title="Edit" className="edit_btn"><SlPencil /></button>
          <button title="Delete" className="delete_btn"><SlTrash /></button>
        </div>
      </div>
    </div>
  )
}
