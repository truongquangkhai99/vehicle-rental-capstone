// @ts-nocheck
import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap'
import { IoLocation, BsSearch, RiMapPinRangeFill, RiMapPinFill } from 'react-icons/all';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import UseAddressSearch from 'api/fetchApiMap/placesApi';
// import UseDistance from 'api/fetchApiMap/distanceApi';
export default function Findcar() {
	const reflocation = React.createRef();
	const [search, setsearch] = useState("")
	const listlocation = UseAddressSearch(search);
	// const listdistance=UseDistance(search,"XTL");
	const getLocation = function (position) {
		fetch('https://locationiq.com/v1/reverse.php?key=pk.5a27d5b7fe2c1fcef10a3410df539422&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&format=json')
			.then(response => response.json())
			.then(data => { reflocation.current.value = data.display_name; console.log(reflocation.current.value) }).catch(console.log("loi roi 1"));
	}
	const handleclick = () => {
		navigator.geolocation.getCurrentPosition(getLocation)
	}
	const handleSearchInput = (event) => {
		setsearch(event.target.value)
	}
	const handleSelected = (item) => {
		if (item.target.value === "Sử dụng vị trí của bạn") {
			navigator.geolocation.getCurrentPosition(getLocation)
		}
	}
	
	// const handleSubmit=()=>{

	// }

	return (
		<Row>
			<Col>
				<div className="tab">
					<Tabs>
						<TabList>
							<Tab className="tabtitle">Xe máy </Tab>
							<Tab className="tabtitle">Xe tự lái </Tab>
							<Tab className="tabtitle">Xe có tài xế</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Row>
									<Col>
										<div className="tab1">
											<Form>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Địa điểm</Form.Label>
												<Combobox openOnFocus={true}>
													<IoLocation style={{ marginLeft: "0.5rem", marginTop: "0.5rem", marginRight: "1rem", position: "absolute" }} color="green" size="1.5rem" />
													<ComboboxInput
														className="form-control"
														// autocomplete={true}
														onChange={handleSearchInput}
														onSelect={(item) => handleSelected(item)}
														placeholder="Nhập địa chỉ mà bạn muốn...."
														style={{ paddingLeft: '2rem' }}
														ref={reflocation}
													/>
													{listlocation && (
														<ComboboxPopover>
															<ComboboxList>
																<ComboboxOption value='Sử dụng vị trí của bạn' key={0} onClick={handleclick} />
																{listlocation.length > 0 ?
																	listlocation.map((item, index) => (
																		<ComboboxOption value={item.display_address} key={index} />
																	))
																	: <ComboboxOption value='Không tìm thấy kết quả vị trí!' key={1} />
																}
															</ComboboxList>
														</ComboboxPopover>
													)}
												</Combobox>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem', marginTop: '1rem' }}>Bắt đầu</Form.Label>
												<Row>
													<Col>
														<Form.Control type="date" />
													</Col>
													<Col>
														<Form.Control type="time" />
													</Col>
												</Row>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem', marginTop: '1rem' }}>Kết thúc</Form.Label>
												<Row>
													<Col>
														<Form.Control type="date" />
													</Col>
													<Col>
														<Form.Control type="time" />
													</Col>
												</Row>
												<Button variant="primary" className="btn form-control mt-3 text-primary" ><BsSearch />  Tìm Kiếm Ngay</Button>
											</Form>
										</div>
									</Col>
								</Row>
							</TabPanel>
							<TabPanel>
								<Row>
									<Col>
										<div className="tab1">
											<Form>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Địa điểm</Form.Label>
												<Combobox openOnFocus={true}>
													<IoLocation style={{ marginLeft: "0.5rem", marginTop: "0.5rem", marginRight: "1rem", position: "absolute" }} color="green" size="1.5rem" />
													<ComboboxInput
														className="form-control"
														autocomplete={true}
														// onChange={handleSearchInput1}
														// onSelect={(item) => handleSelected1(item)}
														placeholder="Nhập địa chỉ mà bạn muốn...."
														style={{ paddingLeft: '2rem' }}
														// ref={reflocation}
													/>
													{listlocation && (
														<ComboboxPopover>
															<ComboboxList>
																{/* <ComboboxOption value='Sử dụng vị trí của bạn' key={0} onClick={handleclick1} /> */}
																{listlocation.length > 0 ?
																	listlocation.map((item, index) => (
																		<ComboboxOption value={item.display_address} key={index} />
																	))
																	: <ComboboxOption value='Không tìm thấy kết quả vị trí!' key={1} />
																}
															</ComboboxList>
														</ComboboxPopover>
													)}
												</Combobox>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem', marginTop: '1rem' }}>Bắt đầu</Form.Label>
												<Row>
													<Col>
														<Form.Control type="date" />
													</Col>
													<Col>
														<Form.Control type="time" />
													</Col>
												</Row>
												<Form.Label style={{ color: 'green', fontSize: '1.5rem', marginTop: '1rem' }}>Kết thúc</Form.Label>
												<Row>
													<Col>
														<Form.Control type="date" />
													</Col>
													<Col>
														<Form.Control type="time" />
													</Col>
												</Row>
												<Button variant="primary" className="btn form-control mt-3 text-primary" ><BsSearch />  Tìm Kiếm Ngay</Button>
											</Form>
										</div>
									</Col>
								</Row>
							</TabPanel>
							<TabPanel>
								<Row>
									<Col>
										<div className="tab1">
											<Tabs>
												<TabList>
													<Tab className="title-child">Nội tỉnh</Tab>
													<Tab className="title-child">Liên tỉnh</Tab>
												</TabList>
												<TabPanels>
													<TabPanel>
														<Form>
															<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Điểm đón</Form.Label>
															<Row>
																<Col>
																	<IoLocation style={{ marginLeft: "0.5rem", marginTop: "0.5rem", marginRight: "1rem", position: "absolute" }} color="green" size="1.5rem" />
																	<Form.Control type="text" style={{ paddingLeft: '2rem' }} placeholder="Bạn muốn đón tại....." />
																</Col>
															</Row>
															<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Thời gian</Form.Label>
															<Row>
																<Col>
																	<Form.Control type="date" />
																</Col>
																<Col>
																	<Form.Control type="time" />
																</Col>
															</Row>
															<Button variant="primary" className="btn form-control mt-3 text-primary"><BsSearch />  Tìm Kiếm Ngay</Button>
														</Form>
													</TabPanel>
													<TabPanel>
														<Form>
															<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Lộ trình</Form.Label>
															<Row>
																<Col>
																	<RiMapPinRangeFill style={{ marginLeft: "0.5rem", marginTop: "0.5rem", marginRight: "1rem", position: "absolute" }} color="green" size="1.5rem" />
																	<Form.Control type="text" style={{ paddingLeft: '2rem' }} placeholder="Bạn muốn đón tại..." />
																</Col>
															</Row>
															<Row>
																<Col>
																	<RiMapPinFill style={{ marginLeft: "0.5rem", marginTop: "1.5rem", marginRight: "1rem", position: "absolute" }} color="green" size="1.5rem" />
																	<Form.Control type="text" style={{ paddingLeft: '2rem' }} placeholder="Bạn muốn đến tại..." className="mt-3" />
																</Col>
															</Row>
															<Row>
																<Col>
																	<Form.Check type="checkbox" label="Tôi muốn đi một chiều" className="mt-3 text-primary" />
																</Col>
																<Col>
																	<Form.Check type="checkbox" label="Tôi muốn đi hai chiều" className="mt-3 text-primary" />
																</Col>
															</Row>

															<Form.Label style={{ color: 'green', fontSize: '1.5rem' }}>Thời gian</Form.Label>
															<Row>
																<Col>
																	<Form.Control type="date" />
																</Col>
																<Col>
																	<Form.Control type="time" />
																</Col>
															</Row>
															<Button variant="primary" className="btn form-control mt-3 text-primary"><BsSearch />  Tìm Kiếm Ngay</Button>
														</Form>
													</TabPanel>
												</TabPanels>
											</Tabs>
										</div>
									</Col>
								</Row>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
			</Col>
		</Row>
	)
}

