-- Create databases
CREATE DATABASE hotel_crm;
CREATE DATABASE hotel_pms;

-- Create a user for database access
CREATE USER admin WITH ENCRYPTED PASSWORD 'password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE hotel_crm TO admin;
GRANT ALL PRIVILEGES ON DATABASE hotel_pms TO admin;
