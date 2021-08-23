import userApi from "api/userApi";
import { formatDateTime, formatMoneyK } from "lib/Helper";
import React, { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Card,
  Container,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

function PromoPage() {
  const [promotions, setPromotion] = useState([]);
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState("loading");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModel = (item) => {
    setShowModal(true);
    setItem(item);
  };
  useEffect(() => {
    userApi.getPromotions().then((res) => {
      setPromotion(res.data);
      setStatus("idle");
    });
  }, []);
  return (
    <div className="page-content pt-3">
      <Container>
        <Row>
          {promotions.map((item, index) => {
            return (
              <Col key={index} sm={6} md={4} xl={3}>
                <Card
                  className="text-center shadow cursor--pointer"
                  onClick={() => {
                    handleShowModel(item);
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="w-50 p-3"
                      variant="top"
                      src="https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">{item.code}</Card.Title>
                    <Card.Text>
                      Giảm {item.discount}% <br />
                      (Tối đa {formatMoneyK(item.max)})
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      {item?<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mã khuyến mãi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div className="fs-3">{item.code}</div>
            <Form.Text className="text-muted fs-6">
              Áp dụng đến hết ngày {formatDateTime(item.endDate, false)}
            </Form.Text>
            <div className="text-primary fs-4">Ưu đãi {item.discount}% (tối đa {formatMoneyK(item.max)})</div>
          </div>
          <ul className="fs-5">
            <li>Chỉ áp dụng cho khách hàng nhận được thông báo.</li>
            <li>Chương trình có thể kết thúc sớm hơn dự kiến khi hết số lượng khuyến mãi.</li>
            <li>Không áp dụng chung với các chương trình khuyến mãi khác.</li>
            <li>Mỗi chuyến đi chỉ được sử dụng 1 mã khuyến mãi.</li>
          </ul>
        </Modal.Body>
      </Modal>:null}
    </div>
  );
}

export default PromoPage;
