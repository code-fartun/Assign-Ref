import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import podcastFormSchema from "schemas/podcastFormSchema";
import debug from "sabio-debug";
import podcastService from "../../services/podcastService";
import toastr from "toastr";
import "./podcastform.css";

const _logger = debug.extend("PodcastForm");

function PodcastForm() {
  const [podcastFormData, setPodcastFormData] = useState({
    title: "",
    description: "",
    url: "",
    CoverImageUrl: "",
    createdBy: "",
    modifiedBy: "",
  });
  _logger(podcastFormData);
  const { state } = useLocation;

  useEffect(() => {
    _logger(state);
    if (state && state.type === "PodcastForm_Edit") {
      const stateChange = state.payload;
      _logger("PodcastForm useEffect", stateChange);
      setPodcastFormData((prevState) => {
        let newForm = { ...prevState, ...stateChange };
        newForm.podcastId = stateChange.podcast.id;
        newForm.Url = stateChange?.podcast?.Url;
        newForm.CoverImageUrl = stateChange?.CoverImageUrl;
        _logger(newForm, prevState);
        return newForm;
      });
    }
  }, []);

  useEffect(() => {
    _logger(state);
    if (state && state.type === "PodcastForm_Add") {
      const stateObj = state.payload;
      setPodcastFormData((prevState) => {
        let newForm = { ...prevState, ...stateObj };
        newForm.podcastId = stateObj.podcast.id;
      });
    }
  });
  function handleSubmit(values) {
    _logger("values in handleSubmit in PodcastForm", values);
    if (state && state.type === "PodcastForm_Edit") {
      podcastService
        .updatePodcasts(podcastFormData)
        .then(onEditSuccess)
        .catch(onEditError);
    } else {
      podcastService
        .addPodcasts(podcastFormData)
        .then(onAddSuccess)
        .catch(onAddError);
    }
  }

  function onEditSuccess(response) {
    _logger(response);
    toastr.success("Succes On Editting Podcast Form");
  }

  function onEditError(response) {
    _logger(response);
    toastr.error(
      "Could not edit your form, please try again",
      "Error on submission"
    );
  }

  function onAddSuccess(response) {
    _logger("onAddSuccess", response);
    toastr.success("Success On Adding Podcast Form");
  }
  function onAddError(error) {
    _logger(error);
    toastr.error(
      "Could not add your form, please try again",
      "Error on submission"
    );
  }

  return (
    <div className="card podcast-form">
      <div className="row justify-content-center align-items-center">
        <div className="form-card-container col-md-5 center">
          <Formik
            enableReinitialize={true}
            initialValues={podcastFormData}
            onSubmit={handleSubmit}
            validationSchema={podcastFormSchema}
          >
            <Form>
              <p className="lead mb-8"></p>
              <div className="form-control me-2">
                <p className="row justify-content-center align-items-center fw-bold fs-3">
                  Podcast Form
                </p>
                <label htmlFor="Title">Title</label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Your Title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  components="div"
                  className="has error"
                />

                <label htmlFor="Description">Description</label>
                <Field
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Your Description"
                  className="form-control"
                />
                <ErrorMessage
                  name="description"
                  components="div"
                  className="has-error"
                />

                <label htmlFor="Url">Audio Url</label>
                <Field
                  as="textarea"
                  id="url"
                  name="url"
                  placeholder="Put Audio Link Here"
                  className="form-control"
                />
                <ErrorMessage
                  name="url"
                  components="div"
                  className="has-error"
                />

                <label htmlFor="coverImageUrl" className="form-label">
                  Cover Image Url
                </label>
                <Field
                  type="coverImageUrl"
                  name="coverImageUrl"
                  id="coverImageUrl"
                  placeholder="Put Your Cover Image URL"
                  className="form-control"
                />

                <label htmlFor="createdBy" className="form-label">
                  Created By
                </label>
                <Field
                  as="textarea"
                  id="createdBy"
                  name="createdBy"
                  placeholder="Write Created By"
                  className="form-control"
                />

                <label htmlFor="modifiedBy" className="form-label">
                  Modified By
                </label>
                <Field
                  as="textarea"
                  id="modifiedBy"
                  name="modifiedBy"
                  placeholder="Write Modified By"
                  className="form-control"
                />
                <button className="mt-2 btn btn-primary podcast-button">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default PodcastForm;
