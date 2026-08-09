--Perguntas de segurança ex, Nome do primeiro cachorro
CREATE TABLE IF NOT EXISTS core.security_questions (
id_security_questions int primary key,
security_question_description varchar(255) not null
);
--Definição de usuário se admin e ou se usuário 
CREATE TABLE IF NOT EXISTS core.roles (
id_roles int primary key,
user_role varchar(10) not null
);
--stacks cadastradas python, html, css, react, sql, docker
CREATE TABLE IF NOT EXISTS core.stacks (
id_stacks int primary key,
stacks_name varchar not null
);
-- níveis de seleção jr, pl, sr
CREATE TABLE IF NOT EXISTS core.levels (
id_levels int primary key,
levels_name varchar not null
);
-- tabela de questões e descrição definido por level
create table if not exists core.questions(
	id_questions int primary key,
	id_levels int not null,
	questions_description varchar not null,
	questions_enabled boolean not null,
	foreign key(id_levels)
		references core.levels(id_levels)
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
id_alternative int primary key,
id_questions int not null,
alternative_description varchar,
answer_weight int,

foreign key(id_questions)
	references core.questions(id_questions)
);
--tabela de usuários 
CREATE TABLE IF NOT EXISTS core.users(
    id_users UUID PRIMARY KEY,
    full_name VARCHAR(255),
    birth_date DATE,
    email VARCHAR(155),
    uf VARCHAR(2),
    gender VARCHAR(35),
    password_hash VARCHAR,
    id_security_questions INT NOT NULL,
    answer_security_question VARCHAR,
    id_roles INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(id_security_questions)
        REFERENCES core.security_questions(id_security_questions),

    FOREIGN KEY(id_roles)
        REFERENCES core.roles(id_roles)
);
-- tabela de aplicação de provas
create table if not exists core.assessments_history(
id_assessments int primary key,
id_users uuid not null,
id_levels int not null,
date_assessments timestamp,
score int,
start_time timestamp,
end_time timestamp,

foreign key(id_users)
	references core.users(id_users),
foreign key(id_levels)
	references core.levels(id_levels)
);
-- tabelas n:n de provas e quantidade de stacks
create table if not exists core.assessments_stacks(
id_assessments int not null,
id_stacks int not null,

primary key(id_assessments, id_stacks),

foreign key(id_assessments)
	references core.assessments_history(id_assessments),
foreign key(id_stacks)
	references core.stacks(id_stacks)
);
--recomendações de estudo
create table if not exists core.study_recommendations(
id_recommendations int primary key,
id_stacks int not null,
score_max int,
score_min int,
recommendations_descriptions varchar,

foreign key(id_stacks)
	references core.stacks(id_stacks)
);

-- tabelas de resultado salvando score por tipo de stacks
create table if not exists core.result_test(
	id_result_test int primary key,
	id_assessments int not null,
	id_stacks int not null,
	id_recommendations int not null,
	score_stacks int not null,
	
	foreign key(id_assessments,id_stacks)
		references core.assessments_stacks(id_assessments,id_stacks),
	foreign key(id_recommendations)
		references core.study_recommendations(id_recommendations)
);
