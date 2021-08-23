import bookingApi from "api/bookingApi";
import { addPromotion, removePromotion } from "app/slice/bookingSlice";
import store from "app/store";
import Loading from "components/layout/Loading";
import { NOTI } from "constants/index";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
//@ts-ignore
import { store as noti } from "react-notifications-component";
import { useSelector } from "react-redux";

function PromotionForm(props) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  //@ts-ignore
  const logged = useSelector((state) => state.logged);
  //@ts-ignore
  const promotion = useSelector((state) => state.booking).data.promotion;
  const handleChange = (evt) => setCode(evt.target.value);
  const handleCheckPromotion = () => {
    if (!logged.data) {
    } else {
      setStatus("loading");
      bookingApi
        .checkPromotion({ code })
        .then((res) => {
          setStatus("idle");
          store.dispatch(addPromotion(res));
        })
        .catch(() => {
          setStatus("error");
        });
    }
  };
  const handleRemovePromotion = () => {
    setStatus("");
    store.dispatch(removePromotion());
  };
  return (
    <>
      {status === "loading" ? <Loading type="inline" /> : null}
      {promotion ? (
        <Col>
          <div className="promotion--success">
            <div className="promotion__item">{promotion.code}</div>
            <div className="promotion__item">-{promotion.discount}%</div>
            <div className="promotion__item" onClick={handleRemovePromotion}>
              <BsTrash />
            </div>
          </div>
        </Col>
      ) : (
        <>
          <Form.Group as={Col} xs={7} sm={8}>
            <Form.Control
              type="text"
              className={code ? "text-uppercase" : null}
              placeholder="Mã giảm giá"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
              {status === "error"
                ? "Mã không tồn tại hoặc đã hết lượt sử dụng!"
                : null}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} xs={5} sm={4}>
            <Button className="w-100 h-auto" onClick={handleCheckPromotion}>
              Sử dụng
            </Button>
          </Form.Group>
        </>
      )}
    </>
  );
}

PromotionForm.propTypes = {};

export default PromotionForm;
