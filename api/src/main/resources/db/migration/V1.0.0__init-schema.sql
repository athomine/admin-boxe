create sequence hibernate_sequence start 1000 increment 50;


create table users (
	id bigint not null constraint users_pkey primary key,
	login varchar(255) not null constraint users_login_unique unique,
	password varchar(255) not null
);

create table roles (
    id bigint not null constraint role_pkey primary key,
    name varchar(255) not null constraint role_unique unique
);

create table user_role (
    user_id bigint not null,
    role_id bigint not null,
    primary key (user_id, role_id)

);

create table fighter (
	id bigint not null constraint fighter_pkey primary key,
    birthDate date not null,
	lastName varchar(255) not null,
	firstName varchar(255) not null,
	gender varchar(255) not null,
	user_id bigint constraint fighter_users references users
);

create table season (
	id bigint not null constraint season_pkey primary key,
	start_date date not null,
	end_date date not null
);

create table fighter_season (
    id bigint not null constraint fighter_season_pkey primary key,
    fighter_id bigint constraint fighter_season_fighter references fighter,
    season_id bigint constraint fighter_season_season references season,
    type varchar(255) not null
);


insert into roles values(1, 'ROLE_ADMIN');
insert into roles values(2, 'ROLE_FIGHTER');

insert into season values(1, '2019-09-01', '2020-07-01');
