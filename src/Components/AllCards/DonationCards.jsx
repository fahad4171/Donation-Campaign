import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationCards = ({ donation }) => {

    const { picture, category, card_color, category_bg_color, button_color, description, id, price, text_color, title } = donation || {}    

    return (
        <div>
            <Link to={`/donations/${id}`}>
            <div style={{ backgroundColor: card_color }}  className="rounded-lg">
                <div>
                <img src={picture} alt="image" />
                </div>
                <div className="card-body">
                        <span style={{ backgroundColor: category_bg_color, color: text_color}} className="badge rounded-md font-medium">{category}</span>
                        <h1 style={{ color: text_color }} className="font-semibold">{title}</h1>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DonationCards;