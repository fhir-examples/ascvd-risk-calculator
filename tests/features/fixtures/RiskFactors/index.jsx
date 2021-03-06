import React from 'react';
import ReactDOM from 'react-dom';
import ASCVDRisk from '../sampledata';
import PatientBanner from '../../../../components/PatientBanner/banner';
import Header from '../../../../components/Header/header';
import Navbar from '../../../../components/Navbar/navbar';
import Recommendations from '../../../../views/Recommendations/index';

// Inject methods for mocks
const injectApp = require('inject!../../../../components/App/app');
const injectForm = require('inject!../../../../views/Results/index');
const injectButton = require('inject!../../../../components/Form/ButtonForm/button_form');
const injectInputTextForm = require('inject!../../../../components/Form/InputTextForm/input_text_form');
const injectRadioButton = require('inject!../../../../components/Form/RadioButtonForm/radio_button_form');
const injectSendForm = require('inject!../../../../components/Form/SendForm/send_form');
const injectRiskFactors = require('inject!../../../../views/RiskFactors/index');
const injectSimulatedRisk = require('inject!../../../../components/Results/SimulatedRisk/simulated_risk');

ASCVDRisk.patientInfo.relatedFactors['diabetic'] = true;

// Mocked imports for Graph
let SimulatedRisk = injectSimulatedRisk({
  '../../../app/load_fhir_data': ASCVDRisk
}).default;
let RiskFactors = injectRiskFactors({
  '../../app/load_fhir_data': ASCVDRisk,
  '../../components/Results/SimulatedRisk/simulated_risk': SimulatedRisk
}).default;

// Mocked imports for form
let SendForm = injectSendForm({
  '../../../app/load_fhir_data': ASCVDRisk
}).default;
let RadioButtonForm = injectRadioButton({
  '../../../app/load_fhir_data': ASCVDRisk
}).default;
let ButtonForm = injectButton({
  '../../../app/load_fhir_data': ASCVDRisk
}).default;
let InputTextForm = injectInputTextForm({
  '../../../app/load_fhir_data': ASCVDRisk
}).default;
let Results = injectForm({
  '../../app/load_fhir_data': ASCVDRisk,
  '../../components/Form/ButtonForm/button_form': ButtonForm,
  '../../components/Form/InputTextForm/input_text_form': InputTextForm,
  '../../components/Form/RadioButtonForm/radio_button_form': RadioButtonForm,
  '../../components/Form/SendForm/send_form': SendForm
}).default;
let App = injectApp({
  '../../app/load_fhir_data': ASCVDRisk,
  '../../components/PatientBanner/banner': PatientBanner,
  '../../components/Header/header': Header,
  '../../components/Navbar/navbar': Navbar,
  '../../views/Results/index': Results,
  '../../views/RiskFactors/index': RiskFactors,
  '../../views/Recommendations/index': Recommendations
}).default;
const form = <App />;

ReactDOM.render(form, document.getElementById('container'));
