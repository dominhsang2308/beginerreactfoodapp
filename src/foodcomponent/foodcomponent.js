import React, { useState } from "react";
import "../foodcomponent/foodcomponent.css";
import Popup from "../popupdialog/Popup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//Sử dụng useState để lưu trữ hình ảnh được chọn ngẫu nhiên từ mảng food
import "bootstrap/dist/css/bootstrap.min.css";
const food = [
  {
    id: 1,
    name: "Hủ tiếu",
    description: "Hủ Tiếu Nam Vang",
    image:
      "https://www.disneycooking.com/wp-content/uploads/2020/11/hu-tieu-nam-vang.jpg",
  },
  {
    id: 2,
    name: "Bò Kho",
    description: "Bò Kho",
    image:
      "https://cdn.tgdd.vn/Files/2018/12/13/1137914/cach-nau-bo-kho-tai-nha-bang-goi-gia-vi-bo-kho-don-gian-ngon-dung-dieu-202107211101519924.jpg",
  },
  {
    id: 3,
    name: "Canh Bún",
    description: "Canh Bún",
    image:
      "https://cdn.tgdd.vn/Files/2019/10/16/1209065/cach-nau-canh-bun-chuan-vi-an-la-ghien-202211081547511833.jpg",
  },
  {
    id: 4,
    name: "Bún Thịt Nướng",
    description: "Bún Thịt Nướng",
    image:
      "https://www.cet.edu.vn/wp-content/uploads/2018/03/bun-thit-nuong-kieu-mien-nam.jpg",
  },
  {
    id: 5,
    name: "Bánh cuốn",
    description: "Bánh cuốn",
    image:
      "https://cdn.tgdd.vn/Files/2017/10/22/1034982/cach-lam-banh-cuon-bang-bot-lam-banh-cuon-mikko-202111111226513462.jpg",
  },
  {
    id: 6,
    name: "Xôi Gà",
    description: "Xôi Gà",
    image:
      "https://cdn.tgdd.vn/Files/2021/09/11/1381810/cach-nau-xoi-ga-xe-nuoc-cot-dua-thom-beo-sieu-nhanh-tai-nha-202109110925505443.jpg",
  },
  {
    id: 7,
    name: "Cơm Gà",
    description: "Cơm Gà",
    image:
      "https://cdn.tgdd.vn/2022/01/CookRecipe/Avatar/com-ga-chien-xoi-mo-khong-can-chien-com-thumbnail.jpg",
  },
  {
    id: 8,
    name: "Cơm Trộn Hàn Quốc",
    description: "Cơm Trộn Hàn Quốc",
    image:
      "https://bepxua.vn/wp-content/uploads/2021/10/65475970-2328661237220927-7635-8060-2543-1595985768.jpg",
  },
  {
    id: 9,
    name: "Cá Hồi",
    description: "Cá Hồi",
    image:
      "https://vcdn1-dulich.vnecdn.net/2013/10/12/kssapa-8211-1381544457.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=isajbMUnELAm-yapwILocw",
  },
  {
    id: 10,
    name: "Pad Thái",
    description: "Pad Thái",
    image:
      "https://www.cet.edu.vn/wp-content/uploads/2019/06/pad-thai-la-mon-an-noi-tieng.jpg",
  },
  {
    id: 11,
    name: "Bánh Xèo",
    description: "Bánh Xèo",
    image:
      "https://cdn.tgdd.vn/Files/2020/05/20/1256908/troi-mua-thu-lam-banh-xeo-kieu-mien-bac-gion-ngon-it-dau-mo-202005201034115966.jpg",
  },
  {
    id: 12,
    name: "Bún bò huế",
    description: "Bún bò huế",
    image:
      "https://cdn.tgdd.vn/Files/2018/04/01/1078873/nau-bun-bo-hue-cuc-de-tai-nha-tu-vien-gia-vi-co-san-202109161718049940.jpg",
  },
  {
    id: 13,
    name: "Cơm Tấm",
    description: "Cơm Tấm",
    image:
      "https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg",
  },
  {
    id: 14,
    name: "Bánh mì",
    description: "Bánh Mì",
    image:
      "https://static-images.vnncdn.net/files/publish/2023/5/14/clever-junior-694.jpg",
  },
  {
    id: 15,
    name: "Pizza",
    description: "Pizza",
    image:
      "https://cdn.tgdd.vn/Files/2021/08/24/1377468/cach-lam-pizza-pho-mai-bap-ngot-beo-ngay-don-gian-tai-nha-202108241444001705.jpg",
  },
  {
    id: 16,
    name: "Cơm cháy kho quẹt",
    description: "Cơm cháy kho quẹt",
    image: "https://i.ytimg.com/vi/qGA6fP2hLTY/maxresdefault.jpg",
  },
];

//Using function component to render UI and using map method for return array list food
// function FoodCompoent() {
//   //using usestate for filter
//   const [filterValue, setFilterValue] = useState("");
//   const handleInputChange = (event) => {
//     setFilterValue(event.target.value);
//   };
//   const filteredImages = food.filter((item) =>
//     item.name.toLowerCase().includes(filterValue.toLowerCase())
//   );
//   const [showPopup, setShowPopup] = useState(false);
//   const [randomImage, setRandomImage] = useState(null);
//   //Use state for open popup dialog
//   const handleOpenPopup = () => {
//     const randomIndex = Math.floor(Math.random() * food.length);
//     const randomFood = food[randomIndex];

//     setRandomImage(randomFood.image);
//     setShowPopup(true);

//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);

//     setRandomImage(null);
//   };
//   return (
//     <div style={{width:'70%'}}>
//       <div >
//         <span style={{ fontSize: "18px" }}>Find Food : </span>
//         <input
//           type="text"
//           value={filterValue}
//           onChange={handleInputChange}
//           style={{ marginBottom: "2%" }}
//         ></input>
//       </div>
//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {filteredImages.map((foods) => (
//           <img
//             src={foods.image}
//             key={foods.id}
//             alt={foods.description}
//             name={foods.name}
//             style={{
//               width: "250px",
//               height: "300px",
//               marginBottom: "10px",
//               marginRight: "10px",
//               borderRadius: "5%",
//             }}
//           />
//         ))}
//       </div>

//       <div>
//       <button className="btn-food" onClick={handleOpenPopup}>Choose Food</button>

//       {showPopup && (
//         <div className="popup" style={{
//             position: 'fixed',
//             top: '50%',
//             left:'50%',
//             transform: 'translate(-50%, -50%)',
//             borderRadius: '10%',
//             padding: '20px'
//         }}>
//           <div className="popup-content">
//             <img style={{
//               width:'100%',
//               marginBottom: "10px",
//               marginRight: "10px",
//               borderRadius: "5%",
//             }}
//             src={randomImage} alt="Random Food" />
//             <button className="btn-food" onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }
function FoodCompoent() {
  //using usestate for filter
  const [filterValue, setFilterValue] = useState("");
  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };
  const filteredImages = food.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const [showPopup, setShowPopup] = useState(false);
  const [randomImage, setRandomImage] = useState(null);
  //Use state for open popup dialog
  const handleOpenPopup = () => {
    const randomIndex = Math.floor(Math.random() * food.length);
    const randomFood = food[randomIndex];

    setRandomImage(randomFood.image);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);

    setRandomImage(null);
  };

  return (
    <Container
      className="sticky"
      style={{ width: "100%", height: "auto", marginTop: "5%" }}
    >
      <h1>Food Recommend</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search Food :</InputGroup.Text>
        <Form.Control
          placeholder="Search Food"
          value={filterValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleOpenPopup} style={{ marginLeft: "5px" }}>
          Selected Food
        </Button>
      </InputGroup>

      <Row xs={2} md={3} className="g-4">
        {filteredImages.map((foods) => (
          <Col key={foods.id}>
            <Card>
              <Card.Img
                src={foods.image}
                style={{ cursor: "pointer" }}
                thumbnail
              />
              {showPopup && (
                <div
                  className="popup"
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "10%",
                    padding: "20px",
                  }}
                >
                  <div className="popup-content">
                    <Card.Img
                      src={randomImage}
                      style={{ cursor: "pointer" }}
                      thumbnail
                    ></Card.Img>

                    <button className="btn-food" onClick={handleClosePopup}>
                      Close
                    </button>
                  </div>
                </div>
              )}
              <Card.Body>
                <Card.Title>{foods.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
function ClickMe() {
  const randomIndex = Math.floor(Math.random() * food.length);
  const randomFood = food[randomIndex];
  alert(randomFood.name);
}

export default FoodCompoent;
