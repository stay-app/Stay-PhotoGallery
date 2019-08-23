-- psql -U postgres -d mydb -a -f "database/schema.sql"
drop table if exists images, listings;

create table images (
  id serial primary key,
  image_url varchar(100),
  sequence_id integer,
  caption varchar(200),
  listing_id integer not null
);

create table listings (
  id integer not null
);