// @ts-nocheck
import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap'
import { BsSearch } from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import GoogleMaps from './AutoComplete/AutoComplete'
import { useHistory } from 'react-router-dom';
import store from 'app/store';
import { search } from 'app/slice/userSlice';
export default function FindCar() {
	const [SearchCar, setSearchCar] = useState({
		startLocal: "",
		startDate: "",
		startTime: "",
		endLocal: "",
		endDate: "",
		endTime: "",
		selfDrive: false,
		withDrive: false,
		intercityCar: false
	})
	const history = useHistory();
	const handleSubmit = () => {
		// if (SearchCar.startLocal !== "") {
		// 	console.log(SearchCar);
		// 	store.dispatch(search(SearchCar));
		// 	history.push("/find");
		// } else {
		// 	alert("Vui lòng nhập địa chỉ tìm kiếm!");
		// }
		console.log(SearchCar);
		localStorage.setItem("searchInput", JSON.stringify(SearchCar));
		history.push("/find");
	}
	const getLocalStart = (data) => {
		setSearchCar(state => ({ ...state, startLocal: data }))
	}
	const getLocalEnd = (data) => {
		setSearchCar(state => ({ ...state, endLocal: data }))
	}
	return (
		<Row>
			<Col xs={9} style={{ margin: '50px auto' }}>
				<div className="findCar">
					<h1 className="findCarTitle">
						<span className="red">-</span>
						Sự lựa chọn tốt nhất cho mọi chuyến đi
						<span className="red">-</span>
					</h1>
					<Form className="findCarForm">
						<Row>
							<Col xs={6} style={{ padding: '0rem 3rem' }}>
								<Form.Label className="findCarFormLabel">Điểm đi</Form.Label>
								<GoogleMaps getLocal={getLocalStart} />
							</Col>
							<Col xs={3}>
								<Form.Label className="findCarFormLabel">Ngày đi</Form.Label>
								<Form.Control className="findCarFormInput" type="date" name="startDate" value={SearchCar.startDate}
									onChange={({ target }) => setSearchCar(state => ({ ...state, startDate: target.value }))} />
							</Col>
							<Col xs={3} style={{ padding: '0rem 3rem' }}>
								<Form.Label className="findCarFormLabel">Thời gian đi</Form.Label>
								<Form.Control className="findCarFormInput" type="time" name="startTime" value={SearchCar.startTime}
									onChange={({ target }) => setSearchCar(state => ({ ...state, startTime: target.value }))} />
							</Col>
						</Row>
						<Row style={{ marginTop: '2rem' }}>
							<Col xs={6} style={{ padding: '0rem 3rem' }}>
								<Form.Label className="findCarFormLabel">Điểm đến</Form.Label>
								<GoogleMaps getLocal={getLocalEnd} />
							</Col>
							<Col xs={3}>
								<Form.Label className="findCarFormLabel">Ngày đến</Form.Label>
								<Form.Control className="findCarFormInput" type="date" name="endDate" value={SearchCar.endDate}
									onChange={({ target }) => setSearchCar(state => ({ ...state, endDate: target.value }))} />
							</Col>
							<Col xs={3} style={{ padding: '0rem 3rem' }}>
								<Form.Label className="findCarFormLabel">Thời gian đến</Form.Label>
								<Form.Control className="findCarFormInput" type="time" name="endTime" value={SearchCar.endTime}
									onChange={({ target }) => setSearchCar(state => ({ ...state, endTime: target.value }))} />
							</Col>
						</Row>
						<Row>
							<Col style={{ padding: '0rem 3rem' }}>
								<div style={{ width: '100%', height: '2px', backgroundColor: 'gray', margin: '2rem 0rem' }}></div>
							</Col>
						</Row>
						<Row>
							<Col xs={6} style={{ padding: '0rem 3rem', display: 'flex' }}>
								<Form.Check type="checkbox" label="Xe tự lái" className="findCarFormCheck me-5"
									value={SearchCar.selfDrive}
									onChange={({ target }) => setSearchCar(state => ({ ...state, selfDrive: target.checked }))}
								/>
								<Form.Check type="checkbox" label="Xe có tài xế" className="findCarFormCheck ms-5"
									value={SearchCar.withDrive}
									onChange={({ target }) => setSearchCar(state => ({ ...state, withDrive: target.checked }))}
								/>
							</Col>
							<Col xs={3} >
								<Form.Check type="checkbox" label="Xe liên tỉnh" className="findCarFormCheck"
									value={SearchCar.intercityCar}
									onChange={({ target }) => setSearchCar(state => ({ ...state, intercityCar: target.checked }))}
								/>
							</Col>
							<Col xs={3} style={{ padding: '0rem 3rem' }}>
								<Button className="findCarFormButton" type="button" onClick={handleSubmit}><BsSearch /> Tìm xe</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</Col>
		</Row>
	)
}

