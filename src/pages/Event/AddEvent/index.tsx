import React, {useEffect, useState} from "react";
import {Col, Container, Form, FormFeedback, Input, Label, Row} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import {useFormik} from "formik";
import * as Yup from "yup";
import {
    addNewEvent as onAddNewEvent,
    getEvents as onGetEvents,
    updateEvent as onUpdateEvent
} from "../../../slices/calendar/thunk";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DashboardEcommerce = () => {
    const dispatch: any = useDispatch();
    const [event, setEvent] = useState<any>({});
    const [selectedNewDay, setSelectedNewDay] = useState<any>();
    document.title = "Dashboard | Event Booking ";

    const toggle = () => {
        setEvent(null);
    };


// events validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            id: (event && event.id) || "",
            title: (event && event.title) || "",
            category: (event && event.category) || "",
            location: (event && event.location) || "",
            description: (event && event.description) || "",
            defaultDate: (event && event.defaultDate) || [],
            datetag: (event && event.datetag) || "",
            start: (event && event.start) || "",
            end: (event && event.end) || ''
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Event Name"),
            // category: Yup.string().required("Please Select Your Category"),
            location: Yup.string().required("Please Enter Your Location"),
            description: Yup.string().required("Please Enter Your Description"),
            start: Yup.date().required('Start Time is required'),
            end: Yup.date().required('End Time is required'),
            defaultDate: Yup.array().of(Yup.date()).required('Date range is required').min(2, 'Select at least two dates'),
        }),
        onSubmit: (values) => {
            var updatedDay: any = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }
            const newEvent = {
                id: Math.floor(Math.random() * 100),
                title: values["title"],
                start: selectedNewDay[0],
                end: updatedDay,
                className: values["category"],
                location: values["location"],
                description: values["description"],
            };
            // save new event
            const res: any = dispatch(onAddNewEvent(newEvent));
            if (res) {
                toast.success("Event added successfully", defaultOptions);
            } else {
                toast.error("Something Wents Wrong !", defaultOptions);
            }
            validation.resetForm();


            // setSelectedDay(null);
            setSelectedNewDay(null);
            toggle();
        },
    });

        // set up toast message for default properties like postion, autoClose etc
        const defaultOptions : any = {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };


    return (
        <React.Fragment>
            <div className="page-content">
                <ToastContainer />
                <Container fluid>
                    <BreadCrumb title="Dashboard" pageTitle="Dashboards"/>
                    <Row>
                        <Col>
                            <div className="h-100">
                                <Form className="needs-validation"
                                      name="event-form" id="form-event"
                                      onSubmit={(e) => {
                                          e.preventDefault();
                                          validation.handleSubmit();

                                          return false;
                                      }}
                                >

                                    <Row>
                                        <Col xs={6}>
                                            <Row className="event-form">
                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <Label className="form-label">Type</Label>
                                                        <Input className="form-select d-block"
                                                               name="category"
                                                               id="event-category"
                                                               type="select">
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.category || ""}
                                                            <option value="bg-danger-subtle">Danger</option>
                                                            <option value="bg-success-subtle">Success</option>
                                                            <option value="bg-primary-subtle">Primary</option>
                                                            <option value="bg-info-subtle">Info</option>
                                                            <option value="bg-dark-subtle">Dark</option>
                                                            <option value="bg-warning-subtle">Warning</option>
                                                        </Input>
                                                        {validation.touched.category && validation.errors.category ? (
                                                            <FormFeedback type="invalid"
                                                                          className="d-block">{validation.errors.category}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <Label className="form-label">Event Name</Label>
                                                        <Input
                                                            className="d-block"
                                                            placeholder="Enter event name"
                                                            type="text"
                                                            name="title"
                                                            id="event-title"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.title || ""}
                                                        />
                                                        {validation.touched.title && validation.errors.title ? (
                                                                <FormFeedback type="invalid"
                                                                              className="d-block">{validation.errors.title}</FormFeedback>)
                                                            : null}
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <Label>Event Date</Label>
                                                        <div className="input-group">
                                                            <Flatpickr
                                                                className="form-control"
                                                                id="event-start-date"
                                                                name="defaultDate"
                                                                placeholder="Select Date"
                                                                value={validation.values.defaultDate || ""}
                                                                options={{
                                                                    mode: "range",
                                                                    dateFormat: "Y-m-d",
                                                                }}
                                                                onChange={(date) => {
                                                                    setSelectedNewDay(date);
                                                                    validation.setFieldValue("defaultDate", date)
                                                                }}
                                                            />
                                                            <span className="input-group-text">
                              <i className="ri-calendar-event-line"></i>
                            </span>
                                                        </div>
                                                        {validation.touched.defaultDate && validation.errors.defaultDate ? (
                                                            <FormFeedback type="invalid"
                                                                          className="d-block">{validation.errors.defaultDate} </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col xs={6}>
                                                    <div className="mb-3">
                                                        <Label>Start Time</Label>
                                                        <div className="input-group">
                                                            <Flatpickr className="form-control"
                                                                       name="start"
                                                                       value={validation.values.start || ""}
                                                                       onChange={(date) => validation.setFieldValue("start", date[0])}
                                                                       options={{
                                                                           enableTime: true,
                                                                           noCalendar: true,
                                                                           dateFormat: "H:i",
                                                                       }}/>
                                                            <span className="input-group-text"> <i
                                                                className="ri-calendar-event-line"></i> </span>
                                                        </div>
                                                        {validation.touched.start && validation.errors.start ? (
                                                            <FormFeedback type="invalid"
                                                                          className="d-block">{validation.errors.start} </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>

                                                <Col xs={6}>
                                                    <div className="mb-3">
                                                        <Label>End Time</Label>
                                                        <div className="input-group">
                                                            <Flatpickr className="form-control input-group"
                                                                       name="end"
                                                                       value={validation.values.end || ""}
                                                                       onChange={(date) => validation.setFieldValue("end", date[0])}
                                                                       options={{
                                                                           enableTime: true,
                                                                           noCalendar: true,
                                                                           dateFormat: "H:i",
                                                                       }}/>
                                                            <span className="input-group-text"> <i
                                                                className="ri-calendar-event-line"></i> </span>
                                                        </div>
                                                        {validation.touched.end && validation.errors.end ? (
                                                            <FormFeedback type="invalid"
                                                                          className="d-block">{validation.errors.end} </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <Label htmlFor="event-location">Location</Label>
                                                        <div>
                                                            <Input
                                                                type="text"
                                                                className="d-block"
                                                                name="location"
                                                                id="event-location"
                                                                placeholder="Event location"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.location}/>
                                                            {validation.touched.location && validation.errors.location ? (
                                                                <FormFeedback type="invalid"
                                                                              className="d-block">{validation.errors.location}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <div className="mb-3">
                                                        <Label className="form-label">Description</Label>
                                                        <textarea
                                                            className="form-control d-block"
                                                            id="event-description"
                                                            name="description"
                                                            placeholder="Enter a description"
                                                            rows={3}
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.description}></textarea>
                                                        {validation.touched.description && validation.errors.description ? (
                                                            <FormFeedback type="invalid"
                                                                          className="d-block">{validation.errors.description}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                    <div className="hstack gap-2 justify-content-end">
                                        <button type="submit" className="btn btn-success" id="btn-save-event">
                                            Add Event
                                        </button>
                                    </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container> ̰
            </div>
        </React.Fragment>
    );
};


DashboardEcommerce.propTypes = {
    events: PropTypes.any,
    categories: PropTypes.array,
    className: PropTypes.string,
    onGetEvents: PropTypes.func,
    onAddNewEvent: PropTypes.func,
    onUpdateEvent: PropTypes.func,
    onDeleteEvent: PropTypes.func,
    onGetCategories: PropTypes.func,
};

export default DashboardEcommerce;
