import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import TitleComponent2 from './PageTitleExamples/Variation2'

class PageTitle extends Component {

    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading
        } = this.props;

        return (

            <div className="app-page-title">
              
                    <div className="page-title-heading">
                        <div
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        {/* <TitleComponent2/> */}
                    </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);

const estilo = {
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    padding: '0.8333333333rem',
    margin: '0 1.5rem 0 0',
    background: '#fff',
    boxShadow: '0 0.46875rem 2.1875rem rgba(8, 10, 37, 0.03), 0 0.9375rem 1.40625rem rgba(8, 10, 37, 0.03), 0 0.25rem 0.53125rem rgba(8, 10, 37, 0.05), 0 0.125rem 0.1875rem rgba(8, 10, 37, 0.03)',
    borderRadius: '0.25rem',
    width: '60px',
    height: '60px',
  };