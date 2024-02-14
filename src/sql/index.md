# Introduction to SQL

## What is SQL?

SQL is a powerful language designed for managing and manipulating relational
databases. From its inception in the early 1970s at IBM, SQL has evolved into a
standard that underpins the vast majority of today's database systems, including
MySQL, PostgreSQL, SQL Server, and Oracle. It enables you to extract, analyse,
and process data, turning raw figures into actionable insights.

## Tables

A SQL database is made up of tables. A table looks a lot like a spreadsheet:

`Table: users`

| id  | username       | access | verified | followers |
| :-: | -------------- | ------ | :------: | :-------: |
|  1  | EluskM         | admin  |    1     |  1987531  |
|  2  | BillGatekeeper | user   |    1     |  1200457  |
|  3  | JeffWho        | user   |    0     |  500124   |
|  4  | OprahWindey    | admin  |    1     |  1750322  |
|  5  | MarkZeeberg    | user   |    1     |  1600320  |

If you have worked with spreadsheets before, you'll feel quite at home with SQL.
Each row represents an entity, such as a user. Each column represents an
attribute, such as the user's access level. What SQL allows you to do is talk to
the tables in the database to save and extract _exactly_ the information you
need.

## What can you do with SQL?

The applications of SQL are as diverse as they are impactful. To take a few
examples:

- **Human genome project:** An international research project to study human DNA
  relies extensively on SQL databases to store data about the genome. By
  constructing complex queries, scientists are able to identify gene locations,
  understand genetic variations, and make significant advances in genetics and
  biomedicine.

- **Panama papers:** Investigative journalists and data analysts used SQL
  queries to sift through the leaked documents and identify connections between
  offshore accounts and public figures. While the investigation relied on
  various data analysis tools, the use of SQL to query the data played a crucial
  role in uncovering the relationships and financial transactions that led to
  significant legal and political repercussions worldwide.

- **AI development:** In AI development, SQL plays a crucial role in data
  preparation and exploration, acting as the backbone for managing and querying
  relational databases. It facilitates the cleaning, transformation, and
  aggregation of data, enabling data scientists to craft the datasets needed for
  training accurate and efficient AI models.

## Learning SQL

We'll begin by learning how to query data from an existing database. Later,
we'll take a look at managing the database - creating new tables, modifying
tables, and so on.

There's plenty to learn so we'd better get going!
