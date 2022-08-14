CREATE TABLE "user" (
	user_id SERIAL PRIMARY KEY,
	username varchar(255) NOT NULL,
	hash_password varchar(255) NOT NULL,
	firstname varchar(50),
	lastname varchar(50),
	telephone varchar(18),
	email varchar(255) NOT NULL,
	email_verify_at timestamp,
	remember_token varchar(255),
	lasttime_loggedin timestamp,
	actived boolean DEFAULT TRUE,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL	
);

CREATE TABLE supplier (
	supplier_id SERIAL PRIMARY KEY,
	company_name varchar(255) NOT NULL,
	company_fullname varchar(255) NOT NULL,
	contact_title varchar(255) NOT NULL,
	address1 varchar(255),
	address2 varchar(255),
	city varchar(100) NOT NULL,
	country varchar(50) NOT NULL,
	portal_code varchar(15) NOT NULL,
	phone varchar(18) NOT NULL,
	url varchar(255),
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);

CREATE TABLE product_type (
	product_type_id SERIAL PRIMARY KEY,
	product_type_name varchar(255) NOT NULL,
	product_type_summary text NOT NULL,
	image varchar(255) NOT NULL,
	slug varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);

CREATE TABLE product (
	product_id SERIAL PRIMARY KEY,
	product_type_id int NOT NULL,
	supplier_id int NOT NULL,
	product_name varchar(255) NOT NULL,
	product_brief text NOT NULL,
	state boolean NOT NULL DEFAULT TRUE,
	slug varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int,
	CONSTRAINT fk_supplier FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id),
	CONSTRAINT fk_product_type FOREIGN KEY (product_type_id) REFERENCES product_type(product_type_id)
);

CREATE TABLE "size" (
	size_id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);


CREATE TABLE color (
	color_id SERIAL PRIMARY KEY,
	color_code varchar(50) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);

CREATE TABLE collection (
	collection_id SERIAL PRIMARY KEY,
	collection_name varchar(50) NOT NULL,
	slug varchar(100) NOT NULL,
	image varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);

CREATE TABLE discount (
	discount_id SERIAL PRIMARY KEY,
	discount_rate int NOT NULL,
	expired timestamp NOT NULL,
	discount_info text NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int
);

CREATE TABLE product_detail (
	product_detail_id SERIAL PRIMARY KEY,
	collection_id int NOT NULL,
	product_id int NOT NULL,
	discount_id int NOT NULL,
	size_id int NOT NULL,
	color_id int NOT NULL,
	price float NOT NULL DEFAULT 0,
	unit varchar(10) NOT NULL DEFAULT 'VND',
	quantity int NOT NULL DEFAULT 0,
	weight float,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int,
	CONSTRAINT fk_collection FOREIGN KEY (collection_id) REFERENCES collection(collection_id),
	CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(product_id),
	CONSTRAINT fk_discount FOREIGN KEY (discount_id) REFERENCES discount(discount_id),
	CONSTRAINT fk_size FOREIGN KEY (size_id) REFERENCES "size"(size_id),
	CONSTRAINT fk_color FOREIGN KEY (color_id) REFERENCES color(color_id)
);

CREATE TABLE product_image (
	product_image_id SERIAL PRIMARY KEY,
	product_detail_id int NOT NULL,
	url varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_owner int,
	CONSTRAINT fk_product_detail FOREIGN KEY (product_detail_id) REFERENCES product_detail(product_detail_id)
);

CREATE TABLE "order" (
	order_id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	amount float NOT NULL DEFAULT 0,
	ship_name varchar(255) NOT NULL,
	ship_address1 varchar(255) NOT NULL,
	ship_address2 varchar(255),
	city varchar(255) NOT NULL,
	country varchar(255) NOT NULL,
	portal_code varchar(15) NOT NULL,
	telephone varchar(18) NOT NULL,
	email varchar(255) NOT NULL,
	order_date timestamp NOT NULL,
	shipped boolean NOT NULL DEFAULT FALSE,
	tracking_number varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL	
);

CREATE TABLE order_detail (
	order_detail_id SERIAL PRIMARY KEY,
	order_id int NOT NULL,
	product_detail_id int NOT NULL,
	price float NOT NULL DEFAULT 0,
	quantity int NOT NULL DEFAULT 0,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,	
	CONSTRAINT fk_order_product_detail FOREIGN KEY (product_detail_id) REFERENCES product_detail(product_detail_id),
	CONSTRAINT fk_detail_order FOREIGN KEY (order_id) REFERENCES "order"(order_id)
);

CREATE TABLE user_payment (
	user_payment_id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	payment_type int NOT NULL,
	provider varchar(255) NOT NULL,
	account_no varchar(19) NOT NULL,
	portal_code varchar(15) NOT NULL,
	expiry timestamp NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,	
	CONSTRAINT fk_payment_user FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE user_address (
	user_address_id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	address_line1 varchar(255) NOT NULL,
	address_line2 varchar(255) NOT NULL,
	city varchar(19) NOT NULL,
	portal_code varchar(15) NOT NULL,
	country varchar(255) NOT NULL,
	telephone varchar(18) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,	
	CONSTRAINT fk_address_user FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE permission (
	permission_id SERIAL PRIMARY KEY,
	permission_name varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int
);

CREATE TABLE ROLE (
	role_id SERIAL PRIMARY KEY,
	role_name varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int	
);

CREATE TABLE role_permission (
	role_id int NOT NULL,
	permission_id int NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int,
	PRIMARY KEY (role_id, permission_id),
	CONSTRAINT fk_role_permission_role FOREIGN KEY (role_id) REFERENCES "role"(role_id),
	CONSTRAINT fk_role_permission_permission FOREIGN KEY (permission_id) REFERENCES "permission"(permission_id)
);

CREATE TABLE user_role (
	role_id int NOT NULL,
	user_id int NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int,
	PRIMARY KEY (role_id, user_id),
	CONSTRAINT fk_user_role_role FOREIGN KEY (role_id) REFERENCES "role"(role_id),
	CONSTRAINT fk_user_role_user FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);

CREATE TABLE "group" (
	group_id SERIAL PRIMARY KEY NOT NULL,
	role_id int NOT NULL,
	group_name varchar(255) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int,
	CONSTRAINT fk_group_role FOREIGN KEY (role_id) REFERENCES role(role_id)
);

CREATE TABLE user_group (
	user_id int NOT NULL,
	group_id int NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_owner int,
	CONSTRAINT fk_user_group_group FOREIGN KEY (group_id) REFERENCES "group"(group_id),
	CONSTRAINT fk_user_group_user FOREIGN KEY (user_id) REFERENCES "user"(user_id)
);






















