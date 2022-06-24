CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "gif_id" VARCHAR NOT NULL,
    "category_id" INT REFERENCES "category" NOT NULL,
    "url" VARCHAR NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


-- Create some dummy-data to start with
INSERT INTO "favorites"
	("gif_id", "category_id", "url")
VALUES
	('xT4uQulxzV39haRFjG', 1, 'https://media0.giphy.com/media/xT4uQulxzV39haRFjG/100w.gif?cid=0f174abbb48b0f945d73b1ab62621b5ff3cbb06432c26ec0&rid=100w.gif&ct=g'),
	('dLvzDjRKoCxRLaTV3p', 2, 'https://media1.giphy.com/media/dLvzDjRKoCxRLaTV3p/giphy.gif?cid=0f174abbb98ff5de40eb9de82209c3b0e20463209a344ca7&rid=giphy.gif&ct=g');