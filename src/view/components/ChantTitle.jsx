import { FaHeart } from "react-icons/fa6";
import bgImg161 from "../../assets/161.jpg";
import bgImg172 from "../../assets/172.jpg";
import bgImg174 from "../../assets/174.jpg";
import bgImg187 from "../../assets/187.jpg";
import { appContext } from "../../context/AppContext";
import { useContext } from "react";
import { Chants } from "../../models/Chants";
import { message } from "antd";

export default function ChantTitle({ chant }) {
  const { favoriteList, setFavoriteList } = useContext(appContext);
  const [messageApi, contextHolderMsg] = message.useMessage();
  const info = (msg, classDesc) => {
    messageApi.open({
      type: "info",
      content: msg,
      style: {
        marginTop: "90vh",
      },
      className: classDesc,
      duration: 2,
    });
  };

  function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  const cover_img = sample([bgImg161, bgImg172, bgImg174, bgImg187]);

  const handleChantFavorite = () => {
    if (chant.id && Chants[chant.id]) {
      // Toggle favorite in the original Chants object
      Chants[chant.id].favorite = !Chants[chant.id].favorite;

      // Update favoriteList
      if (Chants[chant.id].favorite) {
        if (!favoriteList.includes(chant.id)) {
          setFavoriteList([...favoriteList, chant.id]);
          info("Chant ajouté aux favoris !", "custom-favorite-message-add");
        }
      } else {
        setFavoriteList(favoriteList.filter((id) => id !== chant.id));
        info("Chant retiré des favoris !", "custom-favorite-message-remove");
      }
    }
  };

  return (
    <>
      {contextHolderMsg}
      <div
        style={{
          backgroundImage: `url(${cover_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "0%",
          margin: "0%",
          borderRadius: "0 0 0 50px",
        }}
      >
        <div className="chant-title-container">
          <div className="d-flex gap-3 justify-content-end favorite-card-title p-1">
            <a onClick={handleChantFavorite}>
              <FaHeart
                size={25}
                className="me-3"
                style={{
                  color:
                    chant.id && Chants[chant.id]?.favorite
                      ? "#f37c0cff"
                      : "black",
                  marginBottom: "-20px",
                }}
              />
            </a>
          </div>
          <h5 className="card-title text-center fw-bold py-2 chant-card-title">
            {chant.titre}
          </h5>
        </div>
      </div>
    </>
  );
}
