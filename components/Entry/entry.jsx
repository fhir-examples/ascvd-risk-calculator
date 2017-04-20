import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';
import es from 'react-intl/locale-data/es';
import App from '../App/index';
import localeData from '../../locales/translations.json';

addLocaleData([...en, ...es, ...uk]);

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.updateLocale = this.updateLocale.bind(this);

    // Define the user's language. Accounts for pulling this from different browsers
    const language = (navigator.languages && navigator.languages[0]) ||
      navigator.language || navigator.userLanguage;

    this.state = {
      locale: language,
    };
  }

  updateLocale(locale) {
    this.setState({
      locale,
    });
  }

  render() {
    let languageWithoutRegionCode;
    if (this.state.locale) {
      // Split locales with a region code
      languageWithoutRegionCode = this.state.locale.toLowerCase().split(/[_-]+/)[0];
    }

    if (this.state.locale.toLowerCase() === 'en-gb' ||
      this.state.locale.toLowerCase() === 'uk') {
      languageWithoutRegionCode = 'en-GB';
    }

    const messages = localeData[languageWithoutRegionCode] ||
      localeData[this.state.locale] || localeData.en;

    return (
      <IntlProvider
        locale={this.state.locale}
        defaultLocale={this.state.locale}
        messages={messages}
      >
        <App updateLocale={this.updateLocale} currentLocale={this.state.locale} />
      </IntlProvider>
    );
  }
}

export default Entry;
