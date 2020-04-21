/**
 * External dependencies
 */
import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { __ } from '@wordpress/i18n';
import { getSetting } from '@woocommerce/settings';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import { PAYMENT_METHOD_NAME } from './constants';

const settings = getSetting( 'cheque_data', {} );
const defaultLabel = __( 'Check Payment', 'woo-gutenberg-products-block' );
const label = decodeEntities( settings.title ) || defaultLabel;

/**
 * @typedef {import('@woocommerce/type-defs/registered-payment-method-props').RegisteredPaymentMethodProps} RegisteredPaymentMethodProps
 */

/**
 * Cheque content component
 *
 * @param {RegisteredPaymentMethodProps|Object} props Incoming props
 */
const Content = ( { activePaymentMethod } ) => {
	return activePaymentMethod === PAYMENT_METHOD_NAME ? (
		<div>{ decodeEntities( settings.description || '' ) }</div>
	) : null;
};

/**
 * Cheque edit component
 *
 * @param {RegisteredPaymentMethodProps|Object} props Incoming props
 */
const Edit = ( props ) => {
	return <Content { ...props } />;
};

/**
 * Cheque payment method config object.
 */
const offlineChequePaymentMethod = {
	name: PAYMENT_METHOD_NAME,
	label,
	content: <Content />,
	edit: <Edit />,
	icons: null,
	canMakePayment: () => true,
	ariaLabel: label,
};

registerPaymentMethod( ( Config ) => new Config( offlineChequePaymentMethod ) );
