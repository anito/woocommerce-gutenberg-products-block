#wp theme install storefront --activate
#wp plugin install woocommerce --activate
#wp plugin activate woocommerce-gutenberg-products-block
#wp plugin activate spine-app
#wp plugin activate log-debug
install: configure

configure:

	@echo "⚙️ Configuring Wordpress parameters...."
	wp core install \
		--url=${WORDPRESS_WEBSITE_URL_WITHOUT_HTTP} \
		--title=${WORDPRESS_WEBSITE_TITLE} \
		--admin_user=${WORDPRESS_ADMIN_USER} \
		--admin_password=${WORDPRESS_ADMIN_PASSWORD} \
		--admin_email=${WORDPRESS_ADMIN_EMAIL}

	wp option update siteurl ${WORDPRESS_WEBSITE_URL}
	wp rewrite structure $(WORDPRESS_WEBSITE_POST_URL_STRUCTURE)
	wp theme install storefront --activate
	wp plugin install woocommerce --activate
	wp plugin activate spine-app
	wp plugin activate log-debug
	wp plugin activate woocommerce-gutenberg-products-block
	wp post create --post_type=page --post_status=publish --post_title='Ready' --post_content='E2E-tests.'
