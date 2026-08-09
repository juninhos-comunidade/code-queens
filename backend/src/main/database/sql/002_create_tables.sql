--Perguntas de segurança ex, Nome do primeiro cachorro
CREATE TABLE IF NOT EXISTS core.security_questions (
    id serial primary key not null,
    security_question_description varchar(255) not null
);

--Definição de usuário se admin e ou se usuário 
CREATE TABLE IF NOT EXISTS core.roles (
    id serial primary key not null,
    user_role varchar(10) not null
);

--stacks cadastradas python, html, css, react, sql, docker
CREATE TABLE IF NOT EXISTS core.stacks (
    id serial primary key not null,
    stacks_name varchar not null
);

-- níveis de seleção jr, pl, sr
CREATE TABLE IF NOT EXISTS core.levels (
    id serial primary key not null,
    levels_name varchar not null
);

-- tabela de questões e descrição definido por level
create table if not exists core.questions(
	id serial primary key not null,
	id_levels int not null,
	questions_description varchar not null,
	questions_enabled boolean not null,
	foreign key(id_levels)
		references core.levels(id)
);
-- tabela questões e stack N:N
CREATE TABLE IF NOT EXISTS core.questions_stack (
    id_questions INT NOT NULL,
    id_stacks INT NOT NULL,

    PRIMARY KEY (id_questions, id_stacks),

    FOREIGN KEY (id_questions)
        REFERENCES core.questions(id_questions),

    FOREIGN KEY (id_stacks)
        REFERENCES core.stacks(id_stacks)
);
--tabelas de respostas e opções
create table if not exists core.questions_option(
    id serial primary key not null,
    id_questions int not null,
    alternative_description varchar,
    answer_weight int,

    foreign key(id_questions)
    	references core.questions(id)
);
--tabela de usuários 
CREATE TABLE IF NOT EXISTS core.users(
    id UUID PRIMARY KEY default gen_random_uuid() not null,
    full_name VARCHAR(255),
    birth_date DATE,
    email VARCHAR(255) UNIQUE, 
    uf VARCHAR(2),
    gender VARCHAR(35),
    password_hash VARCHAR(255) not null ,
    id_security_questions INT NOT NULL,
    answer_security_question VARCHAR(255) not null,
    id_roles INT NOT NULL,
    created_at TIMESTAMPTZ default current_timestamp not null,
    timezone_origem VARCHAR(50),
    updated_at TIMESTAMPTZ default current_timestamp not null,

    FOREIGN KEY(id_security_questions)
        REFERENCES core.security_questions(id),

    FOREIGN KEY(id_roles)
        REFERENCES core.roles(id)
);
-- tabela de aplicação de provas
create table if not exists core.assessments_history(
    id serial primary key not null,
    id_users uuid not null,
    id_levels int not null,
    date_assessments timestamp DEFAULT current_timestamp NOT null,
    score int,
    start_time TIMESTAMPTZ default current_timestamp not null,
    end_time TIMESTAMPTZ default current_timestamp not null,

    foreign key(id_users)
    	references core.users(id),
    foreign key(id_levels)
    	references core.levels(id)
);
-- tabelas n:n de provas e quantidade de stacks
create table if not exists core.assessments_stacks(
    id_assessments int not null,
    id_stacks int not null,

    primary key(id_assessments, id_stacks),

    foreign key(id_assessments)
    	references core.assessments_history(id),
    foreign key(id_stacks)
    	references core.stacks(id)
);
--recomendações de estudo

create table if not exists core.study_recommendations(
    id serial primary key not null,
    id_stacks int not null,
    score_max int,
    score_min int,
    recommendations_descriptions text,

    foreign key(id_stacks)
    	references core.stacks(id)
);

-- tabelas de resultado
create table if not exists core.result_test(
	id serial primary key not null,
	id_assessments int not null,
	id_stacks int not null,
	id_recommendations int not null,
	score_stacks int not null,
	
	foreign key(id_assessments,id_stacks)
		references core.assessments_stacks(id_assessments,id_stacks),
	foreign key(id_recommendations)
		references core.study_recommendations(id)
);
--tabela de termos
create table if not exists core.terms_catalog(
    id serial primary key not null,
    terms_name varchar(255) NOT null,
    term_description text NOT null,
    terms_version varchar,
    created_at TIMESTAMPTZ default current_timestamp not null
    );

-- tabela de aceitação de termos
create table if not exists core.user_accepteds_terms(
	id_accepteds serial primary key not null, 
	id_users uuid not null,
	id_terms int not null,
	accepted boolean not null,
	accepted_at timestamp default current_timestamp NOT null,
	
	
	foreign key(id_users)
		references core.users(id),
	foreign key(id_terms)
		references core.terms_catalog(id)
);