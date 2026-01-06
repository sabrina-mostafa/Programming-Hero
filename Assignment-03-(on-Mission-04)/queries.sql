-- users table
create table users (
  user_id serial primary key,
  name varchar(50) not null,
  email varchar(100) unique not null,
  password text not null,
  phone varchar(15),
  role varchar(20) not null 
    check( role in('admin', 'customer'))
);

-- vehicles table
create table vehicles (
  vehicle_id serial primary key,
  name varchar(50),
  type varchar(10) not null 
    check( type in('car', 'bike', 'truck')),
  model varchar(10),
  reg_no varchar(20) unique not null,
  rental_price numeric(10,2) not null,
  availability_status varchar(20) not null 
    check( availability_status in('available', 'rented', 'maintenance')
  )
);

-- bookings table
create table bookings (
  booking_id serial primary key,
  user_id int not null references users(user_id),
  vehicle_id int not null references vehicles(vehicle_id),
  start_date date not null,
  end_date date not null check(end_date > start_date),
  status varchar(20) not null 
    check( status in('pending', 'confirmed', 'completed', 'cancelled')),
  total_cost numeric(10,2) not null
);

-- insert on users table
INSERT INTO users (name, email, password, phone, role)
VALUES
('Rahim Uddin', 'rahim@email.com', 'hash$1a2b3c4d', '01711111111', 'admin'),
('Karim Ahmed', 'karim@email.com', 'hash$2b3c4d5e', '01822222222', 'customer'),
('Sara Khan', 'sara@email.com', 'hash$3c4d5e6f', '01633333333', 'customer'),
('John Smith', 'john@email.com', 'hash$4d5e6f7g', '01944444444', 'admin');

-- insert on vehicles table
INSERT INTO vehicles (name, type, model, reg_no, rental_price, availability_status)
VALUES
('Toyota Corolla', 'car', '2021', 'ABC123', 50.00, 'available'),
('Honda Civic', 'car', '2020', 'XYZ456', 60.00, 'rented'),
('Yamaha R15', 'bike', '2019', 'BIKE789', 25.00, 'available'),
('Ford F-150', 'truck', '2022', 'TRK321', 100.00, 'maintenance'),
('Suzuki Swift', 'car', '2021', 'SUZ654', 45.00, 'available'),
('KTM Duke', 'bike', '2022', 'KTM987', 35.00, 'available'),
('Mercedes Sprinter', 'truck', '2021', 'MRC543', 120.00, 'rented');

-- insert on bookings table
INSERT INTO bookings (user_id, vehicle_id, start_date, end_date, status, total_cost)
VALUES
(1, 1, '2026-01-10', '2026-01-12', 'confirmed', 100.00),
(2, 3, '2026-01-15', '2026-01-17', 'pending', 50.00),
(3, 2, '2026-01-20', '2026-01-22', 'completed', 120.00),
(4, 5, '2026-01-25', '2026-01-27', 'confirmed', 90.00),
(1, 4, '2026-02-01', '2026-02-03', 'cancelled', 200.00);



-- Query 1: JOIN (INNER JOIN)
-- Retrieve booking information along with:
-- Customer name
-- Vehicle name
select u.name as customer_name, 
  v.name as vehicle_name, b.* from users as u
  inner join bookings as b on u.user_id = b.user_id
  inner join vehicles as v on v.vehicle_id = b.vehicle_id;


-- Query 2: EXISTS (NOT EXISTS)
-- Find all vehicles that have never been booked.
select * from vehicles v
  where not exists (
  select 1 from bookings b
    where b.vehicle_id = v.vehicle_id
  );


-- Query 3: SELECT, WHERE
-- Retrieve all available vehicles of a specific type (e.g. cars).
select * from vehicles
  where availability_status = 'available' and
  type = 'car';


-- Query 4: GROUP BY, HAVING and COUNT
-- Find the total number of bookings for each vehicle and display only those vehicles that have more than 2 bookings.
select v.vehicle_id, v.name as vehicle_name, 
  count(*) as total_bookings 
  from vehicles as v
  join bookings as b
  on v.vehicle_id = b.vehicle_id
  group by v.vehicle_id
  having count(*) > 2;
  

