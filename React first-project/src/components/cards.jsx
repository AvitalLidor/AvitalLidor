import React from "react";
import { Link } from "react-router-dom";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPen,
  faPhoneSquare,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ card }) => {
  const onDelete = async () => {
    await cardService.deleteCard(card);
    toast("Card deleted plz refresh the page");
  };
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          className="p-2"
          src={card.bizImage}
          width="100"
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>
              Tel &nbsp;
              <FontAwesomeIcon icon={faPhoneSquare} />
              &nbsp;:{" "}
            </b>
            {card.bizPhone}
            <br />
            <b>
              Address&nbsp; <FontAwesomeIcon icon={faMapLocationDot} />
              &nbsp; :
            </b>
            {card.bizAddress}
          </p>

          <br />
          <div className="position-absolute bottom-0 start-0">
            <button type="button" className="btn btn-warning">
              <Link
                to={`/my-cards/edit/${card._id}`}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faPen} />
                Edit Card
              </Link>
            </button>
          </div>

          <div className="position-absolute bottom-0 end-0">
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              <FontAwesomeIcon icon={faTrashCan} />
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
