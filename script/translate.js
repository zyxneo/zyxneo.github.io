/**
 * A detailed description below.
 *
 * WARNING: The following code is taken from the react-intl.
 *
 * @link https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js
 */

import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';
import { differenceWith, isEqual } from 'lodash';

const MESSAGES_PATTERN = './translations/messages/**/*.json';
const LANG_DIR = './translations/locales/';

// Aggregates the default messages that were extracted from the app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      // eslint-disable-next-line
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }

      // eslint-disable-next-line
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

// Checks the diff between file contents and newly found translations.
// If file does not contain all of them they are being added at the end of the file.
const appendNewMessageKeys = (filename) => {
  const fileData = fs.readFileSync(filename, 'utf8');
  const currentData = JSON.parse(fileData);

  const currentMessageKeys = Object.keys(currentData);
  const foundMessageKeys = Object.keys(defaultMessages);

  const newMessageKeys = differenceWith(foundMessageKeys, currentMessageKeys, isEqual);

  if (newMessageKeys.length > 0) {
    const newEntries = newMessageKeys.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue]: defaultMessages[currentValue]
    }), {});

    fs.writeFileSync(filename, JSON.stringify({
      ...currentData,
      ...newEntries
    }, null, 2));

    console.info(`[OK] Added ${newMessageKeys.length} new message keys to ${filename}`);
    return 0;
  }

  console.info(`[OK] No new translations for ${filename}`);
  return 0;
};

mkdirpSync(LANG_DIR);
// ADD NEW LANGUAGES HERE:
appendNewMessageKeys(`${LANG_DIR}en.json`);
appendNewMessageKeys(`${LANG_DIR}hu.json`);
appendNewMessageKeys(`${LANG_DIR}en.json`);
