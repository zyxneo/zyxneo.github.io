import classNames from "classnames";
import React from "react";
import Link from "gatsby-link";

import {
  IntlContextConsumer,
  FormattedMessage,
  useIntl,
  changeLocale,
} from "gatsby-plugin-intl";

import { languageName } from "../../intl";

import { Container, Dropdown, Menu } from "semantic-ui-react";

type Props = {
  className?: string;
};

export interface IntlContextConsumerProps {
  languages: (keyof typeof languageName)[];
  language: keyof typeof languageName;
}

const Header = ({ className }: Props) => {
  const intl = useIntl();
  const lang = intl.locale;

  return (
    <Menu size="large" className={className}>
      <Container>
        <Menu.Item as={Link} to="/">
          <FormattedMessage id="nav.home" defaultMessage="Home" />
        </Menu.Item>
        <Menu.Item as={Link} to="/work">
          <FormattedMessage id="nav.work" defaultMessage="Work" />
        </Menu.Item>
        <Menu.Item as={Link} to="/projects">
          <FormattedMessage id="nav.projects" defaultMessage="Projects" />
        </Menu.Item>
        <Menu.Item as={Link} to="/private">
          <FormattedMessage id="nav.private" defaultMessage="Private" />
        </Menu.Item>
        <Menu.Item as={Link} to="/ai">
          <FormattedMessage id="nav.ai" defaultMessage="AI" />
        </Menu.Item>

        <IntlContextConsumer>
          {({
            language: currentLocale,
            languages,
          }: IntlContextConsumerProps) => (
            <Menu.Menu position="right">
              <Menu.Menu position="right">
                <Dropdown item text="Language">
                  <Dropdown.Menu>
                    {languages.map((language) => {
                      if (currentLocale !== language) {
                        return (
                          <Dropdown.Item
                            key={language}
                            onClick={() =>
                              currentLocale !== language
                                ? changeLocale(language)
                                : null
                            }
                            onKeyDown={() =>
                              currentLocale !== language
                                ? changeLocale(language)
                                : null
                            }
                            role="menuitem"
                            className="languageSwitcher__item"
                          >
                            <span className={classNames("flag", language)} />
                            <bdi>{languageName[language]}</bdi>
                          </Dropdown.Item>
                        );
                      }
                      return null;
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu.Menu>
          )}
        </IntlContextConsumer>
      </Container>
    </Menu>
  );
};

export default Header;
