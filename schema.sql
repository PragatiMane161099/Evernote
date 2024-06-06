create database evernote;
use evernote;
create table user(id integer primary key auto_increment, name varchar(100), email varchar(100), password varchar(100), phone varchar(20), address varchar(100));
create table notes(id integer primary key auto_increment, title varchar(100), contents varchar(100), userId integer, isPrivate int(1), file varchar(100));
alter table user add column activationToken varchar(100);
alter table user add column active int(1) default 0;