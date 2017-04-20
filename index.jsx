import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './components/Entry/entry';
import ASCVDRisk from './app/load_fhir_data';
import './app/polyfill';

ASCVDRisk.fetchPatientData().then(
  () => {
    ReactDOM.render(<Entry />, document.getElementById('container'));
  },
);
