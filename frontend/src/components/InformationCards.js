import React, { Component } from 'react';

class InformationCards extends Component {
    render() {
        return (
            <section className="informationCards">
                <article>
                    <img src={this.props.icon} alt="icon" />
                </article>
                <article className="infos">
                    <p>{this.props.count}{this.props.unitmeasure}</p>
                    <p>{this.props.molecule}</p>
                </article>
            </section>
        );
    }
}

export default InformationCards;