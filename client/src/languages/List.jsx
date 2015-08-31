/* @flow */

import React          from 'react';
import Router         from 'react-router';
import makeClassAdder from '../shared/services/makeClassAdder.js';
import Busy           from '../shared/Busy.jsx';
import bows           from 'bows'

import New            from './New.jsx'

const PT              = React.PropTypes;
const baseClass       = 'languages--List'
const classAdder      = makeClassAdder(baseClass);
const log             = bows(baseClass)

class Comp extends React.Component {

	renderItems() {
		return _.map(this.props.languages, (language) => {
			return <li key={language.id}>{language.attributes.name} {this.renderUsageFor(language.id)}</li>
		})
	}

	renderUsageFor(id) {
		log(id)
		// languagesUsers
		return _.sum(this.props.languagesUsers, function(lu) {
			// log(lu.attributes.language_id == id)
			return lu.attributes.language_id == id ? 1 : 0;
		});
	}

	render () {
		return (
			<section className={classAdder()}>
				<h2>Languages</h2>
				<New {...this.props} />
				<ul>
					{this.renderItems()}
				</ul>
			</section>
		);
	}
}

Comp.displayName = classAdder();

Comp.contextTypes = {
	router: PT.object
};

Comp.propTypes = {
	languages: PT.array.isRequired,
	languagesUsers: PT.array.isRequired
}

export default Comp;