drop database if exists ramp;
CREATE DATABASE ramp;

USE ramp;

CREATE TABLE managers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  dob DATE,
  description VARCHAR(255)
);
INSERT INTO employees (name, dob, description)
VALUES ('Hellena John', '1990-01-01', '(Virtual 7007)'),
       ('Afolabi David', '1995-05-15', '(Virtual 7007)'),
       ('David Oshodi', '1985-12-25', '(Virtual 7007)'),
       ('Adekunle Fisayo', '1992-06-30', '(Virtual 7007)'),
       ('Mbah Jacob', '2010-04-14', '(Virtual 7007)'),
       ('James Friday', '1998-09-19', '(Virtual 7007)');
CREATE TABLE payment (
  id INT PRIMARY KEY AUTO_INCREMENT,
  amount DOUBLE,
  dueDate DATE,
  invoiceDate DATE,
  paymentDate DATE,
  invoiceNo VARCHAR(255),
  accountNo VARCHAR(255),
  status VARCHAR(255),
  paymentStatus VARCHAR(255),
  employee_id INT,
  manager_id INT,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (manager_id) REFERENCES managers(id)
);
INSERT INTO payment (amount, dueDate, invoiceDate,paymentDate, invoiceNo, accountNo, employee_id)
VALUES
    (42000.00, '2013-03-22', '2016-11-16','2016-08-16', '#696589', '2786111763',  1),
    (65000.00, '2004-04-14', '2015-07-11', '2014-04-16', '#256584', '3910793817',  2),
    (82000.00, '2008-06-24', '2004-08-28','2013-11-19',  '#526520', '0500042814',  3),
    (17000.00, '2000-01-31', '2018-02-10','2018-11-12',  '#526589', '3954212189',  4),
    (800.00, '2023-05-12', '2023-12-19','2011-10-16',  '#696589', '2353464575', 5),
    (800.00, '2023-05-12', '2023-12-19','2016-11-16',  '#696589', '2353464575',  6);

CREATE TABLE merchants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255)
);
INSERT INTO merchants (name, description)
VALUES ('H&M', 'casio'),
       ('Renuar', 'arscris'),
       ('Bershka', 'deniel_we'),
       ('Bershka', 'shop123'),
       ('Stradivarius', 'demode'),
       ('American Eagle', 'shopsieu');


CREATE TABLE quickbooks_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
INSERT INTO quickbooks_category (name)
VALUES ('Expense'), ('Travel'), ('Travel meals'), ('Hotels'),('Automobile:Fuel'),('Dues & Subscriptions'),('Advertising'),('Disposals'),('Bank charges');

CREATE TABLE ramp_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  quickbooks_category_id INT,
  FOREIGN KEY (quickbooks_category_id) REFERENCES quickbooks_category(id)
);
INSERT INTO `ramp`.`ramp_category` (`id`, `name`, `quickbooks_category_id`) VALUES ('1', 'AirLines', '2'),('2', 'Fuel and Gas', '5'),('3', 'Saas / Software', '6');


CREATE TABLE merchant_rule (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  quickbooks_category_id INT,
  FOREIGN KEY (quickbooks_category_id) REFERENCES quickbooks_category(id)
);
INSERT INTO `ramp`.`merchant_rule` (`id`, `name`, `quickbooks_category_id`) VALUES ('1', 'Hotels', '4'),('2', 'Expense', '1');

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  date VARCHAR(45) NOT NULL,
  receipt VARCHAR(255),
  memo VARCHAR(255),
  employee_id INT,
  quickbooks_category_id INT,
  merchant_id INT,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (quickbooks_category_id) REFERENCES quickbooks_category(id),
  FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);
INSERT INTO transactions (amount, date, receipt, memo, employee_id, merchant_id)
VALUES
  (42000.00, 'Apr 14, 2004', '#200257', '21-00006', 1, 1),
  (42000.00, 'Sep 19, 2010', '#526534', '21-00004', 2, 2),
  (37000.00, 'Aug 28, 2004', '#526520', '21-00010', 3, 3),
  (21000.00, 'Aug 07, 2019', '#526589', '21-00005', 4, 4),
  (17000.00, 'May 16, 2005', '#526587', '21-00007', 5, 5),
  (12000.00, 'Aug 27, 2019', '#105986', '20-00400', 6, 6);
