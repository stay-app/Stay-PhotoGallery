-- psql -U postgres -d mydb -a -f "database/schema.sql"
DROP DATABASE IF EXISTS photogallery;
DROP TABLE IF EXISTS images, listings;
CREATE DATABASE IF NOT EXISTS photogallery;
USE photogallery;

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(500),
  sequence_id INTEGER,
  caption VARCHAR(200),
  listing_id INTEGER NOT NULL
);

CREATE TABLE listings (
  id INTEGER NOT NULL
);